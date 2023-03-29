import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      setResult("Por favor ingrese su peso y altura");
      return;
    }
    const bmi = (
      parseFloat(weight) / Math.pow(parseFloat(height) / 100, 2)
    ).toFixed(2);
    setResult(`Su IMC es ${bmi}`);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.header}>Calculadora de IMC</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Peso en kg"
          value={weight}
          onChangeText={(value) => setWeight(value)}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Altura en cm"
          value={height}
          onChangeText={(value) => setHeight(value)}
        />
        <TouchableOpacity style={styles.button} onPress={calculateBMI}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.result}>{result}</Text>
      </View>
      <Button
        title="ir a detalles"
        onPress={() => navigation.navigate("HomeDetails")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mcontainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: "80%",
    fontSize: 16,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
});
