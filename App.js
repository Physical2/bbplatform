import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './main/App';
import DetailsScreen from './main/News'
import CommentsScreen from './main/Comments'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Stack = createNativeStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: 0
    };
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: '知乎日报', headerTintColor: 'blue' }} />
          <Stack.Screen name="Details" component={DetailsScreen} options={({ route, navigation }) => ({
            title: route.params.name, headerRight: () => {
              const { id } = route.params;
              const url = `https://news-at.zhihu.com/api/3/story-extra/${id}`;
              fetch(url)
                .then((response) => response.json())
                .then((json) => {
                  this.setState({ comment: json.comments })
                })
                .catch((error) => console.error(error));
              return (
                <TouchableOpacity onPress={() => {
                  navigation.navigate('Comments', {
                    id: route.params.id
                  })
                }}>
                  <Ionicons name={'chatbox-outline'} style={[styles.ioni]} size={26} />
                  <View style={{ alignItems: 'center' }}>
                    <Text>{this.state.comment}</Text>
                  </View>
                </TouchableOpacity>
              )
            }
          })} />
          <Stack.Screen name="Comments" component={CommentsScreen} options={{ title: '评论' }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
const styles = StyleSheet.create({
  ioni: {
    width: 30,
    height: 30
  }
})
