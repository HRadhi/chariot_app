import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity } from 'react-native';
import { List, ListItem, Thumbnail } from "native-base";
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import TaskList from './taskList'

import * as firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';

export default function OperatorsManager({ navigation }) {

// States
  const [modalOpenAdd, setModalOpenAdd] = useState(false);  
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState({activeEmail:'', activeName:''});

// get operators list
useEffect(()=> {
  firebase.firestore().collection('operators').onSnapshot(snapshot => {
    let operators = [];
    snapshot.docs.map(doc => { 
      operators.push({name:doc.data().name , email: doc.data().email,key: doc.id});
    });
    setUsers(operators);
    operators=[];
  })
  
},[])

const OperatorTask = (activeUser) => {
  setActiveUser(activeUser);
  //console.log(activeUser)
  setModalOpenAdd(true)
}

/*****************************************************************/
  return (
    <View style={globalStyles.container}>

      {/*** Operator Tasks (by uid) modal ***/}
      <Modal visible={modalOpenAdd} animationType='slide'>
        <View style={styles.modalContent}>
          <MaterialIcons 
          name='close'
          size={24}
          style={{...styles.modalToggle, ...styles.modalClose}}
          onPress={() => setModalOpenAdd(false)}
          />
          <View style={styles.container}>
            <TaskList activeUser={activeUser} />
          </View>
        </View>
      </Modal>

    <ScrollView>
      <List scrollEnabled={true}>
        {users.map((user) => {
          return(
          <ListItem noIndent={true} key={user.key}>
            <View 
              style={{ 
                width: '100%', 
                flexDirection:'row', 
                justifyContent: 'space-around', 
                alignContent:'center'
            }}>
              <TouchableOpacity onPress={()=> console.log('Profile Picture')}>
                <Thumbnail 
                square
                source={require('../assets/img/profile.png')}
                />
              </TouchableOpacity>
              <View style={{ color :'#444', flex: 1,marginTop: 3, marginLeft: 30}}>
                <Text style={styles.titleText}>{user.name}</Text>
                <Text note>{user.email}</Text>
              </View>
              <TouchableOpacity 
                onPress={()=> OperatorTask({activeEmail: user.email,activeName: user.name})}>
                <Thumbnail 
                square
                source={require('../assets/img/tasks.png')}
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

const styles=StyleSheet.create({  
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'nunito-regular',
    fontSize: 18,
    color: '#555',
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