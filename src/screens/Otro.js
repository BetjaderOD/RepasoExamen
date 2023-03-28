import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Otro() {
     const [items, setItems] = useState([
     ])
const [formValues, setFormValues] = useState({ id: "", text: "" });

const handleFormSubmit = () => {
  const newItem = { id: formValues.id, text: formValues.text };
  setItems([...items, newItem]);
  setFormValues({ id: "", text: "" });
};

const handleInputChange = (field, value) => {
  setFormValues({ ...formValues, [field]: value });
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de elementos</Text>
      {items.map((item) => (
        <Text key={item.id} style={styles.item}>
          {item.text}
        </Text>
      ))}
      <Text style={styles.title}>Agregar nuevo elemento</Text>
      <TextInput
        style={styles.input}
        placeholder="ID"
        value={formValues.id}
        onChangeText={(text) => handleInputChange("id", text)}
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Texto"
        value={formValues.text}
        onChangeText={(text) => handleInputChange("text", text)}
      />
      <Button title="Agregar" onPress={handleFormSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginBottom: 10,
    padding: 10,
  },
});
