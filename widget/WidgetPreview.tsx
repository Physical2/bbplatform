import * as React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { WidgetPreview } from 'react-native-android-widget';

import { OUCWidget } from './OUC';

const screenwidth = Dimensions.get("window").width

export function OUCWidgetPreviewScreen() {
  return (
    <View style={styles.container}>
      <WidgetPreview
        renderWidget={() => <OUCWidget />}
        width={screenwidth - 50}
        height={screenwidth/2}
      />
    </View>
    // <View style={styles.container}>
    //   <WidgetPreview
    //     renderWidget={() => <OUCWidget />}
    //     width={320}
    //     height={200}
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:80
  },
});