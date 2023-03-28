import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-web";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="ir a detalles"
        onPress={() => navigation.navigate("HomeDetails")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});