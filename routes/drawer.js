import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import OperatorStack from './operatorStack';
import MasterStack from './masterStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Operator: {
    screen: OperatorStack,
  },
  Master: {
    screen: MasterStack,
  },
});

export default createAppContainer(RootDrawerNavigator);