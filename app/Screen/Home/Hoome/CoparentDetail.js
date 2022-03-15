
 import React from "react";
import {View,Text} from "react-native"
// import { Pressable, Text, Box, HStack, Spacer, Flex, Badge, Center, NativeBaseProvider } from "native-base";
import Button from "../../../components/Button/Button"
 import { color } from "../../../styles/color";
    export default () => {
        return (
          <View style={{justifyContent:"space-between",
          backgroundColor:"#ffff", height:250,flexDirection:"column",
          marginTop:10,marginLeft:30,marginRight:30,borderStyle:"solid",
          borderWidth:1 ,borderColor:"#c8d1db" ,shadow:1 , rounded:10,borderRadius:7
          }}>

              <View style={{flexDirection:"row",flex:0,padding:15}} >
              <View style={{flex:1,alignItems:"flex-start",padding:10}}>
                  <Text style={{fontWeight:"normal"  ,fontSize:16,color:color.primary}}>
                  Robert adem
              </Text>
              <Text>ID Code 3941</Text>
              </View>
              <View  style={{padding:10,alignItems:'flex-end'}}><Button  bordered={true}    text="Edit" size="small" type="outlined" backgroundColor="#fff"   /></View>
              </View>
              <View style={{flex:0,alignItems:"flex-start",paddingBottom:100,paddingLeft:20,}}>
                  <Text style={{fontWeight:"normal"  ,fontSize:16,color:color.primary}}>
                 +0124859599958
              </Text>
              <Text>surafelworku46@gmail.com</Text>
              <Text>245 56 naivr</Text>
              <Text>MI 493849</Text>
              <View  style={{ flex:0,alignContent:"center" ,alignItems:"center" ,alignSelf:"center",marginRight:15,marginTop:10}}>
                  <Button text="Request Pending"  borderRadius='10' color={"#9faebf"}   backgroundColor="#ced6df"/></View>

              </View>

          </View>
        );
    };
    