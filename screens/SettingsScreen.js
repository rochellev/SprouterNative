import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import PlantCard from '../components/PlantCard';

const SettingsScreen = ({ history }) => (
  <View>
    <Text>Hi Settings buddy</Text>
    <Button onPress={() => {
      history.push({
        pathname:'/',
      });
    }} title="Go Home" />
  </View>
);

export default SettingsScreen;