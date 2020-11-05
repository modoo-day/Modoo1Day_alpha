import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    // 이거 안써도 되나?
    '981107116909-rc1qb6m90iv10mcd5uci7ff7o7d6k9ft.apps.googleusercontent.com',
});

const GoogleButton = () => {
  // 구글 전용 에러 핸들링
  const googleSignInErrorHandling = (error) => {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // 유저가 로그인 창을 닫음.
      console.log('유저가 로그인 창을 닫았습니다.');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // 이미 로그인이 진행중임.
      console.log('이미 로그인이 진행 중입니다.');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // 구글 플레이 서비스가 낡았거나 안깔려있음.
      console.log('구글 플레이 서비스를 업데이트 해주세요.');
    } else if (error.code == 7) {
      // 네트워크 오류.
      console.log('네트워크 오류입니다. 인터넷 연결 상태를 확인해 주세요.');
    } else {
      // 이거는 제발 안떴으면 좋겠다.
      console.log('알 수 없는 오류:', error.code, error);
    }
    return null;
  };
  // 구글 버튼 눌리면 작동하는거
  const googleSignIn = async () => {
    let googleUserInfo = null;
    console.log('구글 로그인 시작');
    try {
      await GoogleSignin.hasPlayServices();
      googleUserInfo = await GoogleSignin.signIn();
      console.log('유저 정보 불러옴:', googleUserInfo);
    } catch (err) {
      console.log('구글 로그인 에러:', err);
      googleSignInErrorHandling(err);
      return;
    }
    // Firebase Auth 로그인 시작.
    let credential = auth.GoogleAuthProvider.credential(googleUserInfo.idToken);
    auth()
      .signInWithCredential(credential)
      .then((usr) => {
        console.log('구글 파베 로그인 완료:', usr);
        afterGoogleSignIn();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const afterGoogleSignIn = () => {
    // 여기서부터 구글 로그인 완료 후 동작 정의하면 됨.
    // ..
    // ..
    console.log(auth().currentUser);
  };
  return (
    <TouchableOpacity onPress={() => googleSignIn()}>
      <Image
        source={require('../../../../../assets/icons/googleLogin.png')}
        style={styles.button}
        resizeMode={'contain'}
      />
    </TouchableOpacity>
  );
};

export default GoogleButton;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    width: '80%',
    height: 50,
  },
});
