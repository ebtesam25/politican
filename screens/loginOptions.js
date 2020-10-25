import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';

let customFonts  = {
  'Avenir': require('../assets/fonts/Avenir.ttf'),
};

export default class LoginOptions extends React.Component  {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render(){
    if (this.state.fontsLoaded) {
    return (
    <View style={styles.container}>
      <Image source={require('../assets/img/logo.png')} style={styles.header}></Image>
      <TouchableOpacity style = {styles.button} onPress={() => this.props.navigation.navigate('Signup')}>
        <View style = {{backgroundColor: '#15345E', alignItems: 'center', borderRadius: 15}}>
          <Text style = {{fontSize:20,color: 'white'}}>Sign Up</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.button} onPress={() => this.props.navigation.navigate('Login')}>
        <View style = {{backgroundColor: '#f5f5f5', alignItems: 'center', borderRadius: 15}}>
          <Text style = {{fontSize:20,color: '#0F0E35'}}>Log In</Text>
        </View>
      </TouchableOpacity>
    </View>
    );
    }
    else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    position:'relative',
    backgroundColor:'#FFF'
  },
  header:{
    height:'55%',
    width:'55%',
    resizeMode:'contain',
    alignSelf:'center',
    marginTop:'25%'
  },
  button:{
    alignSelf:'center',
    width: '60%',
    marginBottom:'5%'
  }
});