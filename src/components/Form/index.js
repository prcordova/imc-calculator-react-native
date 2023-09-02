import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Keyboard,
  Pressable,
  FlatList,
} from "react-native";
import ResultIMC from "./ResultIMC";
import { useState } from "react";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageIMC, setMessageIMC] = useState("Preencha o peso e altura");
  const [IMC, setIMC] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);
  const [messageStatus, setMessageStatus] = useState(null);
  const [imcList, setImcList] = useState([]);

  function validationImc() {
    Keyboard.dismiss();
    if (weight != null && height != null) {
      let heightFormat = height.replace(",", ".");
      const imc = weight / (heightFormat * heightFormat);
      setImcList((arr) => [...arr, { id: new Date().getTime(), imc }]);
      setIMC(imc);

      setHeight(null);
      setWeight(null);
      setTextButton("Calcular novamente");

      const imcMessages = {
        17: "Muito abaixo do peso",
        18.49: "Abaixo do peso",
        24.99: "Peso normal",
        29.99: "Acima do peso",
        34.99: "Obesidade I",
        39.99: "Obesidade II (severa)",
        Infinity: "Obesidade III (mórbida)",
      };

      const imcKeys = Object.keys(imcMessages);

      let message = "";

      for (let i = 0; i < imcKeys.length; i++) {
        if (imc <= parseFloat(imcKeys[i])) {
          message = imcMessages[imcKeys[i]];
          break;
        }
      }
      setMessageIMC(`${message}`);
      setMessageStatus("Seu IMC é igual:");

      setErrorMessage(null);
      return setIMC(imc.toFixed(2));
    }
    if (IMC == null) {
      setErrorMessage("campo obrigatório*");
      Vibration.vibrate();
    }

    setIMC(null);
    setMessageStatus("");
    setTextButton("Calcular");
  }

  return (
    <View style={styles.formContext}>
      {IMC == null ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>ALtura</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ex. '1.75'"
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
          />

          <Text style={styles.errorMessage}>{errorMessage}</Text>

          <Text style={styles.formLabel}>Peso</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Ex. '85.200'"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TouchableOpacity
            onPress={() => validationImc()}
            style={styles.buttonCalculator}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <>
          <View style={styles.exibitionResultImc}>
            <ResultIMC
              messageStatus={messageStatus}
              messageResultIMC={messageIMC}
              resultIMC={IMC}
            />
          </View>
          <TouchableOpacity
            onPress={() => validationImc()}
            style={styles.buttonCalculator}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.listImcs}
            data={imcList.reverse()}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.resultListContainer}>
                  <Text
                    style={[
                      styles.item,
                      index % 2 !== 0 ? styles.itemOdd : styles.itemEven,
                    ]}
                  >
                    <Text style={styles.textResultItemList}>
                      Resultado IMC :
                    </Text>
                    {item.imc.toFixed(2)}
                  </Text>
                </View>
              );
            }}
            keyExtractor={(item) => {
              item.id;
            }}
          />
        </>
      )}
    </View>
  );
}
