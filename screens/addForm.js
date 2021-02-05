import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function AddUser({users, setUsers, setModalOpenAdd}) {

// A state used to add a user
const [newUser,setNewUser] = useState('');
const [newPass,setNewPass] = useState('');


// Ref added to clear the test input after pressing Add button
const usernameInput= React.createRef();
const passwordInput= React.createRef();

const pressHandler= () => {
  {/** Interact with the server FireBase **/}
  if (newUser.length>1 && newPass.length>1){
  const key = Math.random().toString();
  setUsers((currentUsers) => {
    return [{ username: newUser, password: newPass, key: key }, ...currentUsers];
  });
  }
  usernameInput.current.clear();
  passwordInput.current.clear();
  setNewUser('');
  setNewPass('');
  setModalOpenAdd(false);
}

return (
    <View style={styles.form}>
        <Text>Username</Text>
        <TextInput 
        placeholder='username' 
        style={styles.input}
        onChangeText={(value) => setNewUser(value)} 
        ref={usernameInput} />

        <Text>Password</Text>
        <TextInput 
        placeholder='********' 
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(value) => setNewPass(value)} 
        ref={passwordInput} />
        <Button title='Add' color='#98c1d9' onPress={pressHandler}/>
    </View>
);    
}

const styles=StyleSheet.create({
    
  form :{
    paddingTop: 40
  },
  content: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
    letterSpacing: 0.5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    margin: 10,
    width: 200,
  },
})



            