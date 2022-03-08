import * as React from 'react';
import { View, Text } from 'react-native';
 import Hoome1  from "../Screen/Home/Hoome/Hoome1"
 import Hoome2 from '../Screen/Home/Hoome/Hoome2';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 

const Stack = createNativeStackNavigator();

function App() {
  return (
 
      <Stack.Navigator initialRouteName="Hoome1" screenOptions={{ presentation: 'modal' }} screenOptions={{headerShown:false}}>
        <Stack.Screen name="Hoome1" component={Hoome1} />
        <Stack.Screen name="Hoome2" component={Hoome2} />
      </Stack.Navigator>
   
  );
}

export default App;


// const StackScreen = ({ navigation }) => (
//     <Stack.Navigator screenOptions={{
//       headerStyle: {
//         backgroundColor: '#01579b',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold'
//       }
//     }}>
//       <Stack.Screen name="Fund" component={Hoome1}   />
//       <Stack.Screen name="FundTransfer" component={Hoome2}   />
   
   
  
//     </Stack.Navigator>
//   )