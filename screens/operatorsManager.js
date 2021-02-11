import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, FlatList, TouchableOpacity, TextInput, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import AddUser from './addForm'



export default function OperatorsManager({ navigation }) {
// Dummy data to test the card design
  const [modalOpenAdd, setModalOpenAdd] = useState(false);
  const [users, setUsers] = useState([
      { username: 'karimchemek', password:'123456', key: '1' },
      { username: 'radhi', password:'123456', key: '2' },
      { username: 'azgalabichouo', password:'123456', key: '3' },
    ]);

// Show/Hide function
const [toggle, setToggle] = useState(true);
const toggleFunction = () => {
  setToggle(!toggle);
};

/*****************************************************************/
  return (
    <View style={globalStyles.container}>

      {/*** Add User modal ***/}
      <Modal visible={modalOpenAdd} animationType='slide'>
        <View style={styles.modalContent}>
          <MaterialIcons 
          name='close'
          size={24}
          style={{...styles.modalToggle, ...styles.modalClose}}
          onPress={() => setModalOpenAdd(false)}
          />
          <View style={styles.container}>
            <Text style={globalStyles.titleText}> Add an Operator</Text>
            <AddUser users={users} setUsers={setUsers} setModalOpenAdd={setModalOpenAdd}/>
          </View>
        </View>
      </Modal>

      {/*<View style={styles.add_eye}>
        <MaterialIcons 
          name='add' 
          size={24} 
          style={styles.modalToggle}
          onPress={() => setModalOpenAdd(true)} 
        />
        <MaterialIcons 
        style={styles.modalToggle} 
        name="remove-red-eye" 
        size={24} 
        color='#555' 
        onPress={() => toggleFunction()}
        />
  </View>  */}
      
      <FlatList 
      data={users}
      renderItem={ ( {item} ) => (
          <TouchableOpacity onPress={() => navigation.navigate('OperatorsLog')}>
            <Card>
              <View style={styles.info}>
                <Text style={globalStyles.titleText}> Username:  </Text>
                <Text style={globalStyles.titleText}>{item.username}</Text>
              </View>
              <View style={styles.info}>
                <Text style={globalStyles.titleText}> Password:  </Text>
                <Text style={globalStyles.titleText} >
                      {toggle ? '***********': item.password  }</Text>                
              </View>            
            </Card>
          </TouchableOpacity>
      )}
      />
    </View>
  );
}

const styles=StyleSheet.create({
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
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 100,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  add_eye: {
    flexDirection: 'row',
    justifyContent:'space-evenly',
  },
})