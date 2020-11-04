import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const EmailButton = () =>{
    return(
        <TouchableOpacity 
            // onPress={() => googleSignIn()}
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
  