import { StyleSheet, Text, View } from "react-native";
import Goback from "../components/GoBack";
import React, { useState } from "react";
import { Button } from "react-native-elements";

export default function HomeDetails() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <View>
      <Goback title="volver"></Goback>
      <View style={styles.container}>
        <Text style={styles.countText}>Contador: {count}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Incrementar" onPress={incrementCount} />
          <Button title="Decrementar" onPress={decrementCount} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  countText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
});
