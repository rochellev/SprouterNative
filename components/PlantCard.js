import React from 'react';
import { Text } from 'react-native';
import { Card, Button, Icon, Image } from 'react-native-elements';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function PlantCard(props) {
  toggleAlbum = (test) => {
    console.log(test);
  }
  return (
    <TouchableOpacity onPress={() => this.toggleAlbum("hi")} >
      <Card title='plant' raised='true' image={props.imageSource}>
        <Text> {props.plantNote} </Text>
        <Button
          icon={<Icon name='add-circle-outline' />}
          raised={true}
          style={maxWidth = 1} />
      </Card>
    </TouchableOpacity>
  );
}