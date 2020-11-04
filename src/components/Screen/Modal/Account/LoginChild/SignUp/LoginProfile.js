/* #region Library */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

/* #endregion */

const LoginProfile = () => {
/* #region useState */
  const [modalVisible, setModalVisible] = useState(false);

  const [img, setImg] = useState(
    require('../../../../../../assets/icons/modoo.png'),
  );

  const [name, setName] = useState('');
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

  const photoOptions = {
    title: 'Select Profile',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
    mediaType: 'photo',
    maxWidth: 3000,
    maxHeight: 3000,
  };

  function loadImg() {
    ImagePicker.launchImageLibrary(photoOptions, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.uri};
        setImg(source);
      }
    });
  }

  function nameCheck() {
    const nameReg = /^[a-zA-z가-힣]{2,10}/;
    // TODO : firestore currentUser Check
    if (nameReg.test(name)) {
      setNameColor('black');
      setNameAlertColor('green');
      setNameAlert('사용할 수 있는 닉네임 입니다.');
    } else {
      setNameColor('lightgray');
      setNameAlertColor('blue');
      setNameAlert('사용할 수 없는 닉네임 입니다.');
    }
  }

/* #region XML */
  return (
    <View style={styles.container}>
      {/* 성별 선택하는 팝업창 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('이미 제출되었습니다.');
        }}>
        <View style={styles.modalcenterView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>성별을 선택해주세요!</Text>
            <View style={styles.modalButtonView}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  setGender('남자');
                  setGenderColor('black');
                  setGenderAlert('');
                }}
                style={styles.modalButton}>
                <Text style={styles.modalText}>남자</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  setGender('여자');
                  setGenderColor('black');
                  setGenderAlert('');
                }}
                style={styles.modalButton}>
                <Text style={styles.modalText}>여자</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* 프로필 이미지 */}
      <TouchableOpacity onPress={() => loadImg()}>
        <Image source={img} style={styles.Image} />
      </TouchableOpacity>

      {/* 닉네임 */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{...styles.Button, borderColor: nameColor}}>
          <TextInput
            style={{...styles.Text, color: nameColor}}
            placeholder={'닉네임'}
            placeholderTextColor="lightgray"
            onChangeText={(text) => setName(text)}
            value={name}
          />
        </View>
        <TouchableOpacity
          onPress={nameCheck}
          style={{...styles.Button, width: 70, marginLeft: 15}}>
          <Text>중복확인!</Text>
        </TouchableOpacity>
      </View>

      <Text style={{color: nameAlertColor}}>{nameAlert}</Text>

      {/* 성별 */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{...styles.Button, borderColor: genderColor}}>
        <Text style={{...styles.Text, color: genderColor}}>{gender}</Text>
      </TouchableOpacity>
      <Text style={{color: genderAlertColor}}>{genderAlert}</Text>

      {/* 생년월일 */}
      <TouchableOpacity style={{...styles.Button, borderColor: dateColor}}>
        <Text style={{...styles.Text, color: dateColor}}>{date}</Text>
      </TouchableOpacity>
      <Text style={{color: dateAlertColor}}>{dateAlert}</Text>

      {/* 계속하기 */}
      <TouchableOpacity style={styles.NextButton}>
        <Text style={styles.NextText}>{next}</Text>
      </TouchableOpacity>
    </View>
  );
};
/* #endregion */

/* #region CSS */
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    //    backgroundColor: 'pink',
  },
  modalcenterView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // 투명도 조절
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalButtonView: {
    flexDirection: 'row',
  },
  modalButton: {
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 15,
    marginTop: 25,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 30,
  },
  modalText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
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
