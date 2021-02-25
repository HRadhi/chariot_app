import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import AddAdmin from '../screens/AddAdmin';
import Header from '../shared/header';

const screens= {
    AddAdmin:{
        screen: AddAdmin,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Make An Admin' navigation={navigation} />
            } 
        }
    },
}

// master stack navigator screens
const MakeAdminStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
      headerTintColor: '#555',
      headerStyle: { backgroundColor: '#98c1d9', height: 80 }
    }
});

export default MakeAdminStack;