import * as React from 'react';
import { View, Text } from 'react-native';
 import Hoome1  from "../Screen/Home/Hoome/Hoome1"
 import Hoome2 from '../Screen/Home/Hoome/Hoome2';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createStackNavigator } from '@react-navigation/stack';


// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();
function App() {
  return (
 
      <Stack.Group  screenOptions={{headerShown:true}}>
        {/* <Stack.Screen name="Hoome1" component={Hoome1} /> */}
        <Stack.Screen name="Hoome2" component={Hoome2} />
      </Stack.Group>
   
  );
}

export default App;