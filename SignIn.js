import React from 'react';
import { View, Text } from 'react-native';
import { Input, Icon } from 'react-native-elements';

export default () => {

  return (
    <View style={{marginTop:10}}>
     

   

      <Input
    //   inputStyle={{borderBottomColor:"red" ,borderBottomWidth:1 ,borderBottomEndRadius:10,borderEndColor:"red",borderEndWidth:1}}
    //   containerStyle={{borderColor:"red" ,borderEndWidth:1}}
    inputContainerStyle={{borderStyle:"solid",   borderColor:"red" ,borderWidth:1 ,borderRadius:10}}
        placeholder='Name'
        rightIcon={
          <Icon
            name='user'
            size={24}
            color='black'
          />
        }
      />


<Input

        placeholder='Email'
        rightIcon={
          <Icon
            name='user'
            size={24}
            color='black'
          />
        }
      />

<Input
        placeholder='Phone No'
        rightIcon={
          <Icon
            name='user'
            size={24}
            color='black'
          />
        }
      />

<Input
        placeholder='Type A 4 Character Password'
        rightIcon={
          <Icon
            name='user'
            size={24}
            color='black'
          />
        }
      />

<Input
        placeholder='Confirm Password'
        rightIcon={
          <Icon
            name='user'
            size={24}
            color='black'
          />
        }
      />

 


    </View>
  );
};