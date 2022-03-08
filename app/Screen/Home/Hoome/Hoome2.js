
import React from "react";
import { View, Text } from "react-native"
// import { Pressable, Text, Box, HStack, Spacer, Flex, Badge, Center, NativeBaseProvider } from "native-base";
// import { Button } from "../app/components/Button/Button";
import Button from "../../../components/Button/Button"

import { Ionicons } from '@expo/vector-icons';

export default (props) => {
    return (
        <View  style={{backgroundColor:"#ffff",flex:1}}>
 <View style={{ flex:0, marginTop:100,marginLeft:40,flexDirection:"row" }}>
 <Ionicons 
         onPress={()=>{
             props.navigation.navigate('Home');
         }}
         
         name="ios-arrow-back" size={24} color="#4b778d" />
     {/* <Button title="cancle"></Button> */}
     <Text  style={{marginLeft:15,fontWeight:"bold",paddingTop:5}}>back to main</Text></View>

                    <View style={{marginTop:35,marginLeft:40}}><Text>enter co partnet  id and ohere info Dewelulsh suriye  Dewelulsh suriye </Text></View>
        <View style={{
            justifyContent: "space-between",
            backgroundColor: "#ffff", height: 180, flexDirection: "column",
            marginTop: 40, marginLeft: 30, marginRight: 30, borderStyle: "solid",
            borderWidth: 1, borderColor: "#c8d1db", shadow: 1, rounded: 10, borderRadius: 7
        }}>

            <View style={{ flexDirection: "row", flex: 0 }} >
                <View style={{ flex: 1, alignItems: "flex-start", padding: 5 }}><Text>
                    Date
                </Text>

                </View>
                <View style={{ padding: 10, alignItems: 'flex-end' }}>
                    {/* <Button title="Edit"  color={"#4b778d"} /> */}
                    <Text>2/12/2020</Text>
                </View>
            </View>

            <View style={{ flexDirection: "row", flex: 0 }} >
                <View style={{ flex: 1, alignItems: "flex-start", padding: 5 }}><Text>
                    Email
                </Text>

                </View>
                <View style={{ padding: 5, alignItems: 'flex-end' }}>
                    {/* <Button title="Edit"  color={"#4b778d"} /> */}
                    <Text>surafelworku46@gmail.com</Text>
                </View>
            </View>

            <View style={{ flexDirection: "row", flex: 0 }} >
                <View style={{ flex: 1, alignItems: "flex-start", padding: 5 }}><Text>
                    Id Code
                </Text>

                </View>
                <View style={{ padding: 5, alignItems: 'flex-end' }}>
                    {/* <Button title="Edit"  color={"#4b778d"} /> */}
                    <Text>3642</Text>
                </View>
            
            </View>
            <View style={{ flex: 1,margin:10 }}>
                
            <Button text="Request Pending"  backgroundColor="#4b778d" ></Button>
            </View>
         
        </View>
        <View style={{margin:40,marginTop:240}}><Button text="Cancle"  backgroundColor="#c53f40"></Button></View>
     
        </View>
    );
};
