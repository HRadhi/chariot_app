import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';


export default function MasterLogin( { navigation }) {
    
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [key, setKey] = useState('');
  const usernameInput= React.createRef();
  const passwordInput= React.createRef();
  const keyInput= React.createRef();

  const pressHandler= () => {
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
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed');
      }}>
    <View style={styles.container}>
      <Text style={globalStyles.titleText}> Login as a Master</Text>
      <View style={styles.form}>
        <Text style={globalStyles.paragraph}>Username</Text>
        <TextInput 
        placeholder='username' 
        style={styles.input}
        onChangeText={(value) => setUserName(value)} 
        ref={usernameInput} />

        <Text style={globalStyles.paragraph}>Password</Text>
        <TextInput 
        placeholder='********' 
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(value) => setPassword(value)} 
        ref={passwordInput} />

        <Text style={globalStyles.paragraph}>Key</Text>
        <TextInput 
        placeholder='********' 
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(value) => setKey(value)} 
        ref={keyInput} />
        <Text>  </Text>
        <Button style={styles.btn} title='Login' color='#98c1d9' onPress={pressHandler}/>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 80,
  },
  form :{
    paddingTop: 45
  },
  content: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
    letterSpacing: 0.5,
  },
  input: {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#ddd',
      padding: 5,
      margin: 5,
      width: 200,
  }, 
  btn :{
    width: 100,
    borderRadius: 10,
    marginTop:8
  }
});
