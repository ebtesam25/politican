import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Loc from '../assets/img/locb.png'

export default class TheMap extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
      markers: [{"latlng":{
        "latitude": 25.76684817404011,
        "longitude": -80.19163068383932,
      }}],
      poll:false,
      local:false,
      incident:false,
      restroom:false,
    };
  }

  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };

  render() {
    return (
      <View style={{backgroundColor:'#FFF', flex:1}}>
       
            {/* <Text style={{fontSize:20,fontFamily:'Avenir', color:'#6B92D6', marginTop:'10%', marginLeft:'10%'}}>How safe is this place?</Text>
            <Image  source={Loc} style={{height:1, width:1, position:'absolute', zIndex:2, resizeMode:'contain',marginTop:'16%', marginLeft:'10%' }}></Image>
            <Text style={{fontSize:50,fontFamily:'Avenir', color:'#6B92D6', marginTop:'1%', marginLeft:'20%'}}>{this.state.markers[0].latlng.latitude.toFixed(2)},{this.state.markers[0].latlng.longitude.toFixed(2)}</Text> */}
       <View style={styles.options}>
        <TouchableOpacity style={{width:60, height:40, marginVertical:'2.5%', marginLeft:'5%'}}><Image source={require('../assets/img/local.png')} style={{width:60, height:40, resizeMode:'contain', marginVertical:'5%', marginLeft:'5%'}}></Image></TouchableOpacity> 
        <TouchableOpacity style={{width:60, height:40, marginVertical:'2.5%', marginLeft:'2%'}}><Image source={require('../assets/img/incident.png')} style={{width:100, height:42, resizeMode:'contain', marginVertical:'5%', marginLeft:'5%'}}></Image></TouchableOpacity> 
        <TouchableOpacity style={{width:60, height:40, marginVertical:'2.5%', marginLeft:'12%'}} onPress={()=>this.setState({poll:true})}><Image source={require('../assets/img/polling.png')} style={{width:90, height:42, resizeMode:'contain', marginVertical:'5%', marginLeft:'5%'}}></Image></TouchableOpacity> 
        <TouchableOpacity style={{width:60, height:40, marginVertical:'2.5%', marginLeft:'10%'}}><Image source={require('../assets/img/restroom.png')} style={{width:60, height:40, resizeMode:'contain', marginVertical:'5%', marginLeft:'5%'}}></Image></TouchableOpacity> 
       </View>
       
        <MapView
        style={styles.map}
        initialRegion={{
          latitude: 25.7664362,
          longitude: -80.1915964,
          latitudeDelta: .005,
          longitudeDelta: .005
        }} 
        onLongPress={this.ShowHideComponent}
        onPress={(e) => this.setState({ markers: [...this.state.markers,{ latlng: e.nativeEvent.coordinate }] })}>
          {
              this.state.markers.map((marker, i) => (
                  <MapView.Marker key={i} coordinate={marker.latlng} onLongPress={()=>console.log('Pressed')} >
                   {console.log(marker.latlng)}
                   <Image source={require('../assets/img/poll.png')}></Image>
                </MapView.Marker>
                
                  
              ))}
              
      </MapView>
     
    {/* Text button was here */}

          <View style={{width:80, height:50, position:'absolute', zIndex:3, bottom:80, backgroundColor:'#B6E13D', borderRadius:10, right:10}}>
            <Image source={require('../assets/img/locg.png')} style={{alignSelf:'center', marginVertical:'15%'}}></Image>
          </View>
      <View style={styles.footer}>
        <TouchableOpacity style={{width:60, height:40, marginVertical:'3.75%', marginLeft:'5%'}}><Image source={require('../assets/img/bookmark.png')} style={{width:40, height:34, resizeMode:'contain', marginVertical:'5%', marginLeft:'5%'}}></Image></TouchableOpacity> 
        <TouchableOpacity style={{width:60, height:40, marginVertical:'2.5%', marginLeft:'2%'}}><Image source={require('../assets/img/place_.png')} style={{width:100, height:42, resizeMode:'contain', marginVertical:'5%', marginLeft:'5%'}}></Image></TouchableOpacity> 
        <TouchableOpacity style={{width:60, height:40, marginVertical:'2.5%', marginLeft:'12%'}}><Image source={require('../assets/img/more.png')} style={{width:90, height:42, resizeMode:'contain', marginVertical:'5%', marginLeft:'5%'}}></Image></TouchableOpacity> 
        <TouchableOpacity style={{width:60, height:40, marginVertical:'2.5%', marginLeft:'15%'}}><Image source={require('../assets/img/profile.png')} style={{width:60, height:40, resizeMode:'contain', marginVertical:'5%', marginLeft:'5%'}}></Image></TouchableOpacity> 
      </View>
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
    borderRadius:50,
    width:'90%',
    alignSelf:'center',
    position:'absolute',
    zIndex:2,
    top:'20%',
    backgroundColor:'#F2F3F5',
    alignContent:'center',
  },
  map: {
    height: '100%',
    borderRadius:100,
    width:'100%',
    margin:'0%',
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
  },
  options:{
    position:'absolute',
    zIndex:3,
    height:70,
    width:'90%',
    backgroundColor:'#FFF',
    elevation:2,
    borderRadius:5,
    alignSelf:'center',
    top:50,
    flexDirection:'row'
  },
  footer:{
    position:'absolute',
    zIndex:3,
    height:70,
    width:'100%',
    backgroundColor:'#2B3864',
    elevation:2,
    borderRadius:0,
    alignSelf:'center',
    bottom:0,
    flexDirection:'row'
  }
});