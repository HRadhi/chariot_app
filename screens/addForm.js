import React, { useState } from 'react';
import { StyleSheet, Alert, Text } from 'react-native';
import { Form, Input, Item, Button, Label } from 'native-base';

import * as firebase from 'firebase';
import * as LocalAuthentication from 'expo-local-authentication';

export default function AddUser({setModalOpenAdd}) {

// A state used to add a user
const [newName,setNewName] = useState('');
const [newEmail,setNewEmail] = useState('');
const [newPass,setNewPass] = useState('');
const [key,setKey] = useState('');

const signUpUser = (email, password) => {

  LocalAuthentication.authenticateAsync({promptMessage: 'Scan Your Finger'}).then((success)=> {
    if(success){
      firebase.auth().createUserWithEmailAndPassword(email,password).then(cred => {
        return firebase.firestore().collection('operators').doc(cred.user.uid).set({
          name : newName,
          email: newEmail
        });
      }).then(() => {
        //close the modal
        setModalOpenAdd(false);
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
        );
      //close the modal
      setModalOpenAdd(false);
      });
    }
  })
}


return (  
    <Form style={styles.form}>
      <Text style={styles.titleText}> Add an Operator</Text>
      <Item floatingLabel>
        <Label>Full Name</Label>
        <Input 
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(name)=>setNewName(name)}
        />
      </Item>

      <Item floatingLabel>
        <Label>Email</Label>
        <Input 
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(email)=>setNewEmail(email)}
        />
      </Item>

      <Item floatingLabel>
        <Label>Password</Label>
        <Input 
        secureTextEntry={true}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(password)=>setNewPass(password)}
        />
      </Item>

      <Item floatingLabel>
        <Label>Secret Key</Label>
        <Input 
        secureTextEntry={true}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(key)=>setKey(key)}
        />
      </Item>

      <Button style={{ marginTop: 30 }}
        full
        rounded
        success
        onPress={() => signUpUser(newEmail, newPass)}
      >
        <Text style={{color:'white'}}>Add</Text>
      </Button>
    </Form>
);    
}

const styles = StyleSheet.create({
  form: {
    //flex: 1,
    paddingTop: 50,
    padding: 30
  },
  titleText: {    
    fontFamily: 'nunito-bold',
    fontSize: 24,
    color: '#555',
  },
});



            