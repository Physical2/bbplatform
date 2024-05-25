
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, View, Text, Button, ActivityIndicator, Image, StyleSheet, FlatList, ScrollView, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
// import { FlatList, ScrollView } from 'react-native-gesture-handler';

export default class HomeScreen extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data: [],
    //         id: [],
    //         isLoading: true,
    //         flag: false,

    //         username: '',
    //         password: '',
    //         token: '',
    //     };
    // }

    // componentDidMount() {
    //     const { route, navigation } = this.props;
    //     const { username } = route.params;
    //     // console.log('1_Home_Username:', username);

    //     const url = `http://124.70.57.215:8000/novel/`
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((json) => {
    //             this.setState({ data: json }) //错
    //             // console.log(this.state.data)
    //         })
    //         .catch((error) => console.error(error))
    //         .finally(() => {
    //             this.setState({ isLoading: false });
    //         })
    // }

    // loadData = () => {
    //     this.setState({
    //         flag: true
    //     })
    //     setTimeout(() => {
    //         this.setState({
    //             flag: false
    //         })
    //         Alert.alert('刷新成功')
    //     }, 2000)
    // }

    render() {
        // const { data, isLoading } = this.state;
        // const { route, navigation } = this.props;
        // const { username, token } = route.params;
        // this.setState({ token: this.token });
        // // console.log('1_Home_Username2:', username);

        // // const DetailsGo = () => {
        // //     // const { username, password } = this.state;
        // //     navigation.navigate('Details', { username });
        // // }
        // const goToDetails = (id, max_chapter, name) => {
        //     this.props.navigation.navigate('Details', {
        //         username: this.props.route.params.username,
        //         id: id,
        //         max_chapter: max_chapter,
        //         name: name,
        //         // token: this.state.token
        //     });
        // }


        return (
            // <View style={[styles.total]}>
            //     {/* <Text>Welcome to Main Screen, {username}!</Text> */}
            //     {isLoading ? <ActivityIndicator /> : (
            //         <FlatList
            //             style={[styles.bookTotal]}
            //             data={data}
            //             keyExtractor={({ id }, index) => id}
            //             renderItem={({ item }) => (
            //                 <TouchableOpacity
            //                     onPress={() => goToDetails(item.id, item.max_chapter, item.name)}
            //                 // onPress={() => {
            //                 // this.props.navigation.navigete('Details'
            //                 //     // {
            //                 //     // url: item.url,
            //                 //     // name: item.name,
            //                 //     // id: item.id,
            //                 //     // desc: item.desc
            //                 //     // }
            //                 // )
            //                 // }}
            //                 >
            //                     <View style={[styles.bookInner]}>
            //                         <View style={[styles.bookInner_1]}>
            //                             <Image
            //                                 style={[styles.bookCover]}
            //                                 source={require('../asserts/cover_0.png')}
            //                             />
            //                             <View style={[styles.bookIntro]}>
            //                                 <Text style={[styles.bookName]}>
            //                                     {item.name}
            //                                 </Text>
            //                                 <Text style={[styles.bookDesc]}>
            //                                     {item.desc}
            //                                 </Text>
            //                             </View>
            //                             <Text style={[styles.bookClick]}>点击阅读 ＞</Text>
            //                         </View>
            //                     </View>
            //                 </TouchableOpacity>
            //             )}
            //             ItemSeparatorComponent={() => {
            //                 return <View style={[{ borderBottomWidth: 1 }, { borderBottomColor: 'deepblue' }, { marginVertical: 15 }]}></View>
            //             }}
            //             refreshing={this.state.flag}
            //             onRefresh={this.loadData}
            //         />
            //     )}
            // </View>
            <View>
                <Text>主页</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    total: {
        marginTop: 20,
    },
    bookInner: {
        marginLeft: 15,
        marginRight: 15,
    },
    bookInner_1: {
        flexDirection: 'row',
    },
    bookCover: {
        width: Dimensions.get('screen').width / 7,
        height: Dimensions.get('screen').width / 7,
    },
    bookIntro: {
        marginLeft: 15,
        width: Dimensions.get('screen').width * 2.8 / 5,
        // backgroundColor: 'green',
    },
    bookName: {
        fontSize: 23,
    },
    bookDesc: {
        fontSize: 16,
    },
    bookClick: {
        fontSize: 16,
        fontWeight: 'bold',
        // backgroundColor: 'green',
        marginTop: 10,
        // marginLeft: Dimensions.get('screen').width * 2 / 5,
    }
})