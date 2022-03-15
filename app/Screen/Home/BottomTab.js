import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
export default function MyTabBar({ state, descriptors, navigation }) {
    console.log(state)
  return (
    <View style={{ flexDirection: 'row',backgroundColor:"#ffff"}}>
      {state.routes.map((route, index,rname) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
console.log("rname ",rname)
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
// width:15,
            // shadowColor:"#747171",
            
            // shadowOffset:19,
// elevation:2,
// opacity:2,
                // borderColor:"white",
                borderRadius:3,
                // borderStyle:"solid",
                // borderWidth:1,
                // margin:30
                marginLeft:30,
                marginRight:30,
                marginBottom:30
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
            borderBottomWidth:3 ,borderColor:"#c8d1db" ,
            shadow:1 ,
             rounded:100,borderRadius:9,
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
        }}>
          <Ionicons name={route.name} size={18} 
          color="#4b778d" style={{marginRight:0,marginLeft:6}}/>
          <Text style={{ color: "#4b778d",fontSize:12}}> {route.params.tabName}</Text></View>
:

<Ionicons style={{margin:1}} name={route.name} size={15} color="#4b778d"  />}  
          </TouchableOpacity>
        );
      })}
    </View>
  );
}