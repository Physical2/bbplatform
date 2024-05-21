import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, FlatList } from 'react-native'

export default class Long extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lcomments: [],
            scomments: []
        }
    }
    componentDidMount = (route, navigation) => {
        const { id } = this.props.route.params;
        const url1 = `https://news-at.zhihu.com/api/4/story/${id}/long-comments`
        const url2 = `https://news-at.zhihu.com/api/4/story/${id}/short-comments`
        fetch(url1)
            .then((response) => response.json())
            .then((json) => {
                this.setState({ lcomments: json.comments });
            })
            .catch((error) => console.error(error));
        fetch(url2)
            .then((response) => response.json())
            .then((json) => {
                this.setState({ scomments: json.comments });
            })
            .catch((error) => console.error(error));
    }

    render() {
        const { lcomments, scomments } = this.state;
        if (lcomments.length) {
            return (
                <View style={[styles.allproject]}>
                    <FlatList
                        data={lcomments}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View style={[styles.contant]}>
                                <Text style={[styles.fonts]}>
                                    {item.author}
                                </Text>
                                <Text style={[styles.conmment]}>
                                    {item.content}
                                </Text>
                                <Text style={[styles.smallfont]}>
                                    {item.time}
                                </Text>
                            </View>
                        )}
                        ItemSeparatorComponent={() => {
                            return <View style={[{ borderBottomWidth: 2 }, { borderBottomColor: 'grey' }, { marginVertical: 1 }]}></View>
                        }}//分割线
                        onEndReachedThreshold={0}
                        ListHeaderComponent={() => {
                            return <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 20 }}>{lcomments.length}条长评</Text>
                            </View>
                        }}
                    />
                    <FlatList
                        data={scomments}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View style={[styles.contant]}>
                                <Text style={[styles.fonts]}>
                                    {item.author}
                                </Text>
                                <Text style={[styles.conmment]}>
                                    {item.content}
                                </Text>
                            </View>
                        )}
                        ItemSeparatorComponent={() => {
                            return <View style={[{ borderBottomWidth: 2 }, { borderBottomColor: 'grey' }, { marginVertical: 1 }]}></View>
                        }}
                        onEndReachedThreshold={0}
                        ListHeaderComponent={() => {
                            return <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 20 }}>{scomments.length}条短评</Text>
                            </View>
                        }}
                    />
                </View>
            );
        }
        if (scomments.length && lcomments.length); {
            return (
                <View style={[styles.allproject]}>
                    <FlatList
                        data={scomments}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View style={[styles.contant]}>
                                <Text style={[styles.fonts]}>
                                    {item.author}
                                </Text>
                                <Text style={[styles.conmment]}>
                                    {item.content}
                                </Text>
                            </View>
                        )}
                        ItemSeparatorComponent={() => {
                            return <View style={[{ borderBottomWidth: 2 }, { borderBottomColor: 'grey' }, { marginVertical: 1 }]}></View>
                        }}
                        onEndReachedThreshold={0}
                        ListHeaderComponent={() => {
                            return <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 20 }}>{scomments.length}条短评</Text>
                            </View>
                        }}
                    />
                </View>
            );
        }
        if (!scomments.length && !lcomments.length) {
            return (
                <Text style={[styles.fonts]}>暂时没有评论</Text>
            )
        }
    }
}

const styles = StyleSheet.create({
    allproject: {
        flexDirection: 'column',
        height: '100%'
    },
    contant: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width - 60,
        marginLeft: 30,
        marginRight: 30
    },
    fonts: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    smallfont: {
        fontSize: 15
    },
    conmment: {
        fontSize: 20
    }
})
