import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';

let customFonts  = {
  'Avenir': require('../assets/fonts/Avenir.ttf'),
};

export default class Signup extends React.Component  {
  state = {
    fontsLoaded: false,
    username: '',
    email: '',
    password: '',
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  handleUsernameChange(username) {
    this.setState({ username });
  }

  handleEmailChange(email) {
    this.setState({ email });
  }

  handlePasswordChange(password) {
    this.setState({ password });
  }

  render(){
    if (this.state.fontsLoaded) {
    return (
    <View style={styles.container}>
        <Text style={styles.header}>Sign Up</Text>
        <Text style={styles.description}>username</Text>
        <View style={styles.inputContainer}>
    <TextInput
      style={styles.textInput}
      placeholder="username"
      maxLength={20}
      value={this.state.username}
  onChangeText={this.handleUsernameChange}
    />
  </View>
  <Text style={styles.description}>email</Text>
        <View style={styles.inputContainer}>
    <TextInput
      style={styles.textInput}
      placeholder="email"
      value={this.state.email}
  onChangeText={this.handleEmailChange}
    />
  </View>
  <Text style={styles.description}>password</Text>
        <View style={styles.inputContainer}>
    <TextInput
      style={styles.textInput}
      placeholder="password"
      value={this.state.password}
  onChangeText={this.handlePasswordChange}
    />
  </View>
      <TouchableOpacity style = {styles.button} onPress = {() => Alert.alert('signing up')}>
        <View style = {{backgroundColor: '#15345E', alignItems: 'center', borderRadius: 15}}>
          <Text style = {{fontSize:20,color: 'white'}}>Sign Up</Text>
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
    marginHorizontal: '5%'
  },
  header:{
    color:'#15345E',
    fontSize:40,
    alignSelf:'center',
    marginVertical:'25%'
  },
  button:{
    alignSelf:'center',
    width: '60%',
    marginTop:'10%'
  },
  description:{
      marginRight: 20
  },
  inputContainer: {
    paddingVertical: 15
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
  }
});