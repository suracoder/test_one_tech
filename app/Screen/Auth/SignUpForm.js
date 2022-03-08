import React from "react";
import { FormControl, Icon,Input, Stack, Text, Divider, Box, WarningOutlineIcon, Center, NativeBaseProvider } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../../components/Button/Button";
import { color } from "../../styles/color";
import { NavigationContext } from '@react-navigation/native';
import {View} from "react-native"
const Example = (props) => {
    const navigation = React.useContext(NavigationContext);

    console.log("ON otp Ui ",props)
  return ( 
      <Stack space={2.5} alignSelf="center" px="4" safeArea mt="4" w={{
        base: "100%",
        md: "25%"
      }}>
        
   
        <Box>
        <FormControl   mb="5">
            {/* <FormControl.Label>Project Title</FormControl.Label> */}
            <Input    value="Robert " borderWidth="1" borderColor="#4b778d" placeholder="Title"    InputRightElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />}/>
        
          </FormControl>
          <FormControl isInvalid mb="5">
         
            {/* <FormControl.Label>Projaect Title</FormControl.Label> */}
            <Input  placeholder="Email Address "   InputRightElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="muted.400" />}/>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Invalid Email Address
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl mb="5">
            {/* <FormControl.Label>Project Title</FormControl.Label> */}
            <Input  placeholder="email"   value="0954606595" borderWidth="1" borderColor="#4b778d"  InputRightElement={<Icon as={<MaterialIcons name="phone" />} size={5} ml="2" color="muted.400" />}/>
           
          </FormControl>
          <FormControl isInvalid  mb="5">
            {/* <FormControl.Label>Project Title</FormControl.Label> */}
            <Input  placeholder="Type A 8 Character password" InputRightElement={<Icon as={<MaterialIcons name="password" />} size={5} ml="2" color="muted.400" />}/>
        
          </FormControl>
          <FormControl isInvalid>
       
          
            <Input placeholder="Confirm Password"  InputRightElement={<Icon as={<MaterialIcons name="password" />} size={5} ml="2" color="muted.400" />} />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Password Doesn't match
            </FormControl.ErrorMessage>
          </FormControl>

<View style={{marginTop:10}}>
<Button   onPress={()=>{
              navigation.navigate('OTP')
          }}   
           backgroundColor={color.primary} text="Next"></Button>
</View>

       
        </Box>
      </Stack>
    // </KeyboardAwareScrollView>
  );
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    