
import React from "react";
import {View,Text,Button} from "react-native"
// import { Pressable, Text, Box, HStack, Spacer, Flex, Badge, Center, NativeBaseProvider } from "native-base";

 
    export default () => {
        return (
          <View style={{justifyContent:"space-between",backgroundColor:"#ffff", 
          height:40,flexDirection:"row",marginTop:20,marginLeft:30,marginRight:30,
          }}>
              <View style={{flex:0,alignItems:"flex-start"}}><Text>Co-Partener with</Text></View>
              <View  style={{alignItems:"flex-end"}}><Button title="Add" color={"#4b778d"} /></View>

          </View>
        );
    };
    