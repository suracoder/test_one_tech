import React from "react";
import { Button, Stack, Icon, Center, NativeBaseProvider } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const Example = () => {
    return <Stack direction={{
        base: "row",
         
    }} space={4}>
        <Button leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />}>
            Upload
        </Button>
        <Button leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />}>
            Upload
        </Button>
        <Button leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />}>
            Upload
        </Button>
    </Stack>;
};

export default () => {
    return (
        <NativeBaseProvider>
            <Center   px="3" style={{ flexDirection: 'column', backgroundColor: "white", height: 110, borderRadius: 10, marginTop:100, alignItems: "center" }}>

                <Example />
            </Center>
        </NativeBaseProvider>
    );
};
