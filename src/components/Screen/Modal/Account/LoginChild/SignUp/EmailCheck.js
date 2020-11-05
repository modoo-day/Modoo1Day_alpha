import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Button from 'apsl-react-native-button';
import firestore from '@react-native-firebase/firestore';
// import auth from '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-community/async-storage';

function EmailCheck({navigation}) {
  const emailReg = /^[A-z|0-9]([A-z|0-9]*)(@)([A-z]*)(\.)([A-z]*)$/;
  const USR_TB = firestore().collection('USR_TB');
  const [email, setEmail] = useState('');
  const [isEmail, setisEmail] = useState(true);
  const [wrong, setWrong] = useState('틀림');
  const [next, setNext] = useState('계속하기');
  
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
          value={email}
        />
        <Button style={styles.button} isDisabled={!isEmail}>
          <Text>이메일인증</Text>
        </Button>
      </View>
      <Text style={styles.wrong}>{wrong}</Text>
      <TouchableOpacity>
        <Text style={styles.next}>{next}</Text>
      </TouchableOpacity>
    </View>
  );
}

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

export default EmailCheck;
