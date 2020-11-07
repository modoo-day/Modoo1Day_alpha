import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Root from './src/components/Root';
import auth from '@react-native-firebase/auth';

const user = auth().currentUser;

if (user) {
  console.log('User email: ', user.email);
} else {
  console.log('no signed');
}

const App: () => React$Node = () => {
  return (
    <>
      <Root />
    </>
  );
};

export default App;
