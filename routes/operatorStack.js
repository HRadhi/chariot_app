import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import OperatorLogin from '../screens/operatorLogin';
import RemoteControl from '../screens/remoteControl';
import OperatorTasks from '../screens/operatorTasks';
import Header from '../shared/header';
import StackHeader from '../shared/stackHeader';

const screens= {
    OperatorLogin: {
        screen: OperatorLogin,
        navigationOptions: ({ navigation }) => {
            return {
              headerTitle: () => <Header title='Operator' navigation={navigation} />
            }
        }
    },
    OperatorTasks: {
        screen: OperatorTasks, 
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <StackHeader title='Tasks' navigation={navigation} />
            } 
        }
    },
    RemoteControl: {
        screen: RemoteControl, 
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <StackHeader title='Remote Control' navigation={navigation} />
            } 
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