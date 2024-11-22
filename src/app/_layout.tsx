import { View, Text } from "react-native";
import React from "react";
import { Slot } from "expo-router";

export default function Layout() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: "100%", height: 40, backgroundColor: "black" }} />
      <Slot />
      <View style={{ width: "100%", height: 40, backgroundColor: "red" }} />
    </View>
  );
}
