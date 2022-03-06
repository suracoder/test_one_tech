
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




import React from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('./assets/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('./assets/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  }
];

export default class App extends React.Component {
  this.state = {
    showRealApp: false
  }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
    }
  }
}