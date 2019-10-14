import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen  from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import CameraScreen  from './screens/CameraScreen';


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
    Camera: CameraScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      }
    }
  }
);

const AppContanter = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContanter />;
  }
}