
// import React from 'react';
// import { Image } from 'react-native';
// import Onboarding from 'react-native-onboarding-swiper';

// // be carefully images correctly imported from right path
// // const img1 = require('../assets/img/image1.png');
// // const img2 = require('../assets/img/image2.png');
// // const img3 = require('../assets/img/image3.png');
// // const img4 = require('../assets/img/image4.png');

// const OnBoarding = (props) => {
//     return (
//         <>
//             <Onboarding
//                 onSkip={props.onLoadFunc}
//                 onDone={props.onLoadFunc}
//                 pages={[
//                     {
//                         backgroundColor: '#cbf2f5',
//                         // image: <Image source={img1} resizeMode="contain" style={{ width: 200, height: 200 }} />,
//                         title: 'Management',
//                         subtitle: 'Approach to manage a company\'s interaction with current and potential customers',
//                     },
//                     {
//                         backgroundColor: '#fcc5b6',
//                         // image: <Image source={img2} resizeMode="contain" style={{ width: 200, height: 200 }} />,
//                         title: 'Data analysis',
//                         subtitle: 'It uses data analysis about customers\' history with a company to improve business relationships with customers',
//                     },
//                     {
//                         backgroundColor: '#fff',
//                         // image: <Image source={img3} resizeMode="contain" style={{ width: 200, height: 200 }} />,
//                         title: 'Strategic',
//                         subtitle: 'Strategic CRM is concentrated upon the development of a customer-centric business culture',
//                     },
//                     {
//                         backgroundColor: '#E6E7E8',
//                         // image: <Image source={img4} resizeMode="contain" style={{ width: 200, height: 200 }} />,
//                         title: 'Get started',
//                         subtitle: "Beautiful, isn't it?",
//                     },
//                 ]}
//             />
//         </>
//     );
// };

// export default OnBoarding;




// import React from 'react';
// import { StyleSheet } from 'react-native';
// import AppIntroSlider from 'react-native-app-intro-slider';

// const slides = [
//   {
//     key: 'one',
//     title: 'Title 1',
//     text: 'Description.\nSay something cool',
//     image: require('./assets/1.jpg'),
//     backgroundColor: '#59b2ab',
//   },
//   {
//     key: 'two',
//     title: 'Title 2',
//     text: 'Other cool stuff',
//     image: require('./assets/2.jpg'),
//     backgroundColor: '#febe29',
//   },
//   {
//     key: 'three',
//     title: 'Rocket guy',
//     text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
//     image: require('./assets/3.jpg'),
//     backgroundColor: '#22bcb5',
//   }
// ];

// export default class App extends React.Component {
//   this.state = {
//     showRealApp: false
//   }
//   _renderItem = ({ item }) => {
//     return (
//       <View style={styles.slide}>
//         <Text style={styles.title}>{item.title}</Text>
//         <Image source={item.image} />
//         <Text style={styles.text}>{item.text}</Text>
//       </View>
//     );
//   }
//   _onDone = () => {
//     // User finished the introduction. Show real app through
//     // navigation or simply by controlling state
//     this.setState({ showRealApp: true });
//   }
//   render() {
//     if (this.state.showRealApp) {
//       return <App />;
//     } else {
//       return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
//     }
//   }
// }


import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import Button from './app/components/Button/Button'
const { width } = Dimensions.get('window')

