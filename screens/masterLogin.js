import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, Alert, 
         TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import AddUser from './addForm'

import * as firebase from 'firebase';

import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';


export default function MasterLogin( { navigation }) {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
// Control modal visualization
  const [modalOpenAdd, setModalOpenAdd] = useState(false);
  

  const loginUser = (email, password) => {

    firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
      //console.log(user)
      navigation.navigate('OperatorsManager')
    }).catch((error) => {
      Alert.alert(
        'Warning !',
        error.toString(),
        [
          {
            text: 'Try Again',
            onPress: () => console.log('Ask me later pressed')
          }
        ],
        { cancelable: false }
      )}
    ).finally(() => {
      setEmail('')
      setPassword('')
    });    
  }
  
  
  /*const pressHandler= () => {
    if (key=='1') {
      navigation.navigate('OperatorsManager');
    } else {
      Alert.alert(
        'Warning !',
        'Username or Password or Key Master are false',
        [
          {
            text: 'Try Again',
            onPress: () => console.log('Ask me later pressed')
          }
        ],
        { cancelable: false }
      );
    }    
   usernameInput.current.clear();
   passwordInput.current.clear();
   keyInput.current.clear();
  }*/

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed');
    }}>
    <Container style={styles.container}> 

    {/*** Add User modal ***/}
    <Modal visible={modalOpenAdd} animationType='slide'>
      <View style={styles.modalContent}>
        <MaterialIcons 
        name='close'
        size={24}
        style={{...styles.modalToggle, ...styles.modalClose}}
        onPress={() => setModalOpenAdd(false)}
        />
        <View>
          <AddUser setModalOpenAdd={setModalOpenAdd}/>
        </View>
      </View>
    </Modal>

    <Text style={globalStyles.titleText}> Login as a Master</Text>
      <Form style={{ marginTop: 20 }}>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input 
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(email)=>setEmail(email)}
          />
        </Item>

        <Item floatingLabel>
          <Label>Password</Label>
          <Input 
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(password)=>setEmail(password)}
          />
        </Item>

        <Button style={{ marginTop: 30 }}
          full
          rounded
          success
          onPress={() => loginUser(email,password)}
        >
          <Text style={{color:'white'}}>Login</Text>
        </Button>
        <Button style={{ marginTop: 10 }}
          full
          rounded
          info
          onPress={() => setModalOpenAdd(true)}
        >
          <Text style={{color:'white'}}>Add An Operator</Text>
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
  titleText: {    
    fontFamily: 'nunito-bold',
    fontSize: 24,
    color: '#555',
  },
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  }
});
