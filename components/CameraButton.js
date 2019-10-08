import React from 'react';
import {Button} from 'react-native';
import {routes} from '../constants/AppRoutes';

const CameraButton = ({history}) => {
  return(
  <Button onPress={() => {
    history.push({
      pathname: routes.CAMERA,
    });
  }} title="camera" />
  )
};

export default CameraButton;
