import { createStackNavigator } from 'react-navigation';
import LoginPage from './src/pages/LoginPage'

export default createStackNavigator({
  'Login': {
    screen: LoginPage,
    navigationOptions: {
      title: 'MySeries'
    }
  }
}, {
    navigationOptions: {
      title: 'Series',
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#000000'
      },
      headerTitleStyle: {
        color: '#ffffff',
        fontSize: 25,
        textAlign: "center",
        flex: 1
      }
    }
  })