import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import Button from 'apsl-react-native-button';


const Account = ({navigation}) => {

    const logout = () => {
        auth()
          .signOut()
          .then(() => console.log('User signed Out!'))
          .then(navigation.goBack())
      };

    return(
        <View>
            <Button onPress={logout}> 로그아웃 </Button>
            <Text>Account</Text>
        </View>
    )
}

export default Account;