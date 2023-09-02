import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultIMC(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: `Meu IMC hoje é : ${props.resultIMC} ! configa seu IMC no app IMC Calculator e cuide de sua saúde.`,
    });
  };

  return (
    <View style={styles.contextIMC}>
      <View style={styles.boxShareButton}></View>
      <Text style={styles.messageStatus}>{props.messageStatus}</Text>
      <Text style={styles.resultImc}>{props.resultIMC}</Text>
      <Text style={styles.information}>{props.messageResultIMC}</Text>
      <TouchableOpacity style={styles.shared} onPress={onShare}>
        <Text style={styles.sharedText}>Share</Text>
      </TouchableOpacity>
    </View>
  );
}
