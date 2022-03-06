import React from "react";
import { FormControl, Input, Stack, Text, Divider, Box, WarningOutlineIcon, Center, NativeBaseProvider } from "native-base";
 
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
        <FormControl mb="5">
            {/* <FormControl.Label>Project Title</FormControl.Label> */}
            <Input  placeholder="Title"/>
        
          </FormControl>
          <FormControl mb="5">
            {/* <FormControl.Label>Project Title</FormControl.Label> */}
            <Input  placeholder="Title"/>
        
          </FormControl>
          <FormControl mb="5">
            {/* <FormControl.Label>Project Title</FormControl.Label> */}
            <Input  placeholder="Title"/>
        
          </FormControl>
          <FormControl mb="5">
            {/* <FormControl.Label>Project Title</FormControl.Label> */}
            <Input  placeholder="Title"/>
        
          </FormControl>
          <FormControl isInvalid>
            {/* <FormControl.Label>Project Title</FormControl.Label> */}
            <Input placeholder="Title" />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              Something is wrong.
            </FormControl.ErrorMessage>
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
    