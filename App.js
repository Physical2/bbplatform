import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './main/1_home';
const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '首页' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;