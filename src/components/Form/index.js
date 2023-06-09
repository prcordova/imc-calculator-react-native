import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Keyboard,
  Pressable,
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

  function validationImc() {
    Keyboard.dismiss();
    if (weight != null && height != null) {
      let heightFormat = height.replace(",", ".");
      const imc = weight / (heightFormat * heightFormat);

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

      setErrorMessage(null);
      return setIMC(imc.toFixed(2));
    }
    if (IMC == null) {
      setErrorMessage("campo obrigatório*");
      Vibration.vibrate();
    }

    setIMC(null);
    setTextButton("Calcular");
    setMessageIMC("Preencha o peso e altura");
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
      <View style={styles.form}>
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
      </View>
      <ResultIMC messageResultIMC={messageIMC} resultIMC={IMC} />
    </Pressable>
  );
}
