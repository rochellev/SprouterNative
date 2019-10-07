import React from 'react';
import {ConnectedRouter} from 'connected-react-router';
import {NativeRouter, Route} from 'react-router-native';
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'; 

const Router = ({history}) => (
  <NativeRouter>
    <ConnectedRouter history={history}>
      <Route path="/" component={HomeScreen} exact={true} />
      <Route path="/settings" component={SettingsScreen} />
    </ConnectedRouter>
  </NativeRouter>
);

export default Router;