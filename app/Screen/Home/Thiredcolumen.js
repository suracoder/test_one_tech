import React from "react";
import { Pressable, Text, Box, HStack, Spacer, Flex, Badge, Center, NativeBaseProvider } from "native-base";
import {Button} from "react-native"
function Example() {
  return <Box >
      <Pressable onPress={() => console.log("I'm Pressed")}>
        <Box  width={"300"} maxW="500" TherdView>
          <HStack alignItems="center">
          <Text color="coolGray.800" mt="1"   fontSize="sm">
           Robert  grant
          </Text>
            <Spacer />
           <Button title="Edit"/>
          </HStack>
          <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
            Marketing License
          </Text>
          <Text mt="2" fontSize="sm" color="coolGray.700">
            {/* Unlock powerfull time-saving tools for creating email delivery and
            collecting marketing data */}
          </Text>
          <Flex>
            <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
              Read More
            </Text>
          </Flex>
          <Button title="Edit"/>
        </Box>
      </Pressable>
    </Box>;
}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    