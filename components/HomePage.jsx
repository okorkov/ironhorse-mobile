import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, TextInput } from 'react-native';
import axios from 'axios';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default HomePage;
