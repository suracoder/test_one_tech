import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import FirstColument from './FirstColument';
// import SecondCoument from './SecondCoument';
// import SecondList from "./
// import TherdView from './Hoome1_box';
// import Header from './Header';
import AvL from "./Avater"
import Button from "../../../components/Button/Button"
import CoparentDetail from "./CoparentDetail"
import { color } from '../../../styles/color';
export default function HomeScreen({ navigation }) {

  const Header = () => {
    return <View style={{
      justifyContent: "space-between", backgroundColor: "#ffff",
      borderRadius: 5,
      height: 100, flexDirection: "row", marginTop: 100, marginLeft: 30, marginRight: 30,
    }}>
       <View style={{ alignItems: "flex-start", marginTop:30,flexDirection:"row" }}><Text>Hello </Text><Text style={{color:color.primary,fontWeight:"bold"}} >Robert Grant</Text></View>

      <View style={{ alignItems: "flex-end", padding: 20 }}><AvL /></View>

    </View>

  }


  const Id_Code = () => {
    return <View style={{
      justifyContent: "space-between", backgroundColor: "#ecf1f4",
      borderRadius: 5,
      height: 60, flexDirection: "row", marginTop: 0, marginLeft: 30, marginRight: 30,
    }}>
      <View style={{ alignItems: "flex-start", padding: 20 }}><Text>Your Id Code</Text></View>
      <View style={{ alignItems: "flex-end", padding: 20 }}><Text>3621</Text></View>

    </View>

  }


  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* <Header/> */}

      <Header />
      <Id_Code />


      <View style={{
        justifyContent: "space-between", backgroundColor: "#ffff",
        height: 40, flexDirection: "row", marginTop: 20, marginLeft: 30, marginRight: 30,
      }}>
        <View style={{ flex: 0, alignItems: "flex-start" }}><Text style={{paddingTop:7}}>Co-Parenting with</Text></View>
        <View style={{ alignItems: "flex-end" ,marginTop:0}}>
          <Button onPress={() => {
          navigation.navigate('Hoome2');
        }} text="Add" size="small" backgroundColor="#4b778d" /></View>

      </View>

 
      <CoparentDetail />
    </View>
  );
}