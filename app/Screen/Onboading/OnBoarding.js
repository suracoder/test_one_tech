

import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import Button from "../../components/Button/Button"
import { color } from '../../styles/color'
const { width } = Dimensions.get('window')

export default class extends Component {
  constructor(props) {
    super(props);
    this.onPressNext = this.onPressNext.bind(this);
    this.onPressPrev = this.onPressPrev.bind(this);
    this.state = {
      idxActive: 0,
      activeList: 0
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
console.log("navigation props  >>>> ",this.props)

    let data = [
      {
        name: "knrefjknerfkjernfjkerbfjker",
        key: 0
      },


      {
        name: "lkjenrfkjerbfkjer",
        key: 1
      },

      {
        name: "klrtnglkrtngkjrtngnrtglknrtgknrtgkjrtgtnrglknrtglknrtgkntrjkg j gjrgnkrtjg",
        key: 2
      },
    ]
    return (
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          height={400} horizontal={true}
          ref='swiper'
          activeDotStyle={{
            backgroundColor: "#4b778d",
            borderColor: "#4b778d"
          }}

          onIndexChanged={(e) => {

            this.setState({ activeList: e })
            console.log("event ", e)
          }}
        >
          <View style={styles.slide1}>

            <Image source={require("../../../assets/mainonboarding.jpg")} />
          </View>
          <View style={styles.slide2}>

            <Image source={require("../../../assets/mainonboarding.jpg")} />
          </View>
          <View style={styles.slide3}>
            <Image source={require("../../../assets/mainonboarding.jpg")} />

          </View>


        </Swiper>
        <View style={styles.bottomSection}>
          <View style={styles.textArea}>
            <Text style={styles.headerText}>

              Consectetur Adipiscing
            </Text>

            {data.map(i => {
              if (i.key == this.state.activeList) {
                return (<Text>{i.name}</Text>)
              }
            })}

          </View>

          {this.state.activeList !== 2 ?
            <View
              style={styles.buttonSection} >
              <View style={{ flex: 1, alignItems: "flex-start" }}>
                <Button text="Skip" onPress={()=>{
                                  this.props.navigation.navigate('Authentication');

                }} type="fill" backgroundColor="#ffff" size='small' />
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Button onPress={this.onPressNext} text="Next" size="small" backgroundColor={color.primary} /></View>
            </View> :
            <View style={{ flex:1,marginTop:30,alignContent:"center", alignItems:"center", alignSelf:"stretch"}}>
              <Button text="Get Started" onPress={()=>{
                // this.props.navigate.na
                this.props.navigation.navigate('Authentication');
              }} backgroundColor={color.primary} />
            </View>
          }

        </View>

      </View>
    )
  }
}




const styles = {
  container: {
    flex: 1,
    backgroundColor:"#ffff"
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
  },
  bottomSection: {
    justifyContent: "space-between",
    backgroundColor: "#ffff", height: 250, flexDirection: "column",
    marginTop: 10, marginLeft: 0, marginRight: 0, borderStyle: "solid",
    shadowColor: "#c8d1db",
    borderWidth: 0.5, borderColor: "#c8d1db", shadow: 70, rounded: 90, borderRadius: 10,
  },
  textArea: {
    flex: 0, alignItems: "flex-start", marginTop: 40, marginLeft: 30, marginRight: 30
  },
  headerText: {
    paddingBottom: 30, fontStyle: "normal", fontWeight: "bold"
  },
  buttonSection: {

    flexDirection: "row", flex: 0, marginBottom: 40, marginLeft: 30, marginRight: 30
  },
  skipBtn:{

  }
}
