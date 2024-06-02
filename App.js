import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import RegisterScreen from './main/0_register';
import LoginScreen from './main/0_login';
import HomeScreen from './main/1_home';
import NoticeScreen from './main/notice_example';
import MailScreen from './main/mail_connect';
import DetailScreen from './main/detail';

const Stack = createNativeStackNavigator();


function App({ route }) {
  // const { username } = route.params;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        {/* <Stack.Screen name="Register" component={RegisterScreen} options={{ title: '注册' }} /> */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: '登录', headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '首页' }} />
        <Stack.Screen name="Example" component={NoticeScreen} options={{ title: "样例" }} />
        <Stack.Screen name="Mail" component={MailScreen} options={{ title: "邮箱绑定" }} />
        <Stack.Screen name="detail" component={DetailScreen} options={{title:'详情'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;