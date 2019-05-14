import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation'

import AuthLoading from '../screens/AuthLoading'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Home from '../screens/Home'
import { Examplemodal } from '../screens/Modals'

const AuthStack = createStackNavigator(
  {
    SignIn,
    SignUp,
  },
  {
    initialRouteName: 'SignIn',
    navigationOptions: {
      header: null,
    },
  },
)

const MainStack = createDrawerNavigator(
  {
    Home,
  },
  {
    initialRouteName: 'Home',
  },
)

const AppStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    Examplemodal: {
      screen: Examplemodal,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
)

const SwitchApp = createSwitchNavigator(
  {
    AuthLoading,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
)

const createRootNavigator = createAppContainer(SwitchApp)

export default createRootNavigator
