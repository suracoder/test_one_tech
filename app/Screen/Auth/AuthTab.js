import * as React from 'react';
import { View, useWindowDimensions, Button, Text, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import SignUp from './SignUpForm';
import SignIn from './SignInForm';
import { color } from '../../styles/color';

const renderScene = SceneMap({
    first: SignUp,
    second: SignIn,
});

export default function TabViewExample() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Sign Up', color: "red" },
        { key: 'second', title: 'Sign In' },
    ]);

    return (


        <View style={{ flex: 1 ,backgroundColor:"#ffff"}}>
            <View style={{
                marginTop: 10,
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
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
                <Image source={require("../../../assets/Copartenr.jpg")} />

            </View>

            <View style={{ flexBasis: 500, marginTop: 0 }}>
                <TabView
                    style={{ shadowRadius: 0, 
                        shadowColor: "#ffff",
                         marginLeft: 20, 
                         marginRight: 20 }}
                    // sceneContainerStyle={{backgroundColor:"red"}}
                    // style={{width:900}}
                    tabBarPosition='top'
                    renderTabBar={props =>
                        <TabBar

                            inactiveColor={color.primary}

                            //  indicatorStyle={{borderColor:color.primary ,
                            //  borderRadius:4,borderStyle:"solid"}}
                            indicatorStyle={{
                                backgroundColor: color.primary,
                                height: 3,
                                // left: TAB_MARGIN / 2,
                            }}
                            contentContainerStyle={{ shadowRadius: 0, shadowColor: "#ffff", backfaceVisibility: false, }}
                            renderLabel={({ route, focused, color }) => (
                                <Text style={{ color, margin: 8, }}>
                                    {route.title}
                                </Text>
                            )}
                            tabStyle={{ color: color.primary, borderRadius: 0, shadowOffset: 0 }}
                            labelStyle={{ color: color.primary, borderBottomColor: "red" }}
                            activeColor={color.primary}

                            style={{ width: 200, backgroundColor: "white", shadowColor: color.primary }} {...props} />}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                // initialLayout={{ width: 90 }}
                />

            </View></View>
    );
}

