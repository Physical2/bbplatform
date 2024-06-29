import React from 'react';
import { FlexWidget, ListWidget, TextWidget } from 'react-native-android-widget';
import { Dimensions } from 'react-native';
import { Divider } from '@rneui/themed';

const screenwidth = Dimensions.get("window").width
const screenheight = Dimensions.get("window").height

export function OUCWidget() {
  const list=[
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
    },
    {
        "name": "第3节",
        "subject": "大学物理",
        "s_session_id": "222",
        "ddl": "2024.2.1"
    },
    {
        "name": "第3节",
        "subject": "大学物理",
        "s_session_id": "222",
        "ddl": "2024.2.1"
    }
]

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
      <FlexWidget>
        <TextWidget
        text='作业列表'
        style={{fontSize:30, fontWeight:'bold'}}
        />
      </FlexWidget>
      <ListWidget>
        {list.map((item, i)=>(
          <FlexWidget
          key={i}
          style={{flexDirection:"row", height:60, width:screenwidth-50, justifyContent:'center', flex:1}}
          >
            <FlexWidget style={{flex:4, justifyContent:"center", marginLeft:10, height:'match_parent', width:screenwidth-120}}>
              <TextWidget
              text={item.name}
              
              style={{fontSize:20}}
              />
              <TextWidget
              text={item.subject}
              />
            </FlexWidget>
            <FlexWidget style={{flex:1, justifyContent:'center', height:'match_parent', width:80}}>
              <TextWidget
              text={item.ddl}
              style={{}}
              />
            </FlexWidget>
          </FlexWidget>
        ))}
      </ListWidget>
    </FlexWidget>
    // <FlexWidget
    //   style={{
    //     flex:1,
    //     height: 0.5 * screenwidth,
    //     width: screenwidth - 50,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#ffffff',
    //     borderRadius: 16,
    //   }}
    // >
    //   <TextWidget
    //     text="Hello"
    //     style={{
    //       fontSize: 32,
    //       //fontFamily: 'Inter',
    //       color: '#000000',
    //     }}
    //   />
    // </FlexWidget>
  );
}