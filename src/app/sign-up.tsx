import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Link, router, useLocalSearchParams } from "expo-router";

export default function SignUp() {
  const {name} = useLocalSearchParams()
  function back() {
    router.back()
  }

  return (
    <View style={styles.container}>
       <Text >{name}</Text>
      {/* <Link href="/">
        <Text style={styles.back}>Voltar</Text>
      </Link> */}
      <TouchableOpacity onPress={back}>
        <Text style={styles.back}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  back: { fontSize: 16, fontWeight: "bold" },
});
