import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const KakaoButton = () =>{
    return(
        <TouchableOpacity 
            // onPress={() => googleSignIn()}
        >
          <Image
            source={require('../../../../../assets/icons/kakaoLogin.png')}
            style={styles.button}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
    )
}

export default KakaoButton;

const styles = StyleSheet.create({
    button: {
      alignSelf: 'center',
      width: '80%',
      height: 50,
    },
});
  