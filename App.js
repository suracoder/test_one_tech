
import React, { Component } from "react";
import { View, StyleSheet, Text, FlatList, Dimensions, TouchableOpacity, StatusBar } from "react-native";


import MainNav from "./app/navigation/index"

 



export default function App() {
  return (
    <View style={styles.container}>

      <MainNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    flex: 1,
    backgroundColor: "#ffff",
 
  },
  
});