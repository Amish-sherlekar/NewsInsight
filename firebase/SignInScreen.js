import { Text, View } from 'react-native'
import React, { Component } from 'react'
import firebase from "./config"

const auth = firebase.auth();

auth()
  .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });

export default class SignInScreen extends Component {
  render() {
    return (
      <View>
        <Text>SignInScreen</Text>
      </View>
    )
  }
}