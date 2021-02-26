import React, {useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base'; 
import io from 'socket.io-client';

export default function RemoteControl() {

const onForwardPress = () => {
  io().emit('direction', 'forward');
  console.log('on forward');
}
  return (
    <View style={styles.RemoteControl}>
      <Button style={{ marginTop: 30 }}
        full
        rounded
        active
        onPress={() => onForwardPress()}
      >
        <Text style={{color:'white'}}>Add</Text>
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