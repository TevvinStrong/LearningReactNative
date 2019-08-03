import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Greeting } from './Components/Names/names.js';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, World!</Text>
        <Greeting name={'Tevvin'} />
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
