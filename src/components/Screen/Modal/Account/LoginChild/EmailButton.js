import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const EmailButton = () =>{

    const navigation = useNavigation();

    return(
        <TouchableOpacity 
            onPress={() => navigation.navigate('EmailLogin')}
        >
          <Image
            source={require('../../../../../assets/icons/emailLogin.png')}
            style={styles.button}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
    )
}

export default EmailButton;


const styles = StyleSheet.create({
    button: {
      alignSelf: 'center',
      width: '80%',
      height: 50,
    },
});
  