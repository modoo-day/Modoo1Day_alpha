import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';
import auth from '@react-native-firebase/auth';

function PasswordCheck({navigation, route}) {
  // const {email, otherParam} = route.params;
  const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*])[A-Za-z\d~!@#$%^&*]{8,}$/;

  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState('');
  const [isPassword, setisPassword] = useState(false);
  const [isPasswordValid, setisPasswordValid] = useState(false);

  const [wrong, setWrong] = useState('asdf');
  const [next, setNext] = useState('계속하기');

  function checkPassword(text) {
    setPassword(text);
    if (passwordReg.test(text) && passwordValid === text) {
      setisPassword(true);
      setisPasswordValid(true);
      setWrong('');
    } else if (!passwordReg.test(text) && passwordValid === text) {
      setisPassword(false);
      setWrong('최소 하나의 문자, 숫자, 특수문자(~!@#$%^&*) 8자 이상');
    } else if (passwordReg.test(text) && !(passwordValid === text)) {
      setisPasswordValid(false);
      setWrong('비밀번호가 달라용 ㅠㅠ');
    } else {
      setisPassword(false);
      setisPasswordValid(false);
      setWrong('최소 하나의 문자, 숫자, 특수문자(~!@#$%^&*) 8자 이상');
    }
  }

  function checkPasswordValid(text) {
    setPasswordValid(text);
    if (passwordReg.test(password) && text === password) {
      setisPassword(true);
      setisPasswordValid(true);
      setWrong('');
    } else if (!passwordReg.test(password) && text === password) {
      setisPassword(false);
      setWrong('최소 하나의 문자, 숫자, 특수문자(~!@#$%^&*) 8자 이상');
    } else if (passwordReg.test(password) && !(text === password)) {
      setisPasswordValid(false);
      setWrong('비밀번호가 달라용 ㅠㅠ');
    } else {
      setisPassword(false);
      setisPasswordValid(false);
      setWrong('최소 하나의 문자, 숫자, 특수문자(~!@#$%^&*) 8자 이상');
    }
  }

  async function CreateEmailAuth() {
    if (isPassword && isPasswordValid) {
      try {
        await auth().createUserWithEmailAndPassword(email, password);
      } catch (e) {
        console.log(e);
      }
    } else {
      alert('pwd nonono');
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.textinput}
          placeholder="비밀번호"
          //   secureTextEntry={true} // 비밀번호 **** 표시로 가려주는 Props
          maxLength={15} // 최대 15자
          onChangeText={(text) => checkPassword(text)}
          value={password}
        />
        <TextInput
          style={styles.textinput}
          placeholder="비밀번호 확인"
          //  secureTextEntry={true} // 비밀번호 **** 표시로 가려주는 Props
          maxLength={15} // 최대 15자
          onChangeText={(text) => checkPasswordValid(text)}
          value={passwordValid}
        />
      </View>

      <Text style={styles.wrong}>{wrong}</Text>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => {
          console.log(isPassword, isPasswordValid);
          CreateEmailAuth();
          /* delay 2.5sec */
          navigation.popToTop();
        }}>
        <Text style={styles.nextText}>{next}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textinput: {
    marginTop: 15,
    width: 250,
    borderWidth: 1,
    borderRadius: 50,
    textAlign: 'center',
  },
  wrong: {
    marginTop: 20,
  },
  nextButton: {
    marginTop: 20,
  },
  nextText: {
    fontFamily: 'neodgm',
    fontSize: 20,
  },
});

export default PasswordCheck;
