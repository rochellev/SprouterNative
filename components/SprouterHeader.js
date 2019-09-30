import React from 'react';
import { Header } from 'react-native-elements';
import {Image, StyleSheet} from 'react-native';
export default function SprouterHeader(){
  return(
    <Header
    leftComponent={{ text: 'Sprouter', style: { color: '#fff' } }}
    centerComponent={<Image
      source={require('../assets/images/plant.png')} style={styles.welcomeImage}
      />}
    containerStyle={{justifyContent: 'space-around'}} />
  )
}

const styles = StyleSheet.create({
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: -10,
    paddingVertical: 5,
  },
});