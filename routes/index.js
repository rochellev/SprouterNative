import React from 'react';
import {ConnectedRouter} from 'connected-react-router';
import {NativeRouter, Route} from 'react-router-native';
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen';
import CameraScreen from '../screens/CameraScreen';

const routes = {
  HOME : '/',
  SETTINGS : '/settings',
  CAMERA : '/camera'
}

const Router = ({history}) => { 
return(
    <ConnectedRouter history={history}>
      <Route path={routes.HOME} component={HomeScreen} exact={true} />
      <Route path={routes.SETTINGS} component={SettingsScreen} />
      <Route path={routes.CAMERA} component={CameraScreen} />
    </ConnectedRouter>
)
};

export default Router;