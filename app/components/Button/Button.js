 


import React from 'react'
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'


const width = Dimensions.get('window').width


const Button = ({ text, onPress, type = 'filled', bordered = false, size = 'large' ,backgroundColor="red"}) => {
  const large = width / 1.3
  const small = width / 6
  const btnSize = size === 'large' ? large : small
  const btnBgColor = type === 'filled' ? '#3f51b5' : 'transparent'
  const btnTextColor = type === 'filled' ? '#ffffff' : '#4b778d'
  const btnBorderRadius = bordered ? 10 : 4

  const containerCommonStyle = {
    backgroundColor:backgroundColor,
    paddingVertical: 8,
    width: btnSize,
    borderRadius: btnBorderRadius,
    borderColor:"#6371c2",
  
  }

  const textCommonStyle = {
    color: btnTextColor,
    fontSize: 16,
    // textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: 'Quicksand-Medium'
  }

  const border = type === 'outlined' && { borderColor: '#e7e7e7', borderWidth: 2 }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={[containerCommonStyle, border]}>
        <Text style={[textCommonStyle]}> {text} </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button