import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import HomeNavigation from "./HomeNavigation";
import Otro from "../screens/Otro";
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Otro" component={Otro} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
