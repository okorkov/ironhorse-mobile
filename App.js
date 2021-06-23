import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button, TextInput } from 'react-native';


export default function App() {

  const [email, onChangeEmail] = React.useState("charles@ironhorsestudio.net");
  const [password, onChangePassword] = React.useState(null);
  const [loggedIn, onChangeLoggedIn] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Log in to manage Ironhorsestudio.net</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
      />
      <Button
        title="Log In"
        color="#f194ff"
        onPress={() => alert('Button with adjusted color pressed')}
      />
      <StatusBar style="auto" />
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
  text: {
    color: 'black',
  },input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
  },
});
