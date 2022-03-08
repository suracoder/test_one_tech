import React from "react";
import { FormControl, Icon,Input, Stack, Text, Divider, Box, WarningOutlineIcon, Center, NativeBaseProvider } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const Example = () => {
  return (// eslint-disable-next-line react-native/no-inline-styles
    // <KeyboardAwareScrollView style={{
    //   width: "100%"
    // }}>
      <Stack space={2.5} alignSelf="center" px="4" safeArea mt="4" w={{
        base: "100%",
        md: "25%"
      }}>
        
   
        <Box>
        <FormControl   mb="5">
            {/* <FormControl.Label>Project Title</FormControl.Label> */}
            <Input    borderWidth="1" borderColor="#4b778d" placeholder="Title"    InputRightElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />}/>
        
          </FormControl>
          <FormControl isInvalid mb="5">
            {/* <FormControl.Label>Project Title</FormControl.Label> */}
            <Input  placeholder="Title"   InputRightElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="muted.400" />}/>
        
          </FormControl>
          <FormControl mb="5">
            {/* <FormControl.Label>Project Title</FormControl.Label> */}
            <Input  placeholder="Title"    borderWidth="1" borderColor="#4b778d"  InputRightElement={<Icon as={<MaterialIcons name="phone" />} size={5} ml="2" color="muted.400" />}/>
        
          </FormControl>
        
         
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
    