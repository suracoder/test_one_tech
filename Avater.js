// import React from "react";
// import { Avatar, HStack, Center, NativeBaseProvider } from "native-base";
// import { Ionicons } from '@expo/vector-icons';

// const Example = () => {
//   return <HStack justifyContent="center" space={2}   >
//       <Ionicons name="calendar" size={30} color="black"  />
//       <Avatar bg="green.500" source={{
//       uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
//     }}> 
//       </Avatar>
   
     
     
//     </HStack>;
// };

//     export default () => {
//         return (
//           <NativeBaseProvider>
//             {/* <Center flex={1} px="3"> */}
//                 <Example />
//             {/* </Center> */}
//           </NativeBaseProvider>
//         );
//     };
import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Badge, Icon, withBadge ,BadgeProps} from 'react-native-elements';
import { Ionicons,Octicons } from '@expo/vector-icons';

const BadgedIcon = withBadge(2)(Icon);

const BadgeComponent = () => {
  return (
    <>
      <ScrollView>
 
 
        
   
     

 
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
         
          }}
        >
 <View  style={{marginRight:10,marginLeft:10}}>
            {/* <Avatar
              rounded
              source={{
                uri: 'https://randomuser.me/api/portraits/women/40.jpg',
              }}
              size="small"
            /> */}


<Octicons name="bell" size={26} color="black" />
            <Badge
              status="primary"
              value={2}
              containerStyle={{ position: 'absolute', top: 5, left: -6 }}
            />
          </View>
          
          {/* <View style={{marginRight:30}}><BadgedIcon   type="ionicon" name="ios-chatbubbles"/></View> */}
        
          <View>
          {/* <BadgedIcon type="ionicon" name="ios-chatbubbles" /> */}

            <Avatar
              rounded
              source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
              size="small"
            />
             
          </View>
      
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    backgroundColor : "#2089dc",
    color : "white",
    textAlign : "center",
    // paddingVertical : 5,
    // marginBottom : 10
  }
})

export default BadgeComponent;