
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, View, Text, Button, ActivityIndicator, Image, StyleSheet, FlatList, ScrollView, Dimensions, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import { OUCWidgetPreviewScreen } from '../widget/WidgetPreview';
// import { FlatList, ScrollView } from 'react-native-gesture-handler';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '123',

        }
    }

    logOut = () => {
        Alert.alert(
            "Confirm",
            "确认退出登录？",
            [
                {
                    text: "No",
                    onPress: () => console.log("Cancel Pressed"),
                    // style: "cancel"
                },
                {
                    text: "Yes",
                    onPress: () => {
                        // 处理退出登录逻辑
                        console.log("Logged out");
                        // 跳转到登录页
                        this.props.navigation.navigate('Login');
                    }
                }
            ]
        );
    }
    render() {
        const { username } = this.state;
        return (
            <View>
                <View style={styles.head}>
                    <Text>作业清单</Text>
                    <TouchableOpacity style={styles.userInfo} onPress={this.logOut}>
                        <Text style={styles.userInfoText}>{username}同学，你好！</Text>
                    </TouchableOpacity>

                </View>
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
    head: {
        flexDirection: 'row',
        marginLeft: Dimensions.get('screen').width / 20,
    },
    userInfo: {
        marginLeft: Dimensions.get('screen').width / 2,
    },
})