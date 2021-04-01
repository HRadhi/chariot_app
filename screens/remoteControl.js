import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Button, Icon } from 'native-base'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import io from 'socket.io-client';
import uuid from 'uuid';


export default class RemoteControl extends Component {

  constructor(props) {
    super (props);
    this.state = {
      commands : [],
      test : ["hey1", "hey2"]
    }
  }

  GetTime() { 
    // Creating variables to hold time.
    var date, TimeType, hour, minutes, seconds, fullTime; 
    // Creating Date() function object.
    date = new Date(); 
    // Getting current hour from Date object.
    hour = date.getHours();  
    // Checking if the Hour is less than equals to 11 then Set the Time format as AM.
    if(hour <= 11){ 
      TimeType = 'AM'; 
    }
    else{ 
      // If the Hour is Not less than equals to 11 then Set the Time format as PM.
      TimeType = 'PM'; 
    } 
    // IF current hour is grater than 12 then minus 12 from current hour to make it in 12 Hours Format.
    if( hour > 12 )
    {
      hour = hour - 12;
    } 
    // If hour value is 0 then by default set its value to 12, because 24 means 0 in 24 hours time format. 
    if( hour == 0 )
    {
        hour = 12;
    }  
    // Getting the current minutes from date object.
    minutes = date.getMinutes(); 
    // Checking if the minutes value is less then 10 then add 0 before minutes.
    if(minutes < 10)
    {
      minutes = '0' + minutes.toString();
    } 
    //Getting current seconds from date object.
    seconds = date.getSeconds(); 
    // If seconds value is less than 10 then add 0 before seconds.
    if(seconds < 10)
    {
      seconds = '0' + seconds.toString();
    } 
    // Adding all the variables in fullTime variable.
    fullTime = hour.toString() + ':' + minutes.toString() + ':' + seconds.toString() + ' ' + TimeType.toString();
    // Setting up fullTime variable in State.
    return fullTime;
  }

  componentDidMount() {
    this.socket = io("http://192.168.1.18:3002");  
  }

//Air cushion control
  onStartCushionPress(){
    this.socket.emit("direction", 'start air cushion');
    this.setState(prevState => ({
      commands: [...prevState.commands, {command: 'Start air cushion', time: this.GetTime(), id: uuid.v4()}]
    }))  
  }

  onStopCushionPress(){
    this.socket.emit("direction", 'stop air cushion');
    this.setState(prevState => ({
      commands: [...prevState.commands, {command: 'Stop air cushion', time: this.GetTime(), id: uuid.v4()}]
    }))
  }

//Robot control
  onCwPress(){
    this.socket.emit("direction", 'clock wise rotation');
    this.setState(prevState => ({
      commands: [...prevState.commands, {command: 'CW', time: this.GetTime(), id: uuid.v4()}]
    }))
  }

  onCCwPress(){
    this.socket.emit("direction", 'counter clock wise rotation');
    this.setState(prevState => ({
      commands: [...prevState.commands, {command: 'CCW', time: this.GetTime(), id: uuid.v4()}]
    }))
  }

  onForwardPress(){
    this.socket.emit("direction", 'forward');
    this.setState(prevState => ({
      commands: [...prevState.commands, {command: 'Forward', time: this.GetTime(), id: uuid.v4()}]
    }))
  }

  onStopRobotPress(){
    this.socket.emit("direction", 'stop robot');
    this.setState(prevState => ({
      commands: [...prevState.commands, {command: 'Stop robot', time: this.GetTime(), id: uuid.v4()}]
    }))
  }

  onBackwardPress(){
    this.socket.emit("direction", 'backward');
    this.setState(prevState => ({
      commands: [...prevState.commands, {command: 'Backward', time: this.GetTime(), id: uuid.v4()}]
    }))
  }

  onLeftPress(){
    this.socket.emit("direction", 'left');
    this.setState(prevState => ({
      commands: [...prevState.commands, {command: 'Left', time: this.GetTime(), id: uuid.v4()}]
    }))
  }

  onRightPress(){
    this.socket.emit("direction", 'right');
    this.setState(prevState => ({
      commands: [...prevState.commands, {command: 'Right', time: this.GetTime(), id: uuid.v4()}]
    }))
  }

  onRightTopPress(){
    this.socket.emit("direction", 'right top');
    this.setState(prevState => ({
      commands: [...prevState.commands, {command: 'Right forward', time: this.GetTime(), id: uuid.v4()}]
    }))
  }

  onRightDownPress(){
    this.socket.emit("direction", 'right down');
    this.setState(prevState => ({
      commands: [...prevState.commands, {command: 'Right backward', time: this.GetTime(), id: uuid.v4()}]
    }))
  }

  onLeftTopPress(){
    this.socket.emit("direction", 'left top');
    this.setState(prevState => ({
      commands: [...prevState.commands, {command: 'Left forward', time: this.GetTime(), id: uuid.v4()}]
    }))
  }

  onLeftDownPress(){
    this.socket.emit("direction", 'left down');
    this.setState(prevState => ({
      commands: [...prevState.commands, {command: 'Left backward', time: this.GetTime(), id: uuid.v4()}]
    }))
  }


