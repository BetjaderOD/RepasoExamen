import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function SettingsScreen() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleFormSubmit = () => {
    if (formData.name && formData.email && formData.password) {
      console.log("Form submitted!", formData);
      // Aquí podrías enviar los datos a un servidor o hacer alguna otra acción
    }else{
        console.log("Form not submitted!");
    }

    // Limpiar el formulario
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario de Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={formData.name}
        onChangeText={(text) => handleInputChange("name", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={formData.email}
        onChangeText={(text) => handleInputChange("email", text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={formData.password}
        onChangeText={(text) => handleInputChange("password", text)}
        secureTextEntry
      />
      <Button title="Registrarse" onPress={handleFormSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
});
