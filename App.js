import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StackNav from './src/StackNavigator/StackNav';

export default class App extends React.Component {
  render() {
    return (
      <StackNav/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
