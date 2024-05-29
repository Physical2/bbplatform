/**
 * @format
 */

import { AppRegistry } from 'react-native';
import {registerWidgetTaskHandler} from 'react-native-android-widget';
import App from './App';
import { name as appName } from './app.json';
import { widgetTaskHandler } from './widget/widget-task-handler';

AppRegistry.registerComponent(appName, () => App);
registerWidgetTaskHandler(widgetTaskHandler);