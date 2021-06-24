
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Dimensions,
  SafeAreaView
} from "react-native";
import { WebView } from 'react-native-webview'
import Constants from 'expo-constants';

const { height, width } = Dimensions.get("window");
const testURI = "https://www.ironspringsroad.com/";


export default function App() {

  const [showWebView, setShowWebview] = React.useState(false);

  return (

    <SafeAreaView style={styles.container}>
        <WebView
          style={{ flex: 1, height: height, width: width }}
          containerStyle={{ flex: 1, height: height, width: width }}
          
          source={{ uri: testURI }}
          renderError={(error) => (
            <View style={{ flex: 1 }}><Text>{error}</Text></View>
          )}
          onError={syntheticEvent => {
            const { nativeEvent } = syntheticEvent;
            console.warn('WebView error: ', nativeEvent);
          }}
          onNavigatorStateChange={(event) => {
            if (event.url !== testURI) {
              this.webview.stopLoading();
              Linking.openURL(event.url);
            }
          }}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
