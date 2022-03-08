import React from "react"

import {View,Text,FlatList,StatusBar,TouchableOpacity} from "react-native"

const WalkThrough=(params)=>{

    const [saved,setSaved]=React.useState(null);
  
    const [splashData,setSplashData]=React.useState([
  
      {
  
        title:'Welcome to PrEPsmart',
  
        desc:'Stay ready. Have backup. Be protected.',
  
        image:1
  
      },
  
      {
  
        title:'Know you’re protected.',
  
        desc:`Each time you take your pill using the app, PrEPsmart will tell you when you're protected.`,
  
        image:2
  
      },
  
      {
  
        title:'You’ve got backup!',
  
        desc:`We know it’s not easy to remember everything. We’ll remind you to take your PrEP doses.`,
  
        image:3
  
      },
  
      {
  
        title:'Track your sexual activities.',
  
        desc:`Simple tracking to help you recall the who, what, and when.`,
  
        image:4
  
      }
  
    ])
  
    const [viewableSlide,setViewableSlide]=React.useState(0);
  
    React.useEffect(async ()=>{
  
      const key=await AsyncStorage.getItem("kayo");
  
      setSaved(key);
  
    },[])
  
    const width=Dimensions.get('window').width
  
    const _onViewableItemsChanged = React.useCallback(({ viewableItems, changed }) => {
  
       console.log("Visible items are", viewableItems);
  
      if(viewableItems[0]){
  
  
  
  
      setViewableSlide(parseInt(viewableItems[0].index))
  
      }
  
  }, []);
  
  
  
  
  const _viewabilityConfig = {
  
      itemVisiblePercentThreshold: 50
  
  }
  
    return (
  
      <View style={[styles.container,{borderWidth:1,borderRadius:20,backgroundColor:'#eee'}]}>
  
      {/* <Background/> */}
  
      <FlatList snapToInterval={width} showsHorizontalScrollIndicator={false} viewabilityConfig={_viewabilityConfig} onViewableItemsChanged={_onViewableItemsChanged} decelerationRate={'fast'} pagingEnabled={true} snapToAlignment={'center'} data={splashData} horizontal={true} renderItem={(dat,i)=>{
  
        return  <View key={"dit"+dat.index} style={{justifyContent:'center',alignItems:'center'}}><WalkThroughComponent title={dat.item.title} desc={dat.item.desc} image={dat.item.image}/></View>
  
     
  
      }} />
  
      <FlatList horizontal={true} data={[0,1,2,3]} style={{position:'absolute',alignSelf:'center',bottom:'10%'}} renderItem={(dat,i)=>{
  
        return <View key={"dot"+dat.index} >
  
                <TouchableOpacity style={{width:10,height:10,marginHorizontal:2,borderRadius:20,backgroundColor:(dat.item) === viewableSlide?'#b50a66':'#1d3357'}}>
  
  
  
  
                </TouchableOpacity>
  
        </View>
  
      }}/>
  
      <TouchableOpacity onPress={()=>params.navigation.navigate('signInScreen')} style={{position:'absolute',bottom:'8%',right:'5%',paddingVertical:10}}>{viewableSlide===3?<Text style={{fontWeight:'bold'}}>NEXT</Text>:null}</TouchableOpacity>
  
       <StatusBar barStyle="light-content" />
  
      </View>
  
    );
  
  }