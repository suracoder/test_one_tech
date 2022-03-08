 
import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Badge, Icon, withBadge ,BadgeProps} from 'react-native-elements';
import { Ionicons,Octicons } from '@expo/vector-icons';
import { color } from '../../../styles/color';

const BadgedIcon = withBadge(2)(Icon);

const BadgeComponent = () => {
  return (
    <>
      <ScrollView>
 
 
        
   
     

 
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
         
          }}
        >
 <View  style={{marginRight:10,marginLeft:10}}>
            {/* <Avatar
              rounded
              source={{
                uri: 'https://randomuser.me/api/portraits/women/40.jpg',
              }}
              size="small"
            /> */}


<Octicons name="bell" size={26} color={color.primary} />
            <Badge
              // status="success"
              textStyle={{color:color.primary}}
              badgeStyle={{backgroundColor:"#ffff",borderColor:color.primary,borderWidth:1,borderStyle:"solid"}}
              value={2}
              
              containerStyle={{ position: 'absolute', top: 5, left: -6 }}
            />
          </View>
          
          {/* <View style={{marginRight:30}}><BadgedIcon   type="ionicon" name="ios-chatbubbles"/></View> */}
        
          <View>
          {/* <BadgedIcon type="ionicon" name="ios-chatbubbles" /> */}

            <Avatar
              rounded
              source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
              size="small"
            />
             
          </View>
      
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    backgroundColor : "#2089dc",
    color : "white",
    textAlign : "center",
    // paddingVertical : 5,
    // marginBottom : 10
  }
})

export default BadgeComponent;