const styles = {
  container: {
    flex: 1
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff'
  },

  text: {
    // color: '#e4df',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
}

export default class extends Component {
  constructor(props) {
    super(props);
    this.onPressNext = this.onPressNext.bind(this);
    this.onPressPrev = this.onPressPrev.bind(this);
    this.state = {
      idxActive: 0,
      activeList:0
    }
  }

  onPressPrev = () => {
    const { idxActive } = this.state;
    console.log("idxActive", idxActive)
    if (idxActive > 0) {
      this.refs.swiper.scrollBy(-1)
    }
  }

  onPressNext = () => {
    const { idxActive } = this.state;
    console.log("idxActive", this.refs.swipe)
    // Probably best set as a constant somewhere vs a hardcoded 5
    if (idxActive < 5) {
      this.refs.swiper.scrollBy(1);
    }
  }
  render() {


    let data=[
      {
      name:"knrefjknerfkjernfjkerbfjker",
      key:0
    },
  
  
  {
    name:"lkjenrfkjerbfkjer",
    key:1
  },

  {
    name:"klrtnglkrtngkjrtngnrtglknrtgknrtgkjrtgtnrglknrtglknrtgkntrjkg j gjrgnkrtjg",
    key:2
  },
]
    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} height={400} horizontal={true}
          ref='swiper'
          activeDotStyle={{backgroundColor:"#4b778d",borderColor:"#4b778d"}}

          onIndexChanged={(e) => {

            this.setState({activeList:e})
            console.log("event ", e)
          }}
        // onIndexChanged={idxActive => this.setState({idxActive})}
        >
          <View style={styles.slide1}>
            {/* <Text style={styles.text}>Hello Swiper</Text> */}
            <Image source={require("./assets/mainonboarding.jpg")}/> 
          </View>
          <View style={styles.slide2}>
            {/* <Text style={styles.text}>Beautiful</Text> */}
            <Image source={require("./assets/mainonboarding.jpg")}/> 
          </View>
          <View style={styles.slide3}>
          <Image source={require("./assets/mainonboarding.jpg")}/> 
            {/* <Text style={styles.text}>And simple</Text> */}
          </View>


        </Swiper>



        {/* <View style={{ flexDirection: "row" ,flex:1 }}>




          <View style={{flex:1,width:50 }}><Button onPress={this.onPressNext}

            title="gffg">Next</Button></View>


          <View style={{flex:1 ,width:50}}><Button onPress={this.onPressNext}

            title="gffg">Next</Button></View>


        </View> */}
        <View style={{
          justifyContent: "space-between",
          backgroundColor: "#ffff", height: 250, flexDirection: "column",
          marginTop: 10, marginLeft: 0, marginRight: 0, borderStyle: "solid",
          shadowColor: "#c8d1db",
          borderWidth: 0.5, borderColor: "#c8d1db", shadow: 70, rounded: 90, borderRadius: 10,



        }}>
          <View style={{ flex: 0, alignItems: "flex-start", marginTop: 40,marginLeft:30 ,marginRight:30}}>
            <Text style={{paddingBottom:30,fontStyle:"normal",fontWeight:"bold"}}>

            Consectetur Adipiscing
          </Text> 

          {/* <View style={{ flex: 0, alignItems: "flex-start", marginTop:0,  marginLeft:30 ,marginRight:30}}> */}
           {data.map(i=>{
             if(i.key==this.state.activeList){
               return(<Text>{i.name}</Text>)
             }
           })}
           
            {/* <Text>Consectetur Adipiscing  Spanish is the official language of Spain, the country after which it is named and from which it originated. Other European territories in which it is also ...</Text> */}

            {/* <View  style={{ flex:0,width:'100%',padding:10,}}>
                <Button title="Request Pending"  borderRadius='10' color={"#9faebf"} /></View> */}

          </View>

{this.state.activeList!==2? <View style={{ flexDirection: "row", flex: 0 ,marginBottom:50,marginLeft:30,marginRight:30}} >
            <View style={{ flex: 1, alignItems: "flex-start" }}>
              <Button text="Skip" onPress={this.onPressPrev} type="fill" backgroundColor="#ffff" size='small' />
            </View>
            <View style={{   alignItems: 'flex-end' }}>
              <Button onPress={this.onPressNext} text="Next"  size="small"  backgroundColor="#4b778d" /></View>
          </View>:      <View style={{marginBottom:50,marginLeft:30,marginRight:30}}><Button text="Get Started" onPress={this.onPressPrev} backgroundColor="#4b778d" /></View>  
}
         
        </View>

      </View>
    )
  }
}