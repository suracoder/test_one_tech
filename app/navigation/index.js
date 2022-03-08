

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNav from "./HomeTab"
import Hoome2 from '../Screen/Home/Hoome/Hoome2';
import OnBoarding from '../Screen/Onboading/OnBoarding';
 import AuthStack from "./AuthenticationStack"
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
           
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>

                <Stack.Screen name="OnBoarding" component={OnBoarding} />
                <Stack.Screen name="Home" component={HomeNav} />
                <Stack.Screen name="Authentication" component={AuthStack} />

                <Stack.Screen name="Hoome2" component={Hoome2} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
