import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { Component, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const MailScreen = () => {
    const navigation = useNavigation()

    const [mail, setMail] = useState('')

    const handlepress = () =>{
        navigation.navigate("Home")
    }

    return(
        <View>
            <View style={{height:80, justifyContent:"center", alignItems:"center"}}>
                <Text style={{fontSize:40, color:'black'}}>邮箱绑定</Text>
            </View>
            <View>
                <TextInput
                style={{borderWidth:2, borderRadius:20, marginHorizontal:20}}
                placeholder='请输入邮箱（用于作业提醒）'
                onChangeText={setMail}
                />
            </View>
            <View style={{height:20}}></View>
            <View style={{justifyContent:"center", alignItems:"center"}}>
                <TouchableOpacity onPress={()=>{handlepress()}}>
                    <View style={{backgroundColor:"#ADD8E6", width:80, height:40, borderRadius:100, justifyContent:'center', alignItems:"center"}}>
                        <Text style={{fontSize:20, color:"black"}}>绑定</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MailScreen