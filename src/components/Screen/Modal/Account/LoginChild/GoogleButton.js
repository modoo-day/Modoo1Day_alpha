import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const GoogleButton = () =>{
    return(
        <TouchableOpacity 
            // onPress={() => googleSignIn()}
        >
          <Image
            source={require('../../../../../assets/icons/googleLogin.png')}
            style={styles.button}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
      alignSelf: 'center',
      width: '80%',
      height: 50,
    },
});
  