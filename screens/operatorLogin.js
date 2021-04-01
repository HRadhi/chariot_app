
import React, { useState } from 'react';

import { StyleSheet, Text, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Container, Form, Input, Item, Button, Label } from 'native-base';
import { globalStyles } from '../styles/global';

import * as firebase from 'firebase';


export default function OperatorLogin ({ navigation }) {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = (email, password) => {

    firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
      //console.log(user)
      navigation.navigate('OperatorTasks');
    }).catch((error) => {
      Alert.alert(
        'Warning !',
        error.toString(),
        [
          {
            text: 'Try Again',
            //onPress: () => console.log('Ask me later pressed')
          }
        ],
        { cancelable: false }
      )});
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>
    <Container style={styles.container}>
      <Text style={globalStyles.titleText}> Login as an Operator</Text>
      <Form style={{ marginTop: 20 }}>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input 
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(email)=>setEmail(email.replace(/ /g, ''))}
          />
        </Item>

        <Item floatingLabel>
          <Label>Password</Label>
          <Input 
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(password)=>setPassword(password)}
          />
        </Item>

        <Button style={{ marginTop: 30 }}
          full
          rounded
          success
          onPress={() => loginUser(email,password)}
        >
          <Text style={{color: 'white'}}>Login</Text>
        </Button>
      </Form>
    </Container>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
    padding: 30
  },
});

