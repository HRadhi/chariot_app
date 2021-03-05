import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base'; 
import io from 'socket.io-client';

export default class RemoteControl extends Component {

  componentDidMount() {
    this.socket = io("http://192.168.1.18:3002");
    console.log('hey')    
  }

//Air cushion control
  onStartCushionPress(){
    this.socket.emit("direction", 'start air cushion');
  }

  onStopCushionPress(){
    this.socket.emit("direction", 'stop air cushion');
  }

//Robot control
  onCwPress(){
    this.socket.emit("direction", 'clock wise rotation');
  }

  onCCwPress(){
    this.socket.emit("direction", 'counter clock wise rotation');
  }

  onForwardPress(){
    this.socket.emit("direction", 'forward');
  }

  onStopRobotPress(){
    this.socket.emit("direction", 'stop robot');
  }

  onBackwardPress(){
    this.socket.emit("direction", 'backward');
  }

  onLeftPress(){
    this.socket.emit("direction", 'left');
  }

  onRightPress(){
    this.socket.emit("direction", 'right');
  }

  onRightTopPress(){
    this.socket.emit("direction", 'right top');
  }

  onRightDownPress(){
    this.socket.emit("direction", 'right down');
  }

  onLeftTopPress(){
    this.socket.emit("direction", 'left top');
  }

  onLeftDownPress(){
    this.socket.emit("direction", 'left down');
  }
  render() {
    return (
      <View style={{flex: 1}}>

      <View 
      style={{
        width: '100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        borderBottomWidth: 2,
        borderColor: '#98c1d9',
      }}>
        <Button style={{ marginTop: 10,marginBottom: 10, width:60, height: 60 }}
          full
          rounded
          success
          onPress={() => this.onStartCushionPress()}
        >
          <Icon name='power' />
        </Button>
        <Text note style={{ marginTop: 30, width: 80, color:'#98c1d9'}}>Air Cushion</Text>
        <Button style={{ marginTop: 10,marginBottom: 10, width:60, height: 60 }}
          full
          rounded
          danger
          onPress={() => this.onStopCushionPress()}
        >
          <Icon name='stop' />
        </Button>
      </View>


      <View style={styles.top_row2}>
        <Button style={{ marginTop: 10, width:60, height: 60 }}
          full
          rounded
          active
          onPress={() => this.onCCwPress()}
        >
          <Icon type="Entypo" name='ccw' />
        </Button>
        <Button style={{ marginTop: 10, width:60, height: 60 }}
          full
          rounded
          active
          onPress={() => this.onCwPress()}
        >
          <Icon type="Entypo" name='cw' />
        </Button>
      </View>

      <View style={styles.top_row1}>
        <Button style={{ marginTop: 20, width:60, height: 60 }}
          full
          rounded
          active
          onPress={() => this.onForwardPress()}
        >
          <Icon name='arrow-up' />
        </Button>
      </View>

      <View style={styles.top_row2}>
        <Button style={{ marginTop: 30, width:60, height: 60 }}
          full
          rounded
          active
          onPress={() => this.onLeftPress()}
        >
          <Icon name='arrow-back' />
        </Button>

        <Button style={{ marginTop: 30, width:60, height: 60 }}
          full
          rounded
          danger
          onPress={() => this.onStopRobotPress()}
        >
          <Icon type="FontAwesome" name='hand-stop-o' />
        </Button>

        <Button style={{ marginTop: 30, width:60, height: 60 }}
          full
          rounded
          active
          onPress={() => this.onRightPress()}
        >
          <Icon name='arrow-forward' />
        </Button>
      </View>

      <View style={styles.top_row3}>
        <Button style={{ marginTop: 30, width:60, height: 60 }}
          full
          rounded
          active
          onPress={() => this.onBackwardPress()}
        >
          <Icon name='arrow-down' />
        </Button>
      </View>

      <View style={styles.top_row5}>
        <Button style={{ marginTop: 50, width:60, height: 60 }}
          full
          rounded
          active
          onPress={() => this.onLeftTopPress()}
        >
          <Icon type="Feather" name='arrow-up-left' />
        </Button>
        <Button style={{ marginTop: 50, width:60, height: 60 }}
          full
          rounded
          acive
          onPress={() => this.onRightTopPress()}
        >
          <Icon type="Feather" name='arrow-up-right' />
        </Button>
      </View>

      <View style={styles.top_row6}>
        <Button style={{ marginTop: 70, width:60, height: 60 }}
          full
          rounded
          active
          onPress={() => this.onLeftDownPress()}
        >
          <Icon type="Feather" name='arrow-down-left' />
        </Button>
        <Button style={{ marginTop: 70, width:60, height: 60 }}
          full
          rounded
          acive
          onPress={() => this.onRightDownPress()}
        >
          <Icon type="Feather" name='arrow-down-right' />
        </Button>
      </View>

      </View>
  );
  }
}


const styles= StyleSheet.create({
  top_row1: {
    width: '100%',
    flexDirection:'row',
    justifyContent:'center'
  },
  top_row2: {
    width: '100%',
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  top_row3: {
    width: '100%',
    flexDirection:'row',
    justifyContent:'center'
  },
  top_row4: {
    width: '100%',
    flexDirection:'row',
    justifyContent:'space-evenly',
  },
  top_row5: {
    width: '100%',
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  top_row6: {
    width: '100%',
    flexDirection:'row',
    justifyContent:'space-evenly'
  }
})