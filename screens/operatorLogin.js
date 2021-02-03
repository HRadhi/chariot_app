import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function OperatorLogin ({ navigation }) {
    
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const usernameInput= React.createRef();
  const passwordInput= React.createRef();

  const pressHandler= () => {
    navigation.navigate('RemoteControl');
    usernameInput.current.clear();
    passwordInput.current.clear();
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed');
      }}>
    <View style={styles.container}>
      <Text style={styles.content}> Login as an Operator</Text>
      <View style={styles.form}>
        <Text>Username</Text>
        <TextInput 
        placeholder='username' 
        style={styles.input}
        onChangeText={(value) => setUserName(value)} 
        ref={usernameInput} />

        <Text>Password</Text>
        <TextInput 
        placeholder='********' 
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(value) => setPassword(value)} 
        ref={passwordInput} />
        <Button title='Login' color='#98c1d9' onPress={pressHandler}/>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 100,
  },
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
  }
});
