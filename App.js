import {useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

export default function App() {


   const openAuthSession= async () => {
    try {
      let result = await WebBrowser.openAuthSessionAsync(
        // We add `?` at the end of the URL since the test backend that is used
        // just appends `authToken=<token>` to the URL provided.
        `https://blogexpejs.herokuapp.com/test/?linkingUri=${Linking.createURL("/?")}`,Linking.createURL()
      );
      console.log(result);
      let redirectData;
      if (result.url) {
        redirectData = Linking.parse(result.url);
      }
    
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
       <Text onPress={openAuthSession}>Open</Text>
      <StatusBar style="auto" />

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
