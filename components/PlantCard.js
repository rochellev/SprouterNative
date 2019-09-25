import React from 'react';
import { Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

export default function PlantCard() {
  return (
    <Card title='plant' raised='true' image={require('../assets/images/plant.png')}>
      <Text>
        something about the text
            </Text>
      <Button
        icon={<Icon name='add-circle-outline' />}
        raised={true}
        style={maxWidth = 5}
      />
    </Card>
  );
}