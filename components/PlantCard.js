import React from 'react';
import { Text, View } from 'react-native';
import { Button, Icon, Card } from 'react-native-elements';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default function PlantCard(props) {
  toggleAlbum = (test) => {
    console.log(test);
  }
  return (
    <TouchableOpacity onPress={() => this.toggleAlbum("hi")} >
    <Card title={props.name}>
      <ScrollView horizontal={true}>
        <View>
        </View>
      </ScrollView>
    </Card>
      
    </TouchableOpacity>
  );
}