import React from 'react';
import { FlexWidget, TextWidget } from 'react-native-android-widget';
import { Dimensions } from 'react-native';

const screenwidth = Dimensions.get("window").width
const screenheight = Dimensions.get("window").height

export function OUCWidget() {
  return (
    <FlexWidget
      style={{
        flex:1,
        height: 0.5 * screenwidth,
        width: screenwidth - 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 16,
      }}
    >
      <TextWidget
        text="Hello"
        style={{
          fontSize: 32,
          //fontFamily: 'Inter',
          color: '#000000',
        }}
      />
    </FlexWidget>
  );
}