// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     if (!email || !password) {
//       alert("Por favor ingrese su correo y contraseña");
//       return;
//     }

//     // Autenticación de usuario estática
//     if (email === "usuario@example.com" && password === "contraseña") {
//       // Generar token estático
//       const token = "TOKEN_DE_EJEMPLO";

//       // Redirigir a la pantalla de cálculo de IMC con token como parámetro
//       navigation.navigate("Home", { token });
//     } else {
//       alert("Credenciales incorrectas");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Iniciar sesión</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Correo electrónico"
//         value={email}
//         onChangeText={(value) => setEmail(value)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Contraseña"
//         secureTextEntry={true}
//         value={password}
//         onChangeText={(value) => setPassword(value)}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Iniciar sesión</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 20,
//     width: "80%",
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: "blue",
//     padding: 10,
//     borderRadius: 5,
//     width: "80%",
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Por favor ingrese su correo y contraseña");
      return;
    }

    // Autenticación de usuario estática
    if (email === "usuario@example.com" && password === "contraseña") {
      // Generar token estático
      const token = "TOKEN_DE_EJEMPLO";

      // Redirigir a la pantalla de cálculo de IMC con token como parámetro
      navigation.navigate("Home", { token });
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Iniciar sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    marginBottom: 24,
  },
  input: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  button: {
    backgroundColor: "blue",
    padding: 16,
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
