import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import OperatorLogin from '../screens/operatorLogin';
import RemoteControl from '../screens/remoteControl';
import Header from '../shared/header'

const screens= {
    OperatorLogin: {
        screen: OperatorLogin,
        navigationOptions: ({ navigation }) => {
            return {
              headerTitle: () => <Header title='Operator' navigation={navigation} />
            }
        }
    },
    RemoteControl: {
        screen: RemoteControl, 
        navigationOptions: {
            title: 'Remote Control'
        }
    }
};

// operator stack navigator screens
const OperatorStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
      headerTintColor: '#eee',
      headerStyle: { backgroundColor: '#98c1d9', height: 80 }
    }
});

export default OperatorStack;