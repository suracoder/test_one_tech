

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons ,MaterialCommunityIcons} from '@expo/vector-icons';
import TestTab from "../Screen/Home/BottomTab"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hoome1 from "../Screen/Home/Hoome/Hoome1"



const Stack = createNativeStackNavigator();


const StackScreen = ({ navigation }) => (
  <Stack.Navigator screenOptions={{
    headerStyle: {
      // backgroundColor: '#01579b',
    },
    headerShown: false,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <Stack.Screen name="Fund" component={Hoome1} />




  </Stack.Navigator>
)


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "white" }}>
      <Text>Settings!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (

    <Tab.Navigator tabBar={(props) => <TestTab {...props} />}>
      <Tab.Screen name="home-sharp" initialParams={{ tabName: "Family" }} rname="home" component={StackScreen}

        options={({ navigation, route }) => ({
          headerShown: false,

         })}


      />
      <Tab.Screen name="calendar" initialParams={{ tabName: "Schedule" }} rname="calander" component={SettingsScreen} />

      <Tab.Screen name="wallet" initialParams={{ tabName: "Wallet" }} rname="calander" component={SettingsScreen} />

      <Tab.Screen name="chatbox" initialParams={{ tabName: "Message" }} rname="calander" component={SettingsScreen} />

    </Tab.Navigator>
  );
}
