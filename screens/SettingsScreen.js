import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import PlantCard from '../components/PlantCard';
import { ToHomeButton } from '../components/NavigationButtons';

const SettingsScreen = ({ history }) => {
  return(
  <View>
    <Text>Hi Settings buddy</Text>
    <ToHomeButton history={history} />
  </View>
  )
};

export default SettingsScreen;