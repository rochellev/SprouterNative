import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
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
import { ToSettingsButton } from '../components/NavigationButtons';

import { ToCameraButton } from '../components/NavigationButtons';

const plants = [
  {
    name: "Lemon Boy",
    image: require("../assets/images/plants/lemon_flower.jpg"),
    note: "Lemon tree bloomed!!!!"
  },
  {
    name: "Money Boy",
    image: require("../assets/images/plants/money_tree.jpg"),
    note: "Money Tree really growing fast"
  },
  {
    name: "Betty",
    image: require("../assets/images/plants/white_flower.jpg"),
    note: "Starting to turn a little purple"
  },
  {
    name: "Don",
    image: require("../assets/images/plants/lady.jpg"),
    note: "Lady still doing well"
  }
]
const cards = plants.map((plant, idx) => <PlantCard key={idx} name={plant.name} imageSource={plant.image} plantNote={plant.note} />, []);

class HomeScreen extends React.Component {
  render(){
  return (
    <View>
      <ScrollView
        scrollEventThrottle={16} >
        {cards}
      </ScrollView>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;

