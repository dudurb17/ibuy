import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Redirect, useLocalSearchParams } from 'expo-router';

export default function Home() {
  const {id}=useLocalSearchParams()
  if(!id){
    return <Redirect href={'/'} />
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home - {id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", },
  
});
