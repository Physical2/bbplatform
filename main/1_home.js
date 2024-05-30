
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, View, Text, Button, ActivityIndicator, Image, StyleSheet, FlatList, ScrollView, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import { OUCWidgetPreviewScreen } from '../widget/WidgetPreview';
// import { FlatList, ScrollView } from 'react-native-gesture-handler';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <View>
                <Button
                    title='通知'
                    onPress={() => {
                        this.props.navigation.navigate("Example")
                    }}
                ></Button>
                <Text>主页</Text>
                <OUCWidgetPreviewScreen></OUCWidgetPreviewScreen>
            </View>
        );
    }
};

const styles = StyleSheet.create({

})