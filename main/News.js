import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';

function DetailsScreen({ route, navigation }) {
    const { url } = route.params;
    return (
        <WebView
            source={{ uri: url }}
        />
    );
};
export default DetailsScreen