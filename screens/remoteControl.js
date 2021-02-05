import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 

export default function RemoteControl() {
  return (
    <View style={styles.RemoteControl}>
      <View style={styles.leftPad}>
        <View style={styles.for_back}>
          <Entypo 
          name='arrow-with-circle-left'
          size={70}
          style={styles.backward}
          onPress={() => console.log('backward')}
          />
          <Entypo 
          name='arrow-with-circle-right'
          size={70}
          style={styles.forward}
          onPress={() => console.log('forward')}          
          />
        </View>

        <View style={styles.left_right}>
          <Entypo 
          name='arrow-with-circle-up'
          size={70}
          style={styles.left}
          onPress={() => console.log('left')}
          />
          <Entypo 
          name='arrow-with-circle-down'
          size={70}
          style={styles.right}
          onPress={() => console.log('right')}
          />
        </View>        
      </View>
          
      <View style={styles.centerPad}>
        <Feather 
        name='power'
        size={70}
        style={styles.start}
        onPress={() => console.log('start engine')}
        />
        <Feather 
        name='rotate-cw'
        size={70}
        style={styles.cw}
        onPress={() => console.log('cw')}
        />
        <Feather 
        name='rotate-ccw'
        size={70}
        style={styles.ccw}
        onPress={() => console.log('ccw')}
        />
      </View>

      <View style={styles.rightPad}>
        <Feather 
        name='arrow-down-right'
        size={90}
        style={styles.up_right}
        onPress={() => console.log('up right')}
        />
        <Feather 
        name='arrow-up-right'
        size={90}
        style={styles.up_left}
        onPress={() => console.log('up left')}
        />
        <Feather 
        name='arrow-up-left'
        size={90}
        style={styles.down_left}
        onPress={() => console.log('down left')}
        />
        <Feather 
        name='arrow-down-left'
        size={90}
        style={styles.down_right}
        onPress={() => console.log('down right')}
        />
      </View>
    </View>
);
}

const styles= StyleSheet.create({
  RemoteControl: {
    flex: 1,
    zIndex: 0
  },
  leftPad:{
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '37%',
    zIndex: 1
  },
  centerPad: {
    position: 'absolute',
    top: '37%',
    width: '100%',
    height: '25%',
    zIndex: 1
  },
  rightPad: {
    position: 'absolute',
    top: '62%',
    width: '100%',
    height: '45%',
    zIndex: 1
  },
  for_back : {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'space-around',
    alignItems: 'center',
    top: '17%',
  },
  forward: {
    width: 70,
    height: 70,
    color: '#444'
  },
  backward :{
    width: 70,
    height: 70,
    color: '#444'
  }, 
  left_right: {
    flex: 1,
    top: '-25%',
    left: '25%',
    width: '50%',
    height: 500,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  left: {
    width: 70,
    height: 70,
    position:'absolute',
    top: '-40%',
    color: '#444'
  },
  right: {
    width: 70,
    height: 70,
    position:'absolute',
    top: '90%',
    color: '#444'
  },
  up_right: {    
    width: 70,
    height: 70,
    color: '#444',
    top: '55%',
    left: '60%'
  },
  up_left: {      
    width: 70,
    height: 70, 
    color: '#444',
    top: '-25%',
    left: '60%'
  },
  down_left: { 
    width: 70,
    height: 70,         
    color: '#444',
    top: '-55%',
    left: '10%',
    backgroundColor:'green',
  },
  down_right: {     
    width: 70,
    height: 70,     
    color: '#444',
    top: '-33%',
    left: '10%'
  },
  start: {
    transform: [{rotate: '90deg'}],
    top: '120%',
    right: '-30%', 
    color: 'green'
  }, 
  cw : {
    width: 70,
    height: 70,
    color: 'blue',
    top: '35%',
    left: '5%',
    backgroundColor:'#222',
    transform: [{rotate: '90deg'}]
  }, 
  ccw: {
    width: 70,
    height: 70,
    color: 'red',    
    backgroundColor:'green',
    transform: [{rotate: '135deg'}]
  }
})