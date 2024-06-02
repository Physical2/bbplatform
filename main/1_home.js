
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
            list:[
                {
                    "name": "第一章作业",
                    "subject": "高等数学",
                    "s_session_id": "123",
                    "ddl": "2024.1.1"
                },
                {
                    "name": "第3节",
                    "subject": "大学物理",
                    "s_session_id": "222",
                    "ddl": "2024.2.1"
                }
            ],
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

    handlepress = (id) =>{
        this.props.navigation.navigate("detail", {id:id})
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
                    title='邮箱绑定'
                    onPress={() => {
                        this.props.navigation.navigate("Mail")
                    }}
                ></Button>
                <View>
                    <FlatList
                    data={this.state.list}
                    renderItem={({item})=>{
                        return(
                            <View>
                            <TouchableOpacity
                            onPress={()=>this.handlepress(item.s_session_id)}
                            >
                            <View style={{flexDirection:'row', backgroundColor:'white', borderRadius:10, marginHorizontal:10, height:80}}>
                                <View style={{flex:3, justifyContent:'center', marginLeft:10}}>
                                    <Text style={{fontSize:25, color:'black'}}>{item.name}</Text>
                                    <Text>{item.subject}</Text>
                                </View>
                                <View style={{flex:1, justifyContent:'center'}}>
                                    <Text style={{color:'black'}}>{item.ddl}</Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                            <View style={{height:10}}></View>
                            </View>
                        )
                    }}
                    />
                </View>
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