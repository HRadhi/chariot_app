import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import MasterLogin from '../screens/masterLogin';
import OperatorsLog from '../screens/operatorsLog'
import OperatorsManager from '../screens/operatorsManager';
import Header from '../shared/header';
import StackHeader from '../shared/stackHeader';

const screens= {
    MasterLogin:{
        screen: MasterLogin,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Master' navigation={navigation} />
            } 
        }
    },
    OperatorsManager: {
        screen: OperatorsManager,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <StackHeader title='Operators Manager' navigation={navigation} />
            } 
        }
    },
    OperatorsLog: {
        screen: OperatorsLog, 
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <StackHeader title='Logs' navigation={navigation} />
            } 
        }
    }
}

// master stack navigator screens
const MasterStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
      headerTintColor: '#555',
      headerStyle: { backgroundColor: '#98c1d9', height: 80 }
    }
});

export default MasterStack;