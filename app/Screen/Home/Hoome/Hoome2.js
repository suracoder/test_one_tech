
import React,{useState,useEffect} from "react";
import { View, Text } from "react-native"
// import { Pressable, Text, Box, HStack, Spacer, Flex, Badge, Center, NativeBaseProvider } from "native-base";
// import { Button } from "../app/components/Button/Button";
import Button from "../../../components/Button/Button"

import { Ionicons } from '@expo/vector-icons';
import {color} from "../../../styles/color"

import CancleDialog from "./CancleDialog";
export default (props) => {


    const [showModal, setShowModal] = useState(false);
let handleCloseWindow=()=>{
    setShowModal(false)
}
    return (
        <View  style={{backgroundColor:"#ffff",flex:1}}>
 <View style={{ flex:0, marginTop:100,marginLeft:40,flexDirection:"row",marginRight:40 }}>
 <Ionicons 
         onPress={()=>{
             props.navigation.navigate('Home');
         }}
         
         name="ios-arrow-back" size={24} color="#4b778d" />
     {/* <Button title="cancle"></Button> */}
     <Text  style={{marginLeft:15,fontWeight:"bold",paddingTop:5}}>Add New Co-Parent</Text></View>

                    <View style={{marginTop:35,marginLeft:40,marginRight:40}}><Text>Enter Co-parent registered email given ID code number to connect </Text></View>
        <View style={{
            justifyContent: "space-between",
            backgroundColor: "#ffff", height: 230, flexDirection: "column",
            marginTop: 40, marginLeft: 30, marginRight: 30, borderStyle: "solid",
            borderWidth: 1, borderColor: "#c8d1db", shadow: 1, rounded: 10, borderRadius: 7
        }}>

            <View style={{ flexDirection: "row", flex: 0 ,padding:30}} >
                <View style={{ flex: 1, alignItems: "flex-start", padding: 0 }}><Text>
                    Date
                </Text>

                </View>
                <View style={{ padding: 0, alignItems: 'flex-end' }}>
                    {/* <Button title="Edit"  color={"#4b778d"} /> */}
                    <Text style={{color:color.primary}}>2/12/2020</Text>
                </View>
            </View>

            <View style={{ flexDirection: "row", flex: 0,padding:0 }} >
                <View style={{ flex: 1, alignItems: "flex-start", paddingLeft:30 }}><Text>
                    Email
                </Text>

                </View>
                <View style={{ paddingRight: 30, alignItems: 'flex-end' }}>
                    {/* <Button title="Edit"  color={"#4b778d"} /> */}
                    <Text  style={{color:color.primary}}>surafelworku46@gmail.com</Text>
                </View>
            </View>

            <View style={{ flexDirection: "row", flex: 0 ,marginTop:15}} >
                <View style={{ flex: 1, alignItems: "flex-start",  paddingLeft:30  }}><Text>
                    Id Code
                </Text>

                </View>
                <View style={{  paddingRight: 30, alignItems: 'flex-end' }}>
                    {/* <Button title="Edit"  color={"#4b778d"} /> */}
                    <Text  style={{color:color.primary}}>3642</Text>
                </View>
            
            </View>
            <View style={{ flex: 1,alignContent:"center" ,alignItems:"center" ,alignSelf:"center",marginTop:20 }}>
                
            <Button text="Request Pending"  backgroundColor="#ced6df" ></Button>
            </View>
         
        </View>
        <View style={{margin:40,marginTop:240}}><Button   onPress={()=>{
            setShowModal(true)
        }} text="Cancle"  backgroundColor="#c53f40"></Button></View>
     <CancleDialog showModal={showModal}  handleCloseWindow={handleCloseWindow} data="drferfe" />
        </View>
    );
};
