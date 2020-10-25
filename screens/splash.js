import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

let customFonts  = {
  'Avenir': require('../assets/fonts/Avenir.ttf'),
};

export default class Splash extends React.Component  {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    setTimeout(() => {
      this.props.navigation.navigate('TheMap');
    }, 2000);
  }

  render(){
    if (this.state.fontsLoaded) {
    return (
    <View style={styles.container}>
      <Image source={require('../assets/img/logo.png')} style={styles.header}></Image>
      <Text style={styles.welcome} onPress={() => this.props.navigation.navigate('TheMap')}>Welcome!</Text>
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
    marginVertical:'50%'
  },
  welcome:{
    fontFamily:'Avenir',
    fontSize:50,
    alignSelf:'center',
    top:'20%',
    color:'transparent',
    position:'absolute',
    zIndex:2,
  }
});