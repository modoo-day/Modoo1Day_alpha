/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LoginProfile from './src/components/Screen/Modal/Account/LoginChild/SignUp/LoginProfile';

AppRegistry.registerComponent(appName, () => LoginProfile);