  render() {
    const { navigation } = this.props;
    const activeUser = navigation.getParam('activeUser');
    return (
      <View style={{flex: 1}}>
      <View
      style={{
        width: '100%',
        height: 32,
        flexDirection:'row',
        backgroundColor: '#f8f8f8',
        shadowColor: '#98c1d9',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1,
        elevation: 1,
      }}>
        <Text note 
        style={{ 
          marginTop: 5,
          marginBottom: 3, 
          color:'#cdcdcd',
          fontSize: 16,
          fontStyle: 'italic',
          fontWeight: 'normal'
          }}  
        > Operator: </Text>
        <Text note 
        style={{ 
          marginTop: 5,
          marginBottom: 3, 
          width: 200, 
          color:'#98c1d9',
          fontSize: 16,
          fontStyle: 'italic',
          fontWeight: 'bold'
          }}     
        >{activeUser}</Text>

        <View
        style={{ 
          position:'absolute',
          right: 5,
          flexDirection:'row',
          padding:0
          }}  >
          <Text note 
          style={{ 
            padding:0, 
            marginTop: 5, 
            marginBottom: 3, 
            marginRight: 10, 
            color:'#CDCDCD', 
            fontSize: 14 }}>
            
            {!this.socket ? 'Not Connected' : 
            'Connected'}
          </Text>
          <Text note style={{ padding:0, marginTop: 5, marginBottom: 3, marginRight:0, color:'#CDCDCD', fontSize: 10 }}>80%</Text>
          <MaterialCommunityIcons 
          name='battery-80'
          size={20}
          style={{color:'#CDCDCD', marginTop: 5, marginLeft: 0, padding:0}}
          />
        </View>
      </View>

      <View 
      style={{
        width: '100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        //borderBottomWidth: 2,
        //borderTopWidth: 2,
      }}>
        <Button style={{ marginTop: 10,marginBottom: 0, width:55, height: 55 }}
          full
          rounded
          success
          onPress={() => this.onStartCushionPress()}
        >
          <Icon name='power' />
        </Button>
        <Text note style={{ marginTop: 30, width: 80, color:'#98c1d9'}}>Air Cushion</Text>
        <Button style={{ marginTop: 10,marginBottom: 0, width:55, height: 55 }}
          full
          rounded
          danger
          onPress={() => this.onStopCushionPress()}
        >
          <Icon name='stop' />
        </Button>
      </View>


      <View style={styles.top_row}>
        <Button style={{ marginTop: 10, width:55, height: 55 }}
          full
          rounded
          warning
          onPress={() => this.onCCwPress()}
        >
          <Icon type="Entypo" name='ccw' />
        </Button>
        <Button style={{ marginTop: 10, width:55, height: 55 }}
          full
          rounded
          warning
          onPress={() => this.onCwPress()}
        >
          <Icon type="Entypo" name='cw' />
        </Button>
      </View>

      <View style={styles.top_row}>
        
        <Button style={{ marginTop: 15, width:55, height: 55 }}
          full
          rounded
          active
          onPress={() => this.onLeftTopPress()}
        >
          <Icon type="Feather" name='arrow-up-left' />
        </Button>

        <Button style={{ marginTop: 15, width:55, height: 55 }}
          full
          rounded
          active
          onPress={() => this.onForwardPress()}
        >
          <Icon name='arrow-up' />
        </Button>
        
        <Button style={{ marginTop: 15, width:55, height: 55 }}
          full
          rounded
          acive
          onPress={() => this.onRightTopPress()}
        >
          <Icon type="Feather" name='arrow-up-right' />
        </Button>

      </View>

      <View style={styles.top_row}>
        <Button style={{ marginTop: 30, width:55, height: 55 }}
          full
          rounded
          active
          onPress={() => this.onLeftPress()}
        >
          <Icon name='arrow-back' />
        </Button>

        <Button style={{ marginTop: 30, width:55, height: 55 }}
          full
          rounded
          danger
          onPress={() => this.onStopRobotPress()}
        >
          <Icon type="FontAwesome" name='hand-stop-o' />
        </Button>

        <Button style={{ marginTop: 30, width:55, height: 55 }}
          full
          rounded
          active
          onPress={() => this.onRightPress()}
        >
          <Icon name='arrow-forward' />
        </Button>
      </View>

      <View style={styles.top_row}>

        <Button style={{ marginTop: 30, width:55, height: 55 }}
          full
          rounded
          active
          onPress={() => this.onLeftDownPress()}
        >
          <Icon type="Feather" name='arrow-down-left' />
        </Button>
        <Button style={{ marginTop: 30, width:55, height: 55 }}
          full
          rounded
          active
          onPress={() => this.onBackwardPress()}
        >
          <Icon name='arrow-down' />
        </Button>
        <Button style={{ marginTop: 30, width:55, height: 55 }}
          full
          rounded
          acive
          onPress={() => this.onRightDownPress()}
        >
          <Icon type="Feather" name='arrow-down-right' />
        </Button>

      </View>

      <View style={{ marginTop: 7,margin: 5, borderRadius:3, backgroundColor: '#999' }}>
        <Text note 
        style={{ 
          marginTop: 3,
          marginBottom: 3, 
          color:'white',
          fontSize: 16,
          fontStyle: 'italic',
          fontWeight: 'normal'
          }}
          > Warnings: </Text>
      </View>
      <View style={{ maxHeight: '37%' }}>
        <TouchableWithoutFeedback>
          <FlatList
            data={this.state.commands}
            renderItem={({ item }) => (
              <Text 
              style={{
                marginLeft: 5, 
                marginRight: 5, 
                borderRadius:0, 
                backgroundColor: '#999',
                color:'white',
              }}
              >{item.time}:  {item.command}</Text>
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={{
            flexGrow: 0,
            }}
          />
        </TouchableWithoutFeedback> 
      </View>
      </View>
  );
  }
}


const styles= StyleSheet.create({
  top_row: {    
    width: '100%',
    width: '100%',
    flexDirection:'row',
    justifyContent:'space-evenly'
  }
})