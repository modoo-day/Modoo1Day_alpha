/* #region Libraries */
import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Alert, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';
/* #endregion */

function EmailRegCheck({navigation}) {
  /* #region useState */
  const emailReg = /^[A-z|0-9]([A-z|0-9]*)(@)([A-z]*)(\.)([A-z]*)$/;
  const USR_TB = firestore().collection('USR_TB');
  const [isEmail, setisEmail] = useState(false);
  const [email, setEmail] = useState('');
  const [wrong, setWrong] = useState('');
  /* #endregion */

  /* #region Email Regular Expression Inspectation */
  function EmailRegIns(text) {
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

  /* #region Email Current User Inspectation */
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

  /* #region Token Request To Firebase API Server */
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

  /* #region Verified User Checking after NEXT Button */
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

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.h1}>행복은 습관이</Text>
        <Text style={styles.h1}>될 수 있습니다!</Text>
        <Text style={styles.h2}>먼저 로그인이 필요해요 ^^</Text>
      </View>

      {/* Body */}
      <View style={styles.body}>
        <View style={styles.bodyView}>
          <TextInput
            style={styles.bodyTextInput}
            placeholder="사용하는 이메일을 입력하세요"
            onChangeText={(text) => EmailRegIns(text)}
            value={email}
          />
          <Button
            onPress={reqEmailVerify}
            compact={true}
            color={'black'}
            disabled={!isEmail}>
            <Text style={{fontFamily: 'neodgm'}}>이메일인증</Text>
          </Button>
        </View>

        {/* Email Format Checker */}
        <Text>{wrong}</Text>

        {/* Keep going button */}
        <View style={styles.bodyView}>
          <Button
            onPress={checkMailVerified}
            // onPress={() =>
            //   navigation.navigate('PasswordCheck', {email: email})
            // }
            color={'black'}>
            <Text style={styles.bodyText}>계속하기</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: RFPercentage(20),
    height: RFPercentage(15),
  },
  h1: {
    marginTop: '5%',
    fontSize: RFPercentage(6),
    fontFamily: 'neodgm',
  },
  h2: {
    marginTop: '5%',
    fontSize: RFPercentage(2),
    fontFamily: 'neodgm',
    marginBottom: '5%',
  },
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bodyView: {
    marginTop: '8%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyTextInput: {
    width: '70%',
    height: RFPercentage(6),
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 30,
    fontFamily: 'neodgm',
    textAlign: 'center',
  },
  bodyText: {
    fontSize: RFPercentage(4),
    fontFamily: 'neodgm',
    textAlign: 'center',
  },
});

export default EmailCheck;
