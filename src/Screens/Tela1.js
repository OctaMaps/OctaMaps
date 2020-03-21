import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Tela1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>tela  asssda s1</Text>
      </View>
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