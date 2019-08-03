import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './Components/Names/names.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Greeting name='Tevvin' />
      <Greeting name='Sean' />
      <Greeting name='Floyd' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
