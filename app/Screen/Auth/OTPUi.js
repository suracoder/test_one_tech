import React, { Component } from "react"
import { TextInput, View,Text } from "react-native"
import Button from "../../components/Button/Button"
import { Ionicons } from '@expo/vector-icons';




export default class OTP extends Component {


    constructor(props) {

        super(props)
        this.state = {
            pin1: "",
            pin2: "",
            pin3: "",
            pin4: ""
        }

    }

    componentDidMount = () => {
        this.refs.pin1ref.focus()
    }



    render() {


        const { pin1, pin2, pin3, pin4 } = this.state
        return (

<View    style={{ flex:1}}>   
     <View style={{ flex:0, marginTop:120,marginLeft:40,flexDirection: "row" }}>
         {/* <Button  text={"cancel"} size="3"  backgroundColor="green">cancle</Button> */}
         <Ionicons 
         onPress={()=>{
            this.props.navigation.navigate('AuthTab');
         }}
         
         name="ios-arrow-back" size={24} color="#4b778d" />
                  <Text style={{marginLeft:10,paddingTop:5 ,fontWeight:"bold"}}>Verify Phone number</Text></View>
         <View style={{ flex:0, marginTop:50,marginLeft:40 }}>
        <Text style={{fontWeight:"bold"   ,fontSize:20}}>Hellow surafel worku</Text>
        <Text>Please the otp number that we send to</Text>
        <Text  style={{color:"#4d798e"}}>095388929939</Text>
        
     
        </View>
            <View style={{ flex: 0 ,flexDirection: "row" ,marginTop:30,marginLeft:40,marginRight:40 }}>

                <View style={{ flex: 0.6, justifyContent: "space-evenly" }}  >



                    <TextInput
                        ref={"pin1ref"}


                        onChangeText={(pin1) => {


                            this.setState({ pin1: pin1 })

                            if (pin1 != "") {
                                this.refs.pin2ref.focus()
                            }


                        }}

                        value={pin1}
                        style={{



                            backgroundColor: "#f54f2",

                            fontWeight: "600",
                            alignSelf: "center",
                            padding: 10,
                            fontSize: 20,
                            height: 60,
                            width: 60,
                            borderRadius: 10,
                            borderWidth: 0.5,
                            borderColor: "grey"
                        }} />
                </View>

                <View style={{ flex: 0.6, justifyContent: "space-evenly" }}  >



                    <TextInput
                        ref={"pin2ref"}


                        onChangeText={(pin2) => {


                            this.setState({ pin2: pin2 })


                            if (pin2 != "") {
                                this.refs.pin3ref.focus()
                            }
                        }}

                        value={pin2}

                        style={{



                            backgroundColor: "#f54f2",

                            fontWeight: "600",
                            alignSelf: "center",
                            padding: 10,
                            fontSize: 20,
                            height: 60,
                            width: 60,
                            borderRadius: 10,
                            borderWidth: 0.5,
                            borderColor: "grey"
                        }} />
                </View>

                <View style={{ flex: 0.6, justifyContent: "space-evenly" }}  >



                    <TextInput

                        ref={"pin3ref"}


                        onChangeText={(pin3) => {


                            this.setState({ pin3: pin3 })


                            if (pin3 != "") {
                                this.refs.pin4ref.focus()
                            }
                        }}

                        value={pin3}
                        style={{



                            backgroundColor: "#f54f2",

                            fontWeight: "600",
                            alignSelf: "center",
                            padding: 10,
                            fontSize: 20,
                            height: 60,
                            width: 60,
                            borderRadius: 10,
                            borderWidth: 0.5,
                            borderColor: "grey"
                        }} />
                </View>

                <View style={{ flex: 0.6, justifyContent: "space-evenly" }}  >



                    <TextInput


                        ref={"pin4ref"}


                        onChangeText={(pin4) => {


                            this.setState({ pin4: pin4 })
                        }}

                        value={pin4}
                        maxLength={1}
                        style={{



                            backgroundColor: "#f54f2",

                            fontWeight: "600",
                            alignSelf: "center",
                            padding: 10,
                            fontSize: 20,
                            height: 60,
                            width: 60,
                            borderRadius: 10,
                            borderWidth: 0.5,
                            borderColor: "grey",
                            alignItems: "center",
                            alignContent: "center"
                        }} />
                </View>

            </View>

            <View style={{ flex:0, marginTop:20,marginLeft:40 ,flexDirection:"row"}}>
        {/* <Text style={{fontWeight:"bold"   ,fontSize:20}}>Hellow surafel worku</Text> */}
        {/* <Text>Please the otp number that we send to</Text> */}
        <Text  style={{color:"black"}}> Dont get otp 095388929939?</Text>
         <Text  style={{color:"#4d798e",marginLeft:5}}>Resend Otp code</Text>

        
     
        </View>



        <View style={{ flex:1, marginTop:100,marginLeft:40 ,marginRight:40}}>
       
        <Button text="Next" backgroundColor="#ced6df"   onPress={()=>{
            this.props.navigation.navigate('Home');
        }}></Button>
     
        </View>
            </View>
        )

    }


}