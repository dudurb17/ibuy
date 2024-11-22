import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

export default function Index() {
  function signUp() {
    router.navigate("/sign-up");
  }
  return (
    <View style={styles.container}>
      {/* <Link href="/sign-up" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.label}>Criar conta</Text>
        </TouchableOpacity>
      </Link> */}
      <TouchableOpacity style={styles.button} onPress={signUp}>
        <Text style={styles.label}>Criar conta</Text>
      </TouchableOpacity>
      {/* <Link
        href={{
          pathname: "/sign-up",
          params: {
            name: "Eduardo",
            id: 1,
          },
        }}
      >
        Enviar parâmetro
      </Link> */}

      <Link href={{ pathname: "/home", params: { id: 7 } }}>Ir para home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  label: { fontSize: 16, fontWeight: "bold", color: "#FFF" },
  button: {
    backgroundColor: "black",
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
