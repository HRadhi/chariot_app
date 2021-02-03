import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';


export default function MasterLogin( { navigation }) {
    
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [key, setKey] = useState('');
  const usernameInput= React.createRef();
  const passwordInput= React.createRef();
  const keyInput= React.createRef();

  const pressHandler= () => {
    if (key=='spacetrain') {
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
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed');
      }}>
    <View style={styles.container}>
      <Text style={styles.content}> Login as a Master</Text>
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

        <Text>Key</Text>
        <TextInput 
        placeholder='********' 
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(value) => setKey(value)} 
        ref={keyInput} />
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
