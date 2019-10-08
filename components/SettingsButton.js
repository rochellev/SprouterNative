import React from 'react';
import {Button} from 'react-native';

const SettingsButton = ({history}) => {
  return(
  <Button onPress={() => {
    history.push({
      pathname: '/settings',
    });
  }} title="Go to settings" />
  )
};

export default SettingsButton;
