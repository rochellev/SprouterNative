import React from 'react';
import { Header } from 'react-native-elements';
import { Image, StyleSheet } from 'react-native';
import SettingsButton from './SettingsButton';

export default function SprouterHeader({history}) {
  return (
    <Header
      leftComponent={{ text: 'Sprouter', style: { color: '#fff', fontSize: 18 } }}
      centerComponent={<Image
        source={require('../assets/images/plant.png')} style={styles.welcomeImage} />} 
        containerStyle={{ paddingTop: 40, justifyContent: "space-around" }} 
        />
  )
}

const styles = StyleSheet.create({
  welcomeImage: {
    width: 100,
    height: 65,
    resizeMode: 'contain',
    marginLeft: -10,
    marginVertical: 3,
  },
});