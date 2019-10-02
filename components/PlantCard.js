import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Button, Icon, Card } from 'react-native-elements';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default function PlantCard(props) {
  toggleAlbum = (test) => {
    console.log(test);
  }
  return (
    <TouchableOpacity onPress={() => this.toggleAlbum("hi")} >
    <Card title={props.name} raised={true} containerStyle={{borderRadius: 12}}>
      <View style={{height:150, marginTop: 20}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image source={props.imageSource} style={styles.welcomeImage} />
        <Image source={props.imageSource} style={styles.welcomeImage} />
        <Image source={props.imageSource} style={styles.welcomeImage} />
      </ScrollView>
      </View>
      <Text style={{marginBottom: 5}}>{props.plantNote}</Text>
      <Button
          icon={<Icon name='add-circle-outline' />}
          raised={true}
          style={maxWidth = 1} />
    </Card>
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  welcomeImage: {
    width: 150,
    height: 120,
    resizeMode: 'contain',
    marginTop: 3,
    marginRight: -30,
  },
})