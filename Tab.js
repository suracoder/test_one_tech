import * as React from 'react';
import { View, useWindowDimensions,Button,Text,Image } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import SignIn from './SignIn';
import OptUi from "./OptUi"

import { color } from './app/styles/color';
const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'white' ,height:400}} >


      <OptUi/>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: color.primary }} />
);

const renderScene = SceneMap({
  first: OptUi,
  second: SecondRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Sign In' ,color:"red"},
    { key: 'second', title: 'Sign Out' },
  ]);

  return (


  <View style={{flex:1}}>
<View style={{marginTop:10,
alignContent:"center",alignItems:"center",alignSelf:"center",
// borderRadius:60,
// borderColor:"#ffff",
// borderColor:"#c8d1db" ,
// shadow:10 , rounded:100,
// borderRadius:60,

// borderWidth:2,borderStyle:"solid",

// shadowColor:"red",
// shadowRadius:60,
// shadowOffset:2
}}>
  
  {/* <Text   style={{fontSize:50,padding:10}}>Co</Text> */}
  <Image source={require("./assets/Copartenr.jpg")}/>
  
  </View>

<View style={{flexBasis:400,marginTop:10}}>
    <TabView
style={{shadowRadius:0,shadowColor:"#ffff",marginLeft:20,marginRight:20}}
// sceneContainerStyle={{backgroundColor:"red"}}
    // style={{width:900}}
    tabBarPosition='top'
    renderTabBar={props =>
       <TabBar     

       inactiveColor={color.primary }
       
      //  indicatorStyle={{borderColor:color.primary ,
      //  borderRadius:4,borderStyle:"solid"}}
      indicatorStyle={{
        backgroundColor: color.primary,
        height: 3,
        // left: TAB_MARGIN / 2,
   }}
      contentContainerStyle={{shadowRadius:0,shadowColor:"#ffff",backfaceVisibility:false,}}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color, margin: 8 ,}}>
          {route.title}
        </Text>
      )}
        tabStyle={{color:color.primary,borderRadius:0,shadowOffset:0}}
        labelStyle={{color:color.primary,borderBottomColor:"red"}}
activeColor={color.primary} 

     style={{width:200,backgroundColor:"white",shadowColor:color.primary }} {...props} />}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      // initialLayout={{ width: 90 }}
    />

 </View></View>
  );
}



// import * as React from 'react';
// import { View, TouchableOpacity, StyleSheet ,Text} from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';
// // import Animated from 'react-native-reanimated';
// // import { Constants } from 'expo';

// const FirstRoute = () => (
//   <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
// );
// const SecondRoute = () => (
//   <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
// );

// export default class TabViewExample extends React.Component {
//   state = {
//     index: 0,
//     routes: [
//       { key: 'first', title: 'First' },
//       { key: 'second', title: 'Second' },
//     ],
//   };

//   _handleIndexChange = index => this.setState({ index });

//   _renderTabBar = props => {
//     const inputRange = props.navigationState.routes.map((x, i) => i);

//     return (
//       <View style={styles.tabBar}>
//         {props.navigationState.routes.map((route, i) => {
//           const color = "rgb(255,0,0)"

//           return (
//             <TouchableOpacity
//               style={styles.tabItem}
//               onPress={() => this.setState({ index: i })}>
//            <Text> {route.title}</Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     );
//   };

//   _renderScene = SceneMap({
//     first: FirstRoute,
//     second: SecondRoute,
//   });

//   render() {
//     return (
//       <TabView
//       activeColor='bule'
//       sceneContainerStyle={{backgroundColor:"red"}}
//       // tabBarPosition='bottom'
//         navigationState={this.state}
//         renderScene={this._renderScene}

//         style={{backgroundColor:"red"}}
//         renderTabBar={this._renderTabBar}
//         onIndexChange={this._handleIndexChange}
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   tabBar: {
//     flexDirection: 'row',
//     paddingTop: 50,
//     marginRight:250,
//     // width:50,
//     // activeColor:'bule'

  

//   },
//   tabItem: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 16,
//     width:30
//   },
// });
