import React from 'react';
import { Header } from 'react-native-elements';
import {Image, StyleSheet} from 'react-native';
export default function SprouterHeader(){
  return(
    <Header
    leftComponent={{ text: 'Sprouter', style: { color: '#fff', fontSize:18 } }}
    centerComponent={<Image
      source={require('../assets/images/plant.png')} style={styles.welcomeImage}
      />}
    containerStyle={{justifyContent: 'space-around', paddingTop: 15, marginTop: 25}} />
  )
}

const styles = StyleSheet.create({
  welcomeImage: {
    width: 100,
    height: 70,
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 25,
    marginLeft: -10,
    paddingBottom: 2,
  },
});