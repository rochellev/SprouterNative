import React from 'react';
import { Button } from 'react-native';
import { routes } from '../constants/AppRoutes';


const SettingsButton = ({ history }) => {
  return (
    <Button onPress={() => {
      history.push({
        pathname: routes.SETTINGS,
      });
    }} title="Go to settings" />
  )
};

export default SettingsButton;
