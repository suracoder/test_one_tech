
import { Avatar, HStack, Center, NativeBaseProvider } from "native-base";

import AvL from "./Avater"

import React from "react";
import { View, Text } from "react-native"
// import { Pressable, Text, Box, HStack, Spacer, Flex, Badge, Center, NativeBaseProvider } from "native-base";


export default () => {
  return (
    <View style={{
      justifyContent: "space-between", backgroundColor: "#ffff",
      borderRadius: 5,
      height: 100, flexDirection: "row", marginTop: 80, marginLeft: 30, marginRight: 30,
    }}>
      <View style={{ alignItems: "flex-start", padding: 10,flexDirection:"row" }}><Text>Hello </Text><Text>Robert Grant</Text></View>
      <View style={{ alignItems: "flex-end", padding: 20 }}><AvL /></View>

    </View>
  );
};
