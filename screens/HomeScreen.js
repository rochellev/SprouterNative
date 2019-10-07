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

const HomeScreen = ({ history }) => (
  <View>
    <Button onPress={() => {
      history.push({
        pathname: '/settings',
      });
    }} title="Go to settings" />
    <ScrollView
      scrollEventThrottle={16} >
      <View style={{ flex: 1 }}>
        <PlantCard name="Lemon Boy" imageSource={require('../assets/images/plants/lemon_flower.jpg')} plantNote="Lemon tree Bloomed!" />
        <PlantCard name="Money Boy" imageSource={require('../assets/images/plants/money_tree.jpg')} plantNote="Money Tree really growing fast" />
        <PlantCard name="Betty" imageSource={require('../assets/images/plants/white_flower.jpg')} plantNote="starting to turn a little purple" />
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSpace: {
    paddingTop: 60,
  },
});

export default HomeScreen;

