import * as React from 'react';
import { View, Text } from 'react-native';
import AuthTab from "../Screen/Auth/AuthTab"
import OTP from '../Screen/Auth/OTPUi';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 

const Stack = createNativeStackNavigator();

function App() {
  return (
 
      <Stack.Navigator  
      screenOptions={{ presentation: 'modal' }} screenOptions={{headerShown:false}}>
        <Stack.Screen name="AuthTab" component={AuthTab} />
        <Stack.Screen name="OTP" component={OTP} />
      </Stack.Navigator>
   
  );
}

export default App;