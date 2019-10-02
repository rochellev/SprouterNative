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
 
    <Card title={props.name} raised={true} containerStyle={{borderRadius: 12}}>
      <View style={{height:200, marginVertical: 10}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity onPress={() => this.toggleAlbum("hi")} >
        <Image source={props.imageSource} style={styles.plantPhoto} />
        </TouchableOpacity>
        <Image source={props.imageSource} style={styles.plantPhoto} />
        <Image source={props.imageSource} style={styles.plantPhoto} />
        
      </ScrollView>
      </View>
      <Text style={{marginBottom: 5}}>{props.plantNote}</Text>
      <Button
          icon={<Icon name='add-circle-outline' />}
          raised={true}
          style={maxWidth = 1} />
    </Card>
  );
}

const styles = StyleSheet.create({
  plantPhoto: {
    width: 180,
    height: 200,
    resizeMode: 'contain',
    marginTop: 3,
    marginBottom: 3,
    marginLeft: -5,
  },
})