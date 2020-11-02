/* #region Library */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
/* #endregion */

const LoginProfile = () => {
  /* #region useState */
  const [img, setImg] = useState(
    require('../../../../../../assets/icons/modoo.png'),
  );

  const [name, setName] = useState('닉네임');
  const [nameColor, setNameColor] = useState('lightgray');
  const [nameAlert, setNameAlert] = useState('닉네임을 입력하세요!');
  const [nameAlertColor, setNameAlertColor] = useState('blue');

  const [gender, setGender] = useState('성별');
  const [genderColor, setGenderColor] = useState('lightgray');
  const [genderAlert, setGenderAlert] = useState('성별을 선택하세요!');
  const [genderAlertColor, setGenderAlertColor] = useState('blue');

  const [date, setDate] = useState('생년월일');
  const [dateColor, setDateColor] = useState('lightgray');
  const [dateAlert, setDateAlert] = useState('생년월일을 선택하세요!');
  const [dateAlertColor, setDateAlertColor] = useState('blue');

  const [next, setNext] = useState('계속하기');
  /* #endregion */

  // TODO: Function 추가
  // TODO: Firestore 및 Auth 추가

  return (
    <View style={styles.container}>
      {/* 프로필 이미지 */}
      <TouchableOpacity>
        <Image source={img} style={styles.Image} />
      </TouchableOpacity>

      {/* 닉네임 */}
      <TouchableOpacity style={{...styles.Button, borderColor: nameColor}}>
        <TextInput
          style={{...styles.Text, color: nameColor}}
          placeholder={name}
          placeholderTextColor="lightgray"
        />
      </TouchableOpacity>
      <Text style={{color: nameAlertColor}}>{nameAlert}</Text>

      {/* 성별 */}
      <TouchableOpacity style={{...styles.Button, borderColor: genderColor}}>
        <Text style={{...styles.Text, color: nameColor}}>{gender}</Text>
      </TouchableOpacity>
      <Text style={{color: nameAlertColor}}>{genderAlert}</Text>

      {/* 생년월일 */}
      <TouchableOpacity style={{...styles.Button, borderColor: dateColor}}>
        <Text style={{...styles.Text, color: nameColor}}>{date}</Text>
      </TouchableOpacity>
      <Text style={{color: nameAlertColor}}>{dateAlert}</Text>

      {/* 계속하기 */}
      <TouchableOpacity style={styles.NextButton}>
        <Text style={styles.NextText}>{next}</Text>
      </TouchableOpacity>
    </View>
  );
};

/* #region CSS */
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    //    backgroundColor: 'pink',
  },
  Image: {
    marginTop: 55,
    width: 111,
    height: 111,
  },
  Button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    width: 180,
    height: 40,
    marginTop: 15,
  },
  Text: {
    paddingHorizontal: 50,
  },
  NextButton: {
    marginTop: 50,
  },
  NextText: {
    fontSize: 30,
  },
});
/* #endregion */

export default LoginProfile;
