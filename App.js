import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SprouterHeader from './components/SprouterHeader';
import { Provider } from 'react-redux';
import Router from './routes';
import configureStore from './configureStore';

const { history, store } = configureStore();

const App = () => {
  return (
    <SafeAreaView>
      <SprouterHeader />
      <View style={styles.container}>
        <Provider store={store} >
          <Router history={history} />
        </Provider>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ffff',
  },
});

export default App;
