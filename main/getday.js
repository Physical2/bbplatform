import React, { Component } from 'react'
import { Text, View } from 'react-native'

function getDate() {
    const date = 0;
    fetch('https://news-at.zhihu.com/api/3/stories/latest')
        .then((response) => response.json())
        .then((json) => {
            date = json.date
        })
        .catch((error) => console.error(error))
    return date;
}
export default getDate;