import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CameraScreen from '../screens/CameraScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Camera: CameraScreen,
  },
  {
    initialRouteName: 'Home',
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'MyPlants',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`ios-heart${focused ? '' : '-empty'}`}
    />
  ),
  tabBarOptions: {
    style: { backgroundColor: 'white', borderTopWidth: 0, shadowColor: 'black', shadowOffset: { width: 5, height: 3 }, shadowOpacity: 0.5, elevation: 10 }
  }
};

HomeStack.path = '';

const CameraStack = createStackNavigator(
  {
    Camera: CameraScreen,
  },
  config
);

CameraStack.navigationOptions = {
  tabBarLabel: 'Camera',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'ios-camera'} />
  ),
}

CameraStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

// the nav icons at the bottom
const tabNavigator = createBottomTabNavigator({
  HomeStack,
  CameraStack,
  SettingsStack,
});

tabNavigator.path = '';


// saw app containter export default createAppContainer(TabNavigator);
export default tabNavigator;
