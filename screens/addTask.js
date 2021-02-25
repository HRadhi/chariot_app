import React, { useState } from 'react';
import { StyleSheet, Alert, Text } from 'react-native';
import { Form, Input, Item, Button, Label } from 'native-base';

import * as firebase from 'firebase';
import * as LocalAuthentication from 'expo-local-authentication';

export default function AddUser({activeUser, setActiveUser, setModalOpenAdd}) {

// A state used to add a user
const [taskTitle,setTaskTitle] = useState('');
const [taskDescription,setTaskDescription] = useState('');
const [priority,setPriority] = useState('');

const AddTask = (activeUser) => {
    LocalAuthentication.authenticateAsync({promptMessage: 'Identity Verification'})
        .then((success)=>{
            if(success){
                firebase.firestore().collection('tasks').add({
                    operatorName: activeUser.activeName,
                    operatorEmail: activeUser.activeEmail,
                    taskTitle: taskTitle,
                    taskDescription: taskDescription,
                    priority: priority
                });
                setTaskDescription('');
                setPriority('');
            }
        }).catch(err=> {
            console.log(err)
        })
    setModalOpenAdd(false);
}


return (  
    <Form style={styles.form}>
      <Text style={styles.titleText}> Add a Task</Text>
      <Item floatingLabel>
        <Label>Task Title</Label>
        <Input 
        autoCorrect={false}
        autoCapitalize="none"
        required
        onChangeText={(taskTitle)=>setTaskTitle(taskTitle)}
        />
      </Item>

      <Item floatingLabel>
        <Label>Task Description</Label>
        <Input 
        autoCorrect={false}
        autoCapitalize="none"
        required
        onChangeText={(taskDescription)=>setTaskDescription(taskDescription)}
        />
      </Item>

      <Item floatingLabel>
        <Label>Priority</Label>
        <Input 
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(priority)=>setPriority(priority)}
        />
      </Item>

      <Button style={{ marginTop: 30 }}
        full
        rounded
        active
        onPress={() => AddTask(activeUser)}
      >
        <Text style={{color:'white'}}>Add</Text>
      </Button>
    </Form>
);    
}

const styles=StyleSheet.create({  
    form: {
        padding: 20,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    titleText: {
        fontFamily: 'nunito-regular',
        fontSize: 18,
        color: '#555',
        marginBottom: 3
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
  })


            