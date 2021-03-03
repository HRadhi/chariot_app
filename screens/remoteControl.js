import React, {useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base'; 
import io from 'socket.io';

export default function RemoteControl() {

const socket = io.connect('http://localhost:5000');

const onForwardPress = () => {
  socket.emit('direction', 'forward');
}
  return (
    <View style={styles.RemoteControl}>
      <Button style={{ marginTop: 30 }}
        full
        rounded
        active
        onPress={() => onForwardPress()}
      >
        <Text style={{color:'white'}}>Forward</Text>
      </Button>
    </View>
);
}

const styles= StyleSheet.create({
  RemoteControl: {
    flex: 1,
    zIndex: 0
  }
})