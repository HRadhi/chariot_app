import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import * as firebase from 'firebase';

export default function StackHeader({ title, navigation }) {

  const Logout = () => {    
    firebase.auth().signOut().then(() => {
      console.log("You are Logged out");
      navigation.navigate('OperatorLogin');
    })
  }

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View>
        <Text style={styles.headerText}>         </Text>
      </View>
        <MaterialIcons 
        name='logout' 
        size={28} 
        onPress={Logout} 
        style={styles.iconLogout} 
        />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  iconLogout: {
    position: 'absolute',
    right: 5,
    color: '#333',
  }
});