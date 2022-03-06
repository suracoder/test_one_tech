// // import React from "react";
// // import { NativeBaseProvider,
// //      Box, Text,    HStack, Center, 

// //     Pressable } from "native-base";

// // function Example() {
// //   const [selected, setSelected] = React.useState(1);
// //   return <NativeBaseProvider>
// //       <Box flex={1} bg="white" safeAreaTop width="100%" maxW="300px" alignSelf="center">
// //         <Center flex={1}></Center>
// //         <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
// //           {/* <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}> */}
// //             <Center>

// //               <Text color="white" fontSize="12">
// //                 Home
// //               </Text>
// //             </Center>
// //           {/* </Pressable> */}
// //           {/* <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}> */}
// //             <Center>

// //               <Text color="white" fontSize="12">
// //                 Search
// //               </Text>
// //             </Center>
// //           {/* </Pressable> */}
// //           {/* <Pressable cursor="pointer"   py="2" flex={1} onPress={() => setSelected(2)}> */}
// //             <Center>

// //               <Text color="white" fontSize="12">
// //                 Cart
// //               </Text>
// //             </Center>
// //           {/* </Pressable> */}
// //           {/* <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}> */}
// //             <Center>

// //               <Text color="white" fontSize="12">
// //                 Account
// //               </Text>
// //             </Center>
// //           {/* </Pressable> */}
// //         </HStack>
// //       </Box>
// //     </NativeBaseProvider>;
// // }

// //     export default () => {
// //         return (
// //           <NativeBaseProvider>
// //             <Center flex={1} px="3">
// //                 <Example />
// //             </Center>
// //           </NativeBaseProvider>
// //         );
// //     };



// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Button, Stack, Icon } from "native-base";
// import MenuBtn from './MenuBtn';
// function HomeScreen() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Home!</Text>
//         </View>
//     );
// }
// const Example = () => {
//     return(<Button variant="subtle" endIcon={<Icon as={Ionicons} name="cloud-download-outline" size="sm" />}>
//         Download
//     </Button>
//     )

// };
// function SettingsScreen() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Settings!</Text>
//         </View>
//     );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator
//                 // tabBarOptions={

//                 //     {


//                 //         style: { backgroundColor: 'yellow' }
//                 //     }}
//                 //   barStyle={{ marginLeft:10, marginRight:10 }}
//                 // tabBar={props => <MenuBtn {...props} />}
//                 screenOptions={({ route }) => ({
//                      tabBarBackground,
//                                         tabBarButton:({focused, color, size })=>{
//                         return (
                            // <Ionicons
                            //  style={{borderColor:"red",borderStyle:"solid",borderWidth:1,borderRadius:10 ,width:100}}
                            //   name={
                            //     focused
                                 
                            //   }

                              
                            //   textBreakStrategy='simple'
                            //   size={size}

                            //   color={color}
                            // /> 
//                             // <MenuBtn />
//                         );
//                     },
//                     // tabBarIcon: ({ focused, color, size }) => {
//                     //     if (route.name === 'Home') {
//                     //         return (
//                     //             <Ionicons
//                     //              style={{borderColor:"red",borderStyle:"solid",borderWidth:1,borderRadius:10 ,width:100}}
//                     //               name={
//                     //                 focused
                                     
//                     //               }
//                     //               textBreakStrategy='simple'
//                     //               size={size}

//                     //               color={color}
//                     //             /> 
//                     //             // <MenuBtn />
//                     //         );
//                     //     } else if (route.name === 'Settings') {
//                     //         return (
//                     //             <Ionicons
//                     //                 name={focused ? 'ios-list-box' : 'ios-list'}
//                     //                 size={size}
//                     //                 color={color}
//                     //             />
//                     //         );
//                     //     }
//                     // },
//                     tabBarInactiveTintColor: 'gray',
//                     tabBarActiveTintColor: 'tomato',
//                 })}
//             >
//                 <Tab.Screen

//                     name="Home"
//                     component={HomeScreen}

//                     // options={{   tabBarLabelStyle: 'marginBottom:10' }}
//                 />
//                 <Tab.Screen name="Settings" component={SettingsScreen} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }


// // import * as React from 'react';
// // import { Text, View, Button } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// // function TestScreen() {
// // 	return (
// // 		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// // 			<Text>Test!</Text>
// // 		</View>
// // 	);
// // }

// // function HomeScreen(props) {
// // 	const gotoTestStackScreen = () => {
// // 		props.navigation.navigate('Test');
// // 	};
// // 	return (
// // 		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// // 			<Text>Home!</Text>
// // 			<Button title="Go to test stack screen" onPress={gotoTestStackScreen} />
// // 		</View>
// // 	);
// // }

// // function SettingsScreen() {
// // 	return (
// // 		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// // 			<Text>Settings!</Text>
// // 		</View>
// // 	);
// // }

