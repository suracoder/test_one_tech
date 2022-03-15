import React, { useState } from 'react';
import {  Overlay, Icon } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../../components/Button/Button';
 import { color } from '../../../styles/color';
const OverlayComponent  = (props) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
       
      <Overlay isVisible={props.showModal}
      
      overlayStyle={{shadowColor:"red"}}
      onBackdropPress={toggleOverlay}>
        <Text style={styles.textPrimary}>Cancle Request!</Text>
        <Text style={styles.textSecondary}>
Are you sure to continue        </Text>
<View style={{alignContent:"center",alignItems:"center",alignSelf:"center"}}><Button
        backgroundColor={color.primary}
          text="Yes,reject request"
          onPress={toggleOverlay}
        /></View>


        <View style={{margin:20}}><Button
              
              bordered={true}    text="Edit"  type="outlined" backgroundColor="#fff" 
          text="No, close window"
          onPress={props.handleCloseWindow}
        /></View>
              
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 30,
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
  },
});

export default OverlayComponent;