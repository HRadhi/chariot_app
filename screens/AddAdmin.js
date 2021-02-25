import React, { useState } from 'react';
import { StyleSheet, Alert, Text } from 'react-native';
import { Form, Input, Item, Button, Label, View } from 'native-base';

import * as firebase from 'firebase';
import 'firebase/functions';
import * as LocalAuthentication from 'expo-local-authentication';

export default function AddAdmin({ navigation }) {

// A state used to add a user
const [email,setEmail] = useState('');
const [key,setKey] = useState('');

const addAdmin = (email) => {
    firebase.functions().useEmulator('localhost',5000);
    const addAdminRole = firebase.functions().httpsCallable('addAdminRole');
    addAdminRole(email).then(res => {
        console.log(res)
    }).catch(err=> {
        console.log('error:'+err)
    })
} 


return (  
    <Form style={styles.form}>
        <View style={styles.title}>
            <Text style={styles.titleText}> Make an Admin</Text>
        </View>      
        <Item floatingLabel>
            <Label>User Email</Label>
            <Input 
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(email)=>setEmail(email)}
            />
        </Item>

        <Item floatingLabel>
            <Label>Secret Key</Label>
            <Input 
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(key)=>setKey(key)}
            />
        </Item>

        <Button style={{ marginTop: 30 }}
            full
            rounded
            success
            onPress={() => addAdmin(email)}
        >
            <Text style={{color:'white'}}>Make An Admin</Text>
        </Button>
    </Form>
);    
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingTop: 50,
        padding: 30,
    },
    titleText: {    
        fontFamily: 'nunito-bold',
        fontSize: 24,
        color: '#555',
        paddingBottom: 20,
        paddingTop: 30
    },
});



            