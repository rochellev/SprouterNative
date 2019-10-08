import React from 'react';
import { Button, Icon } from 'react-native-elements';
import { routes } from '../constants/AppRoutes';

export const ToCameraButton = ({ history }) => {
  return (
    <Button onPress={() => {
      history.push({
        pathname: routes.CAMERA,
      });
    }} title="camera" icon={<Icon name='add-circle-outline' />} raised={true} />
  )
};

export const ToHomeButton = ({ history }) => {
  return (
    <Button onPress={() => {
      history.push({
        pathname: routes.HOME,
      });
    }} title="Go Home" />
  )
};

export const ToSettingsButton = ({ history }) => {
  return (
    <Button onPress={() => {
      history.push({
        pathname: routes.SETTINGS,
      });
    }} title="Go to settings" />
  )
};
