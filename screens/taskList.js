import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, Content, Accordion } from 'react-native';
import { List, ListItem, Left, Body, Right, Thumbnail, Button } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import AddTask from './addTask'

import * as firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';

export default function TaskList({ activeUser }) {

// States
  const [modalOpenAdd, setModalOpenAdd] = useState(false);  
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState('');
  const _isMounted = useRef(true); // Initial value _isMounted = true

// get operator tasks list
useEffect(()=> {
    const abortController = new AbortController();
    firebase.firestore().collection('tasks').where('operatorEmail','==',activeUser.activeEmail).onSnapshot(snapshot => {
                   
        let tasks = [];
        snapshot.docs.map(doc => { 
            tasks.push({
                operatorName: doc.data().operatorName,
                operatorEmail:doc.data().operatorEmail,
                taskTitle: doc.data().taskTitle,
                taskDescription: doc.data().taskDescription,
                priority: doc.data().priority, 
                key: doc.id
            });
        });
        setTasks(tasks);
        tasks=[];
        // use effect cleanup to set flag false, if unmounted
    })    
    return ()=> {abortController.abort()}    
  },[])

const AddOperatorTask = () => {   
    setUser(activeUser) 
    //console.log(activeUser)
    setModalOpenAdd(true)
}

const DeleteTask = (taskId) => {
    firebase.firestore().collection('tasks').doc(taskId).delete();
    console.log(taskId)
}
/*****************************************************************/
  return (
    <View style={styles.form}>

        {/*** Add Operator Task modal ***/}
        <Modal visible={modalOpenAdd} animationType='slide'>
            <View style={styles.modalContent}>
            <MaterialIcons 
            name='close'
            size={24}
            style={{...styles.modalToggle, ...styles.modalClose}}
            onPress={() => setModalOpenAdd(false)}
            />
            <View style={styles.container}>
                <AddTask activeUser={user} setActiveUser={setUser} setModalOpenAdd={setModalOpenAdd}/>
            </View>
            </View>
        </Modal>

        <View style={styles.title}>            
            <Text style={styles.titleText}>{activeUser.activeName} Tasks</Text>
        </View>
        <Button 
            full
            rounded
            success
            onPress={() => AddOperatorTask()}
            style={{marginLeft: 5, marginRight: 5, marginBottom: 6}}
            >
                <Text style={{color:'white'}}>Add Task</Text>
        </Button>
        <ScrollView>
            <List 
            scrollEnabled={true}
            >
                <ListItem 
                itemHeader 
                first
                style={{
                    height:20, 
                    backgroundColor:'#f7f6e7' ,
                    borderColor: '#cfd3ce', 
                    borderWidth: 1, 
                    borderRadius: 3, 
                    margin: 5, 
                    marginTop: 4,
                    flexDirection: 'row',
                    justifyContent: 'space-around', 
                    alignContent:'center',
                }} 
                >
                    <View style={{width:'20%'}}><Text note>Title</Text></View>
                    <View style={{width:'65%'}}><Text note>Description</Text></View>
                    <View style={{width:'15%'}}><Text note>Delete</Text></View>
                </ListItem>
                {tasks.map((task) => {
                return(
                <ListItem 
                style={{backgroundColor:'#f7f6e7' ,borderColor: '#cfd3ce', borderWidth: 1, borderRadius: 3, margin: 5, marginTop: 4}} 
                noIndent={true} 
                key={task.key}
                >                   
                    <View 
                    style={{ 
                        width: '100%', 
                        flexDirection:'row', 
                        justifyContent: 'space-evenly', 
                        alignContent:'center',
                    }}>

                        <View style={{width:'20%'}}>
                            <Text note>{task.taskTitle}</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text note style={{fontFamily: 'nunito-regular',fontSize: 14}}>{task.taskDescription}</Text>
                        </View>

                        <TouchableOpacity 
                            onPress={() => DeleteTask(task.key)}>
                            <MaterialIcons 
                            name='delete'
                            size={24}
                            style={{color:'#555'}}
                            />
                        </TouchableOpacity>
                    </View>
                </ListItem>
                )})}
            </List>
        </ScrollView> 
        
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: '100%',
    height: '100%',
  },
  title: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 5,
    paddingTop: 5
  },
  titleText: {    
    fontFamily: 'nunito-regular',
    fontSize: 20,
    color: '#333',
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 10,
    marginBottom: 0,
  },
  footer :{
      width: '100%',
      top: '10%',
      backgroundColor: '#fff',
      flex: 1,
      padding: 0,
  },
  btn : {
      width: '100%',
      height: '100%'
  }
});
