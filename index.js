/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PasswordCheck from './src/components/Screen/Modal/Account/LoginChild/SignUp/PasswordCheck';

AppRegistry.registerComponent(appName, () => PasswordCheck);
