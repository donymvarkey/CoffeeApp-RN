/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import Routes from './src/Routes';
function App(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <Routes />
    </View>
  );
}

export default App;
