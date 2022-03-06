// import React from "react";
// import { VStack, Center, NativeBaseProvider } from "native-base";
// import {Text} from "react-native"
// function Example() {
//   return <VStack  >
//       <Center w="80" h="10" bg="indigo.300" rounded="md" shadow={3} >   <Text style={{marginBottom:10}}>this is you</Text></Center>
    
//     </VStack>;
// }

//     export default () => {
//         return (
//           <NativeBaseProvider >
//             <Center  px="1">
//                 <Example />
//             </Center>
//           </NativeBaseProvider>
//         );
//     };
    


import React from "react";
import {View,Text} from "react-native"
// import { Pressable, Text, Box, HStack, Spacer, Flex, Badge, Center, NativeBaseProvider } from "native-base";

 
    export default () => {
        return (
          <View style={{justifyContent:"space-between",backgroundColor:"#ecf1f4",
          borderRadius:5,
           height:60,flexDirection:"row",marginTop:20,marginLeft:30,marginRight:30, }}>
              <View style={{  alignItems:"flex-start" ,padding:20}}><Text>Your Id Code</Text></View>
              <View  style={{alignItems:"flex-end",padding:20}}><Text>3621</Text></View>

          </View>
        );
    };
    