import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { OUCWidgetPreviewScreen } from '../widget/WidgetPreview';
import { withNavigation } from 'react-navigation';



export default class LoginScreen extends Component {
    constructor() {
        super()
        this.state = {
            invisible: true,

            username: '123',
            password: '123',
            token: '',

            refresh: '',
            access: ''
        }
    }

    showDetails = () => {
        Alert.alert(
            "关于我们",
            "爱特工作室app部欢迎你的加入~",
            [
                // {
                //     text: "返回",
                //     onPress: () => console.log("Cancel Pressed"),
                //     // style: "cancel"
                // },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }

    handleLogin = () => {
        const { username, password } = this.state;
        if (username === '123' && password === '123') {
            this.props.navigation.navigate('Home', { username, password });
        }

        // // console.log('handleLogin:', username, password);

        // var myHeaders = new Headers();
        // myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
        // myHeaders.append("Content-Type", "application/json");

        // var raw = JSON.stringify({
        //     "username": username,
        //     "password": password,

        // });

        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: 'follow'
        // };

        // fetch("http://124.70.57.215:8000/token-auth/", requestOptions)
        //     .then(response => {
        //         if (response.status === 200) {
        //             return response.json();
        //         } else {
        //             Alert.alert('用户账号密码输入错误！');
        //             throw new Error('Failed to login');
        //         }
        //     })
        //     .then(data => {
        //         this.props.navigation.navigate('IT_novel', { username, password });
        //     })
    }

    render() {
        const { username, password } = this.state;
        return (
            // <View>
            //     <Button
            //         title='通知'
            //         onPress={() => {
            //             this.props.navigation.navigate("Example")
            //         }}
            //     ></Button>
            //     <Button
            //         title='临时跳转'
            //         onPress={() => {
            //             this.props.navigation.navigate("Home")
            //         }}
            //     ></Button>
            //     <Text>登录</Text>
            // </View>
            <View style={styles.container}>

                <View style={[styles.title]}>
                    <Text style={[styles.titleText]}>
                        欢 迎 使 用 bb 平 台
                    </Text>
                </View>
                <View style={[styles.allInput]}>
                    <View style={[styles.nameView]}>
                        <TextInput
                            style={[styles.nameInput]}
                            placeholder='用户名'
                            value={username}
                            onChangeText={(username) => { this.setState({ username }) }}
                        />
                    </View>
                    <View style={[styles.pswView]}>
                        <TextInput
                            placeholder='密码'
                            value={password}
                            style={[styles.pswInput]}
                            secureTextEntry={this.state.invisible}
                            onChangeText={(password) => { this.setState({ password }) }}
                        />
                        <TouchableOpacity onPress={() => { this.setState({ invisible: !invisible }) }}>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.bottomButtons]}>
                    {/* <TouchableOpacity onPress={() => { this.props.navigation.navigate('Register') }} style={[styles.register]}>
                        <View style={[styles.registerView]}>
                            <Text style={[styles.registerText]}>
                                注册
                            </Text>
                        </View>
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={this.showDetails} style={[styles.detail]}>
                        <View style={[styles.detailView]}>
                            <Text style={[styles.detailText]}>
                                关 于 我 们
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.handleLogin} style={[styles.login]}>
                        <View style={[styles.loginView]}>
                            <Text style={[styles.loginText]}>
                                登 录
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height / 2,
        marginLeft: Dimensions.get('screen').width / 40,
        marginRight: Dimensions.get('screen').width / 40,
        marginTop: Dimensions.get('screen').width / 4,
        // marginBottom: Dimensions.get('screen').width / 9,
        borderColor: 'gray',
        // borderWidth: 1,
    },
    title: {
        height: Dimensions.get('screen').height / 10,
        width: Dimensions.get('screen').width / 1.2,
        backgroundColor: '#04132c',
        borderRadius: 20,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    titleText: {
        color: 'white',
        fontSize: 30,
        lineHeight: Dimensions.get('screen').height / 10,
        // marginLeft: Dimensions.get('screen').height / 20,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    allInput: {
        marginTop: Dimensions.get('screen').width / 10,
        marginLeft: Dimensions.get('screen').width / 20,
        marginRight: Dimensions.get('screen').width / 20,
        width: Dimensions.get('screen').width / 1.5,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    nameView: {
        marginTop: Dimensions.get('screen').height / 20,
    },
    nameInput: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20, // 圆角边框
    },
    pswView: {
        marginTop: Dimensions.get('screen').height / 30,
    },
    pswInput: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20, // 圆角边框
    },
    bottomButtons: {
        // marginTop: Dimensions.get('screen').width / 8,
        flexDirection: 'row',
        marginTop: Dimensions.get('screen').width / 7,
        width: Dimensions.get('screen').width / 1.2,
    },
    // register: {
    //     backgroundColor: '#04132c',
    //     width: Dimensions.get('screen').width / 8,
    //     height: Dimensions.get('screen').width / 10,
    //     marginLeft: Dimensions.get('screen').width / 5,

    // },
    // registerText: {
    //     fontSize: 17,
    //     color: 'white'
    // },
    detail: {
        backgroundColor: '#04132c',
        width: Dimensions.get('screen').width / 3,
        height: Dimensions.get('screen').width / 9,
        borderRadius: 15,
        marginLeft: Dimensions.get('screen').width / 9,
    },
    detailText: {
        fontSize: 18,
        color: 'white',
        lineHeight: Dimensions.get('screen').width / 9,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    login: {
        backgroundColor: '#04132c',
        // color: 'white',
        width: Dimensions.get('screen').width / 3,
        height: Dimensions.get('screen').width / 9,
        borderRadius: 15,
        marginLeft: Dimensions.get('screen').width / 10,
        // marginLeft: Dimensions.get('screen').width / 3,
        // marginTop: Dimensions.get('screen').width / 8,
        // marginLeft: Dimensions.get('screen').width / 3,
        // marginRight: 'auto'
    },
    loginText: {
        fontSize: 18,
        color: 'white',
        lineHeight: Dimensions.get('screen').width / 9,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
})