import * as React from 'react';
import { View, useWindowDimensions,Button } from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import SignIn from './SignIn';
import OptUi from "./OptUi"
const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'white' ,height:400}} >


      <OptUi/>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
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
    <TabView
    // style={{width:900}}
    tabBarPosition='top'
    renderTabBar={props => <TabBar     

        tabStyle={{color:"red"}}
        labelStyle={{color:"red"}}
activeColor='bule'

     style={{width:200,backgroundColor:"white"}} {...props} />}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: 900 }}
    />
  );
}