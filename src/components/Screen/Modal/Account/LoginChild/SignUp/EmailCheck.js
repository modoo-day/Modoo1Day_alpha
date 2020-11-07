/* #region Libraries */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Alert
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
// import auth from '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-community/async-storage';
/* #endregion */

function EmailCheck({navigation}) {
  /* #region useState */
  const emailReg = /^[A-z|0-9]([A-z|0-9]*)(@)([A-z]*)(\.)([A-z]*)$/;
  const USR_TB = firestore().collection('USR_TB');
  const [email, setEmail] = useState('');
  const [isEmail, setisEmail] = useState(false);
  const [wrong, setWrong] = useState('');
  const [next, setNext] = useState('계속하기');
  /* #endregion */

  /* #region 이메일 형식 체크 */
  function checkEmail(text) {
    setEmail(text);
    if (emailReg.test(text)) {
      setisEmail(true);
      setWrong('');
    } else {
      setisEmail(false);
      setWrong('올바르지 않은 이메일 주소입니다.');
    }
  }
  /* #endregion */

  /* #region 이메일이 기존에 사용 중인지 확인하는 함수 */
  function inspectEmail() {
    USR_TB.where('email', '==', email)
      .get()
      .then((snapshot) => {
        console.log('inspectation start');
        if (snapshot.empty) {
          // DB에 유저 정보 없으면
          console.log(email, ': DB empty');
          sendEmail();
          console.log('sending Success');
        }
        snapshot.forEach((doc) => {
          // DB에 유저 정보 있으면
          console.log(email, 'DB filled');
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  /* #endregion */

  /* #region Firebase API Server에 Token 발급 요청 */
  function reqEmailVerify() {
    fetch('http://192.168.43.233:8000/reqGenToken/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reqEmail: email,
      }),
    })
      .then((res) => {
        // Fetch 후 서버에서 결과 받아오면.
        res.json().then((data) => {
          setWrong(data.result);
          if (data.result == 'success') {
            console.log(data);
            setWrong('메일이 전송됐습니다. 메일함을 확인하세요.');
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  /* #endregion */

  /* #region 계속하기 버튼 누르면 검증된 사용자인지 확인 */
  function checkMailVerified() {
    fetch('http://192.168.43.233:8000/checkMailVerified/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reqEmail: email,
      }),
    })
      .then((res) => {
        // Fetch 후 서버에서 결과 받아오면.
        res.json().then((data) => {
          console.log(data.resPost);
          // 검증된 이메일 주소인지 확인.
          if (data.resPost == 'yes') {
            Alert.alert('통과됨.');
            navigation.navigate('PasswordCheck')
          } else {
            Alert.alert('통과안됨.');
          }
        });
      })
      .catch((err) => {
        if (err.toString() == 'TypeError: Network request failed') {
          Alert.alert('네트워크 오류입니다.');
        } else {
          console.log(err);
        }
      });
  }
  /* #endregion */

  /* #region XML */
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>행복은 습관이</Text>
        <Text style={styles.h1}>될 수 있습니다!</Text>
        <Text style={styles.h2}>먼저 로그인이 필요해요 ^^</Text>
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.textinput}
          placeholder="사용하는 이메일을 입력하세요"
          onChangeText={(text) => checkEmail(text)}
          value={email}
        />
        <Button
          title={'이메일인증'}
          onPress={reqEmailVerify}
          style={styles.button}
          isDisabled={!isEmail}>
          {/* TODO : 버튼 스타일 적용 */}
        </Button>
      </View>
      <Text style={styles.wrong}>{wrong}</Text>
      {/* TODO : Functions with Firebase 작동하는지 확인 */}
      <TouchableOpacity
        Button
        // onPress={
        //   checkMailVerified
        // }
        onPress={() =>
          navigation.navigate('PasswordCheck', {email: email})}
        
      >
        <Text style={styles.next}>{next}</Text>
      </TouchableOpacity>
    </View>
  );
  /* #endregion */
}

/* #region CSS */
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  header: {
    marginTop: 100,
    alignItems: 'center',
  },
  h1: {
    fontFamily: 'neodgm',
    fontSize: 30,
  },
  h2: {
    marginTop: 20,
    fontFamily: 'neodgm',
    fontSize: 18,
  },
  body: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textinput: {
    borderWidth: 1,
    borderRadius: 50,
    width: 200,
    fontFamily: 'neodgm',
    fontSize: 13,
    marginHorizontal: 5,
    textAlign: 'center',
  },
  button: {
    width: 90,
    borderRadius: 50,
    marginHorizontal: 5,
    position: 'relative',
    top: '10%',
  },
  wrong: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: 'neodgm',
  },
  next: {
    marginTop: 30,
    fontSize: 30,
    fontFamily: 'neodgm',
  },
});
/* #endregion */

export default EmailCheck;
