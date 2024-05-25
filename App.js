import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from './main/1_home';
// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// function HomeTabs() {
//   // const { username, password } = route.params;
//   return (
//     <Tab.Navigator
//       initialRouteName='Home'
//     >
//       <Tab.Screen name="Home" component={HomeScreen} options={{ title: '首页' }} screenOptions={{ headerShown: false }} />
//       {/* <Tab.Screen name="Classification" component={ClassificationScreen} options={{ title: '分类', headerShown: false }} initialParams={{ username, password }} /> */}
//       {/* <Tab.Screen name="Bookrak" component={BookrakScreen} options={{ title: '书架' }} initialParams={{ username, password }} /> */}
//       {/* <Tab.Screen name="UserInfo" component={UserInfoScreen} options={{ title: '我的' }} initialParams={{ username, password }} /> */}
//     </Tab.Navigator>
//   )
// }

// function App_1() {

//   return (
//     <Stack.Navigator initialRouteName="IT_novel">
//       {/* <Stack.Screen name="PasswordLogin" component={PasswordLoginScreen} options={{ title: '密码登录' }} /> */}
//       {/* <Stack.Screen name="Login" component={LoginScreen} options={{ title: '登录' }} /> */}
//       {/* <Stack.Screen name="Register" component={RegisterScreen} options={{ title: '注册' }} /> */}
//       <Stack.Screen name="bb平台" component={HomeTabs} screenOptions={{ headerShown: false }} />
//       <Stack.Screen name="Details" component={DetailsScreen} />
//     </Stack.Navigator>

//   );
// }

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