// // function MyTabBar({ state, descriptors, navigation }) {
// //   return (
// //     <View style={{ flexDirection: 'row',backgroundColor:"#F4AF5F",height:50,borderRadius:50,justifyContent:"center",alignItems:"center" }}>
// //       {state.routes.map((route, index) => {
// //         const { options } = descriptors[route.key];
// //         const label =
// //           options.tabBarLabel !== undefined
// //             ? options.tabBarLabel
// //             : options.title !== undefined
// //             ? options.title
// //             : route.name;

// //         const isFocused = state.index === index;

// //         const onPress = () => {
// //           const event = navigation.emit({
// //             type: 'tabPress',
// //             target: route.key,
// //           });

// //           if (!isFocused && !event.defaultPrevented) {
// //             navigation.navigate(route.name);
// //           }
// //         };

// //         const onLongPress = () => {
// //           navigation.emit({
// //             type: 'tabLongPress',
// //             target: route.key,
// //           });
// //         };

// //         return (
// //           <View
// //             accessibilityRole="button"
// //             accessibilityStates={isFocused ? ['selected'] : []}
// //             accessibilityLabel={options.tabBarAccessibilityLabel}
// //             testID={options.tabBarTestID}
// //             // onPress={onPress}
// //             // onLongPress={onLongPress}
// //             style={{ flex: 1, alignItems:"center" }}
// //           >
// //             <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
// //               {label}
// //             </Text>
// //           </View>
// //         );
// //       })}
// //     </View>
// //   );
// // }

// // const Tab = createBottomTabNavigator();

// // function MyTabs() {
// // 	return (
// // 		<Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
// // 			<Tab.Screen name="Home" component={HomeScreen} />
// // 			<Tab.Screen name="Settings" component={SettingsScreen} />
// // 		</Tab.Navigator>
// // 	);
// // }

// // const Stack = createStackNavigator();

// // export default function App() {
// // 	return (
// // 		<NavigationContainer>
// // 			<Stack.Navigator initialRouteName="Tabs">
// // 				<Stack.Screen name="Test" component={TestScreen} />
// // 				<Stack.Screen name="Tabs" component={MyTabs} />
// // 			</Stack.Navigator>
// // 		</NavigationContainer>
// // 	);
// // }





import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Avater from './Avater';
import FirstColument from './FirstColument';
import SecondCoument from './SecondCoument';
import Thiredcolumen from './Thiredcolumen';
import TherdView from './TherdView';
import Header from './Header';
function HomeScreen() {
  return (
    <View style={{ flex: 1,  backgroundColor:"white" }}>
      <Header/>
    <FirstColument  />
    <SecondCoument/>
    <TherdView/>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"white" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function MyTabBar({ state, descriptors, navigation }) {
    console.log(state)
  return (
    <View style={{ flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
console.log(isFocused)
console.log("route  ",route)
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
        
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 0 , 
width:100,
            // shadowColor:"#747171",
            
            // shadowOffset:19,
// elevation:2,
// opacity:2,
                // borderColor:"white",
                borderRadius:3,
                // borderStyle:"solid",
                // borderWidth:1,
                margin:30
            }}
          >
          {isFocused? <View style={{
            // justifyContent:"space-between",

            backgroundColor:"#ffff", height:30,flexDirection:"row",
            width:100,
            borderStyle:"solid",
            borderLeftWidth:2,
            borderRightWidth:1,
            borderStartWidth:0.5,
            borderBottomWidth:3 ,borderColor:"#c8d1db" ,shadow:1 , rounded:100,borderRadius:9,
            borderBottomEndRadius:40,
            borderTopEndRadius:40,
            borderTopStartRadius:40,
            borderBottomStartRadius:40
//             flexDirection:"row",width:100,
//           borderRadius:10,
//           height:40,
//           // elevation:4,
//           // shadowRadius:10,
//           // // borderBottomEndRadius:3,
//           // shadowColor:"red",
//           // shadowOffset:{height:4,width:0},
//           // shadowOpacity:0.6,
//           // opacity:4,
//           // rounded:4


// borderBottomColor:"red",

//           shadowColor: '#30C1DD',
//           shadowRadius: 5,
//           shadowOpacity: 0.6,
//           elevation: 3,
//           rounded:4,
//           shadowOffset: {
//             width: 0,
//             height: 4
//           }
        }}><Ionicons name={route.name} size={20} 
          color="#4b778d" style={{marginRight:10,marginLeft:6}}/><Text style={{ color: "#4b778d"}}> Family</Text></View>
:<Ionicons name={route.name} size={24} color="#4b778d" />}  
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator   tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen name="home-sharp" component={HomeScreen}   
              
        options={({ navigation, route }) => ({
          headerShown: false,

headerTitle: (props) => <Text  style={{ color: "#4d798e"}}>Hello robert grant</Text>,
            headerRight: (props) => <Avater {...props} />,
          })}
          
          
          />
        <Tab.Screen name="calendar" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
