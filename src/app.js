import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAWJ2PnaqwrcpvNqhaCOYc0ODxgOw_97mA",
      authDomain: "auth-94f65.firebaseapp.com",
      databaseURL: "https://auth-94f65.firebaseio.com",
      projectId: "auth-94f65",
      storageBucket: "auth-94f65.appspot.com",
      messagingSenderId: "236809530824"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
