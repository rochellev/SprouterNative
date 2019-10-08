import React from 'react';
import {ConnectedRouter} from 'connected-react-router';
import {NativeRouter, Route} from 'react-router-native';
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'; 

const Router = ({history}) => (

    <ConnectedRouter history={history}>
      <Route path="/" component={HomeScreen} exact={true} />
      <Route path="/settings" component={SettingsScreen} />
    </ConnectedRouter>

);

export default Router;