import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import RegisterScreen from './main/0_register';
import LoginScreen from './main/0_login';
import HomeScreen from './main/1_home';
import NoticeScreen from './main/notice_example';

const Stack = createNativeStackNavigator();


function App({ route }) {
  // const { username } = route.params;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        {/* <Stack.Screen name="Register" component={RegisterScreen} options={{ title: '注册' }} /> */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: '登录' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '首页' }} />
        <Stack.Screen name="Example" component={NoticeScreen} options={{ title: "样例" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;