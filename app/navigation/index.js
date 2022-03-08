

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNav from "./HomeTab"
import Hoome2 from '../Screen/Home/Hoome/Hoome2';
import OnBoarding from '../Screen/Onboading/OnBoarding';
import Authentication from "../Screen/Auth/AuthTab"
import AuthStack from "./AuthenticationStack"
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            {/* <Tab.Navigator tabBar={(props) => <BottomTab {...props} />}>
                <Tab.Screen name="home-sharp" component={HomeScreen}

                    options={({ navigation, route }) => ({
                        headerShown: false,

                        headerTitle: (props) => <Text style={{ color: "#4d798e" }}>Hello robert grant</Text>,
                        headerRight: (props) => <Avater {...props} />,
                    })}


                />
                <Tab.Screen name="calendar" component={SettingsScreen} />
            </Tab.Navigator> */}


            {/* <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator> */}
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
