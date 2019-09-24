import React from 'react';
import { Text } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'

export default function PlantCard(){
    return(
        <Card title='plant' image={require('../assets/images/plant.png')}>
            <Text>
                something about the text
            </Text>
            <Button 
                icon={<Icon name='add'/>}
            />
        </Card>
    );
}