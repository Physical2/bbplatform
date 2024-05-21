import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity, Image, StyleSheet, Dimensions, Alert } from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            Newdata: [],
            date: 0,
            date1: [],
            date2: 0,
            id: [],
            comments: [],
            isLoading: true,
            flag: false,
            day: 0,
            month: 0,
            year: 0,
        };
    }

    componentDidMount() {

        const url = `https://news-at.zhihu.com/api/3/stories/latest`
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                this.setState({ data: json.stories });
                this.setState({ date: json.date });
                this.setState({ day: json.date % 100 });
                this.setState({ month: ((json.date - json.date % 100) / 100) % 100 });
                this.setState({ year: ((json.date - json.date % 10000) / 10000) });
                this.setState({ id: json.stories.id });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }
    getNewData = () => {
        if (this.state.day != 1) {
            this.state.day = this.state.day - 1;
        } else {
            if (this.state.month == 1) {
                this.state.year = this.state.year - 1;
                this.state.month = 12;
                this.state.day = 31;
            } else {
                this.state.month = this.state.month - 1;
                switch (this.state.month) {
                    case 2:
                        this.state.day = 31;
                        break;
                    case 3:
                        if (this.state.year % 4 == 0 && this.state.year % 100 !== 0 || this.state.year % 400 == 0) {
                            this.state.day = 29;
                        } else {
                            this.state.day = 28;
                        }
                        break;
                    case 4:
                        this.state.day = 31;
                        break;
                    case 5:
                        this.state.day = 30;
                        break;
                    case 6:
                        this.state.day = 31;
                        break;
                    case 7:
                        this.state.day = 30;
                        break;
                    case 8:
                        this.state.day = 31;
                        break;
                    case 9:
                        this.state.day = 31;
                        break;
                    case 10:
                        this.state.day = 30;
                        break;
                    case 11:
                        this.state.day = 31;
                        break;
                    case 12:
                        this.state.day = 30;
                        break;
                    default:
                        break;
                }
            }
        }
        var date = this.state.day + this.state.month * 100 + this.state.year * 10000;
        const url = `https://news-at.zhihu.com/api/3/news/before/${date}`
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                this.setState({ Newdata: json.stories })
                for (var i = 0; i < this.state.Newdata.length; i++) {
                    this.state.data.push(this.state.Newdata[i]);
                }
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }
    loadData = () => {
        this.setState({
            flag: true
        })
        setTimeout(() => {
            this.setState({
                flag: false
            })
            Alert.alert('刷新成功')
        }, 2000)
    }
    render() {
        const { data, comments, isLoading } = this.state;

        return (
            <View style={[styles.allproject]}>
                {isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Details', {
                                    url: item.url,
                                    name: item.title,
                                    id: item.id
                                })}
                            >
                                <View style={[styles.contant]}>
                                    <View style={[styles.shuban]}>
                                        <Text style={[styles.fonts]} numberOfLines={3}>
                                            {item.title}
                                        </Text>
                                        <Text style={[styles.smallfont]}>
                                            {item.hint}
                                        </Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                    </View>
                                    <Image
                                        source={{ uri: item.images[0] }}
                                        style={[styles.images]}
                                    />
                                </View>
                            </TouchableOpacity>
                        )}
                        ItemSeparatorComponent={() => {
                            return <View style={[{ borderBottomWidth: 2 }, { borderBottomColor: 'blue' }, { marginVertical: 1 }]}></View>
                        }}

                        refreshing={this.state.flag}
                        onRefresh={this.loadData}
                        onEndReachedThreshold={0}
                        onEndReached={this.getNewData}
                        ListHeaderComponent={() => {
                            return <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 20 }}>{this.state.date}</Text>
                            </View>
                        }}

                        ListFooterComponent={() => {
                            return <Text style={{ fontSize: 20, marginVertical: 20, textAlign: 'center' }}>继续下拉加载下一天新闻</Text>
                        }}
                    />
                )}
            </View>
        );
    }

};
const styles = StyleSheet.create({
    headline: {
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        backgroundColor: 'tomato'
    },
    allproject: {
        flexDirection: 'column',
        height: '100%'
    },
    contant: {
        flexDirection: 'row',
        alignItems: 'center',
        height: Dimensions.get('window').height / 6,
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width
    },
    fonts: {
        fontSize: 20,
    },
    shuban: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: Dimensions.get('window').width / 3 * 2
    },
    smallfont: {
        fontSize: 15
    },
    images: {
        width: Dimensions.get('window').height / 6,
        height: Dimensions.get('window').height / 6,
        borderColor: 'black'
    }
})
