import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import OperatorStack from './operatorStack';
import MasterStack from './masterStack';
import MakeAdminStack from './makeAdmin'

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Operator: {
    screen: OperatorStack,
  },
  Master: {
    screen: MasterStack,
  },
  MakeAdmin: {
    screen: MakeAdminStack,
  }
});

export default createAppContainer(RootDrawerNavigator);