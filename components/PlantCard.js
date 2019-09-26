import React from 'react';
import { Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { setRecoveryProps } from 'expo/build/ErrorRecovery/ErrorRecovery';

export default function PlantCard(props) {
  return (
    <Card title='plant' raised='true' image={props.imageSource}>
      <Text>
        {props.plantNote}
            </Text>
      <Button
        icon={<Icon name='add-circle-outline' />}
        raised={true}
        style={maxWidth = 5}
      />
    </Card>
  );
}