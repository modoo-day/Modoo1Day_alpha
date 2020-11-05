import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import KakaoLogins, {KAKAO_AUTH_TYPES} from '@react-native-seoul/kakao-login';
import {firebase} from '@react-native-firebase/auth';
import functions from '@react-native-firebase/functions';
import auth from '@react-native-firebase/auth';

const KakaoButton = () => {
  // 카카오 로그인 메소드
  const kakaoLogin = function () {
    console.log('kakaoLogin Function 시작');
    KakaoLogins.login([KAKAO_AUTH_TYPES.Talk, KAKAO_AUTH_TYPES.Account])
      .then((res) => {
        token = res.accessToken;
        console.log('카카오 로그인 성공', result);
        firebase
          .app()
          .functions('asia-northeast3')
          .httpsCallable(`kakaoToFirebaseToken`)({token: token})
          .then((res) => {
            console.log('Function에서 답옴:', res);
            auth()
              .signInWithCustomToken(res.data.firebaseToken)
              .then(() => {
                console.log('카카오 로그인 완료:', auth().currentUser);
                // 여기서부터 로그인 완료했을 때 수행하는 동작.
              })
              .catch((err) => {
                console.log('Firebase Token Auth에서 에러:', err);
              });
          });
      })
      .catch((err) => {
        if (err.code === 'E_CANCELLED_OPERATION') {
          console.log('카카오 로그인 취소', err);
        } else {
          // 로그인 실패
          console.log('카카오 로그인 실패', err);
        }
      });
  };
  return (
    <TouchableOpacity onPress={kakaoLogin}>
      <Image
        source={require('../../../../../assets/icons/kakaoLogin.png')}
        style={styles.button}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  );
};

export default KakaoButton;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    width: '80%',
    height: 50,
  },
});
