import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, FlatList } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Loc from '../assets/img/loc.png'
import Bg from '../assets/img/map.png'
import Eq from '../assets/img/profile.png'
import Fire from '../assets/img/bookmark.png'
import Storm from '../assets/img/restroom.png'
import Flood from '../assets/img/profile.png'
import Radio from '../assets/img/poll.png'

var valueColorE="#FFF";
var valueColorF="#FFF";
var valueColorFl="#FFF";
var valueColorS="#FFF";
var valueColorO="#FFF";
const token = ["New York","FL"];
export default class Details extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
      quake:0,
      fire:0,
      storm:0,
      flood:0,
      overall:0,
      scoreset:"",
    };
    
  }

  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };

componentDidMount(){
    
}


//   getRiskScores(latitude,longitude){
//       if(this.state.scoreset==""){
//     fetch('https://us-central1-aiot-fit-xlab.cloudfunctions.net/data2', {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           "lat":latitude,  
//           "lon":longitude,   

//         })
// })
//     .then((response) => response.json())
//     .then((responseJson) => {
//        console.log(responseJson);
//        this.setState({quake:responseJson.quake});
//        this.setState({fire:responseJson.fire});
//        this.setState({storm:responseJson.storm});
//        this.setState({flood:responseJson.flood});
//        this.setState({overall:responseJson.overall});
//        this.setState({scoreset:"success"});
//        console.log(this.state.scoreset);
//     })
//     .catch((error) => {
//         console.error(error);
//     });
// }
// if(this.state.quake>0 && this.state.quake<=20){
//         valueColorE="#A2FAA3";
//     }
//     else if(this.state.quake>20 && this.state.quake<=40){
//         valueColorE="#92C9B1";
//     }
//     else if(this.state.quake>40 && this.state.quake<=60){
//         valueColorE="#4F759B";
//     }
//     else if(this.state.quake>60 && this.state.quake<=80){
//         valueColorE="#5D5179";
//     }
//     else if(this.state.quake>80 && this.state.quake<=100){
//         valueColorE="#F00";
//     }
// if(this.state.flood>0 && this.state.flood<=20){
//         valueColorFl="#A2FAA3";
//     }
//     else if(this.state.flood>20 && this.state.flood<=40){
//         valueColorFl="#92C9B1";
//     }
//     else if(this.state.flood>40 && this.state.flood<=60){
//         valueColorFl="#4F759B";
//     }
//     else if(this.state.flood>60 && this.state.flood<=80){
//         valueColorFl="#5D5179";
//     }
//     else if(this.state.flood>80 && this.state.flood<=100){
//         valueColorFl="#F00";
//     }
// if(this.state.fire>0 && this.state.fire<=20){
//         valueColorF="#A2FAA3";
//     }
//     else if(this.state.fire>20 && this.state.fire<=40){
//         valueColorF="#92C9B1";
//     }
//     else if(this.state.fire>40 && this.state.fire<=60){
//         valueColorF="#4F759B";
//     }
//     else if(this.state.fire>60 && this.state.fire<=80){
//         valueColorF="#5D5179";
//     }
//     else if(this.state.fire>80 && this.state.fire<=100){
//         valueColorF="#F00";
//     }
// if(this.state.storm>0 && this.state.storm<=20){
//         valueColorS="#A2FAA3";
//     }
//     else if(this.state.storm>20 && this.state.storm<=40){
//         valueColorS="#92C9B1";
//     }
//     else if(this.state.storm>40 && this.state.storm<=60){
//         valueColorS="#4F759B";
//     }
//     else if(this.state.storm>60 && this.state.storm<=80){
//         valueColorS="#5D5179";
//     }
//     else if(this.state.storm>80 && this.state.storm<=100){
//         valueColorF="#F00";
//     }
// if(this.state.overall>0 && this.state.overall<=20){
//         valueColorO="#A2FAA3";
//     }
//     else if(this.state.overall>20 && this.state.overall<=40){
//         valueColorO="#92C9B1";
//     }
//     else if(this.state.overall>40 && this.state.overall<=60){
//         valueColorO="#4F759B";
//     }
//     else if(this.state.overall>60 && this.state.overall<=80){
//         valueColorO="#5D5179";
//     }
//     else if(this.state.overall>80 && this.state.overall<=100){
//         valueColorO="#F00";
//     }
//     else{
//         valueColorO="#CCC";

//     }
// }



  render() {
    // const { navigation, route } = this.props;
    // const { latitude,longitude,scoreset } = route.params;
    return (

      <View style={{backgroundColor:'#FFF', flex:1}}>
          {/* {this.getRiskScores(latitude,longitude)} */}
        
            <Text style={{fontSize:20,fontFamily:'Avenir', color:'#B6E13D', marginTop:'10%', marginLeft:'10%'}}>What's happeneing in my local area?</Text>
            <Text style={{fontSize:40,fontFamily:'Avenir', color:'#B6E13D', marginTop:'1%', marginLeft:'15%'}}>Incident Reports</Text>
      
        <View style={styles.mapContainer}> 
        <FlatList
                horizontal={true} 
                showsHorizontalScrollIndicator={false} 
                data={token}
                renderItem={ ({ item, index }) => (
                // <Image source={item} // Use item to set the image source
                //     key={index} // Important to set a key for list items
                //     style={{
                //     width:300,
                //     height:300,
                //     borderWidth:2,
                //     borderColor:'#34F4F9',
                //     resizeMode:'contain',
                //     margin:8,
                //     borderRadius:20,
                //     }}
                // />
                <Text style={{color:'#FFF', backgroundColor:'#1a7a7d', height:50, textAlignVertical:'center', paddingHorizontal:20, marginHorizontal:5, borderRadius:10}} onPress={()=>setTokenValue(item)}>{item}</Text>
                )}
            />

      </View>
      
      <Text style={{borderRadius:10, width:'80%', position:'absolute', zIndex:3,bottom:'2.5%', alignSelf:'center',textAlign:'center', height:70,fontFamily:'Avenir', fontSize:30, textAlignVertical:'center', color:'transparent'}}  onPress={() => {
            this.props.navigation.navigate('State');
          }}>Confirm</Text>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'gray'
  },
  mapContainer: {
    height: 520,
    borderRadius:20,
    width:'90%',
    alignSelf:'center',
    position:'absolute',
    zIndex:2,
    top:'20%',
    backgroundColor:'#F2F3F5',
    alignContent:'center',
    elevation:2,
  },
  map: {
    height: '92%',
    borderRadius:100,
    width:'90%',
    margin:'5%',
    alignSelf:'center',
    
  },
  overlay: {
    position: 'absolute',
    bottom: 50,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  }
});