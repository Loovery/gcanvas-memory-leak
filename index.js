/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

LogBox.ignoreLogs([
  '`GCanvasReady` with no listeners',
]);

AppRegistry.registerComponent(appName, () => App);
