
import React from "react";
import {View,Text,Button} from "react-native"
// import { Pressable, Text, Box, HStack, Spacer, Flex, Badge, Center, NativeBaseProvider } from "native-base";

 
    export default () => {
        return (
          <View style={{justifyContent:"space-between",
          backgroundColor:"#ffff", height:200,flexDirection:"column",
          marginTop:10,marginLeft:30,marginRight:30,borderStyle:"solid",
          borderWidth:1 ,borderColor:"#c8d1db" ,shadow:1 , rounded:10,borderRadius:7
          }}>

              <View style={{flexDirection:"row",flex:0}} >
              <View style={{flex:1,alignItems:"flex-start",padding:10}}><Text>
                  robert adem
              </Text>
              <Text>Id code 3941</Text>
              </View>
              <View  style={{padding:10,alignItems:'flex-end'}}><Button title="Edit"  color={"#4b778d"} /></View>
              </View>
              <View style={{flex:0,alignItems:"flex-start",paddingBottom:100,paddingLeft:10}}><Text>
                 +01248595999584
              </Text>
              <Text>surafelworku46@gmail.com</Text>
              <Text>245 56 naivr</Text>
              <Text>MI 493849</Text>
              <View  style={{ flex:0,width:'100%',padding:10,}}><Button title="Request Pending"  borderRadius='10' color={"#9faebf"} /></View>

              </View>

          </View>
        );
    };
    