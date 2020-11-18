import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Button from 'apsl-react-native-button';
import firestore from '@react-native-firebase/firestore';
import InquiryChild from './Child/InquiryChild';

const Question = ({navigation}) => {
  const inquiryDataRef = firestore().collection('INQUIRY_BRD');

  const [inquiryA, setInquiryA] = useState({});
  const [inquiryB, setInquiryB] = useState({});
  const [inquiryC, setInquiryC] = useState({});
  const [inquiryD, setInquiryD] = useState({});
  const [inquiryE, setInquiryE] = useState({});

  const getInquiryList = () => {
    console.log('문의 기록 불러오기 시작');
    inquiryDataRef
      .orderBy('upload_time', 'desc')
      .limit(5)
      .get()
      .then((snst) => {
        console.log('Inquiry List 불러옴');
        setInquiryA(snst._docs[0]._data);
        setInquiryB(snst._docs[1]._data);
        setInquiryC(snst._docs[2]._data);
        setInquiryD(snst._docs[3]._data);
        setInquiryE(snst._docs[4]._data);
      });
  };

  // Refresh 한번만 실행.
  useEffect(() => {
    getInquiryList();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <InquiryChild {...inquiryA} {...navigation} />
      <InquiryChild {...inquiryB} {...navigation} />
      <InquiryChild {...inquiryC} {...navigation} />
      <InquiryChild {...inquiryD} {...navigation} />
      <InquiryChild {...inquiryE} {...navigation} />

      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          disabledStyle={{backgroundColor: 'white'}}
          isLoading={false}
          onPress={() => navigation.navigate('QuestionWrite')}>
          문의 하기
        </Button>
      </View>
    </ScrollView>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    //    backgroundColor:'lightblue'
  },
  buttonContainer: {
    backgroundColor: 'pink',
    height: 50,
  },
  buttonLayout: {
    backgroundColor: '#ffcd2c',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    height: '100%',
    borderRadius: 0,
  },
  buttonText: {
    fontFamily: 'neodgm',
    fontSize: 10,
  },
  listContianer: {
    //backgroundColor:'lightgreen',
  },
  list: {
    flexDirection: 'row',
    borderBottomWidth: 0.9,
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
  },
  listIconContainer: {
    marginTop: '2.2%',
  },
  listIcon: {
    width: 25,
    height: 25,
  },
  postContainer: {
    height: 85,
    //backgroundColor:'lightyellow',
    width: '100%',
  },
  postTitleContainer: {
    // backgroundColor:'pink',
    height: 50,
    marginTop: '2.2%',
    marginHorizontal: '5%',
  },
  title: {
    fontSize: 20,
    fontFamily: 'neodgm',
  },
  postBottomContainer: {
    //  backgroundColor:'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginHorizontal: '5%',
  },
  bottomText: {
    fontFamily: 'neodgm',
    fontSize: 15,
  },
  answerContainer: {
    backgroundColor: '#ffcd2c',
    borderWidth: 1,
    width: '30%',
  },
  answer: {
    fontSize: 10,
    fontFamily: 'neodgm',
    textAlign: 'center',
  },
  answerWaitContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    width: '30%',
  },
  answerWait: {
    fontSize: 10,
    fontFamily: 'neodgm',
    textAlign: 'center',
  },
  button: {
    width: '105%',
    backgroundColor: '#ffcd2c',
    borderWidth: 2,
    height: '100%',
    //marginTop: '4%',
    borderRadius: 0,
    alignSelf: 'center',
  },
  buttonText: {
    fontFamily: 'neodgm',
    fontSize: 10,
  },
});
