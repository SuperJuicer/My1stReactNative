import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Hello, React Native!</Text>
      </View>
      <View style={styles.body}>
        <Text>This is my cool app.</Text>
        <Text>It has Text components.</Text>
        <Text>The text components have a high contrast color scheme.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 2
  },
  text: {
    color: '#000',
    fontWeight: '800',
    fontSize: 24
  },
  header: {
    backgroundColor: '#ffc0cb',
    padding: 20,
    borderColor: '#000',
    borderWidth: 1
  },
  body: {
    backgroundColor: '#ff0',
    padding: 20,
    borderColor: '#000',
    borderWidth: 1,
    fontSize: 18,
    fontWeight: '400'
  }
});
