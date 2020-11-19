import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import KakaoLogins, {KAKAO_AUTH_TYPES} from '@react-native-seoul/kakao-login';
import {firebase} from '@react-native-firebase/auth';
import functions from '@react-native-firebase/functions';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import checkNewAccountFunc from './checkNewAccountFunc';

// ******************************************
// ******************************************
/*********/ const IS_DEV = true; // *********
// ******************************************
// ******************************************

const KakaoButton = () => {
  const navigation = useNavigation();
  // 카카오 로그인 메소드
  const kakaoSignIn = function () {
    // 개발자 모드면 에뮬로
    if (IS_DEV == true) {
      var EMULATOR_IP = 'http://192.168.1.37:5001';
      firebase.app().functions().useFunctionsEmulator(EMULATOR_IP);
      console.log('****개발자 모드 실행****');
    }

    console.log('kakaoSignIn Function 시작');
    KakaoLogins.login([KAKAO_AUTH_TYPES.Talk, KAKAO_AUTH_TYPES.Account])
      .then((res) => {
        var token = res.accessToken;
        console.log('카카오 로그인 성공', res);
        firebase
          .app()
          .functions(IS_DEV ? null : 'asia-northeast3')
          .httpsCallable(`kakaoToFirebaseToken`)({token: token})
          .then((res) => {
            console.log('Function에서 답옴:', res);
            // 여기서 신규 사용자인지 확인하는 Response를 Functions에서 받아와야함.
            // res에 포함된 값이 신규라면 navigate에서 LoginProfile로 넘어가고,
            // res에 포함된 값이 기존 사용자라면 navigate를 메인으로 넘긴다
            auth()
              .signInWithCustomToken(res.data.firebaseToken)
              .then(() => {
                console.log('카카오 로그인 완료:', auth().currentUser);
                // 여기서부터 로그인 완료했을 때 수행하는 동작.

                checkNewAccountFunc(auth().currentUser.uid, (isNew) => {
                  console.log(isNew);
                  if (isNew == true) {
                    console.log('신규 사용자다!');
                    navigation.navigate('LoginProfile');
                  } else {
                    console.log('기존 사용자다!!!!');
                  }
                });
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
    <TouchableOpacity onPress={kakaoSignIn}>
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
