import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Button from 'apsl-react-native-button';
import storage from '@react-native-firebase/storage';

const tag1 = '#태그1';
const tag2 = '#태그2';
const tag3 = '#태그3';

const Contents = ({navigation, route}) => {
  const modoRef = route.params.ref;

  const [imgUrl, setImgUrl] = useState(
    'https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png',
  );
  const processImgUrl = () => {
    let fbUrl = modoRef.imgUrl_str;
    storage()
      .refFromURL(fbUrl)
      .getDownloadURL()
      .then((url) => {
        setImgUrl(url);
      });
  };
  useEffect(() => {
    processImgUrl();
  }, []);
  
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.thumbnailContainer}>
          <Image style={styles.thumbnail} source={{uri: imgUrl}} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.first}>
            <View style={styles.fistFirstLine}>
              <Text style={styles.title}>{modoRef.title_str}</Text>
              <View style={styles.tagContainer}>
                <TouchableOpacity
                  style={styles.tagTouch}
                  onPress={() =>
                    navigation.navigate('Search', {tagText: tag1})
                  }>
                  <Text style={styles.tag}>{tag1}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.tagTouch}
                  onPress={() =>
                    navigation.navigate('Search', {tagText: tag2})
                  }>
                  <Text style={styles.tag}>{tag2}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.tagTouch}
                  onPress={() =>
                    navigation.navigate('Search', {tagText: tag3})
                  }>
                  <Text style={styles.tag}>{tag3}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.firstSecondLine}>
              <TouchableOpacity style={styles.profileContainer}>
                <Image
                  style={styles.profileImg}
                  source={require('../../../../../../assets/icons/ghost.png')}
                />
                <Text style={styles.profileName}>{modoRef.uploader_str}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('ContentsParticipants')}>
                <Text style={styles.participants}>
                  {modoRef.participateCount_num}명 참여중
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.second}>
            <View style={styles.secondIconContainer}>
              <Image
                style={styles.secondIcon}
                source={require('../../../../../../assets/img/night.png')}
              />
            </View>
            <Text style={styles.date}>20.11.15 ~ 11.21</Text>
          </View>
          <View style={styles.third}>
            <View style={styles.certificateImgContainer}>
              <Image
                style={styles.certificateImg}
                source={require('../../../../../../assets/img/night.png')}
              />
            </View>
            <View style={styles.thirdTextContainer}>
              <View style={styles.thirdTextLine}>
                <Text style={styles.yellowText}>인증 설명</Text>
                <Text style={styles.blackText}>{modoRef.post_str}</Text>
              </View>
              <View style={styles.thirdTextLine}>
                <Text style={styles.yellowText}>인증 요일</Text>
                <Text style={styles.blackText}>월, 화, 수, 목, 금</Text>
              </View>
              <View style={styles.thirdTextLine}>
                <Text style={styles.yellowText}>인증 시간</Text>
                <Text style={styles.blackText}>00:00~23:59</Text>
              </View>
            </View>
          </View>
          <View style={styles.fourth}>
            <View style={styles.fourthIconContainer}>
              <Image
                style={styles.fourthIcon}
                source={require('../../../../../../assets/img/night.png')}
              />
            </View>
            <View style={styles.fourthTextContainer}>
              <View style={styles.fourthTextBlock}>
                <Text style={styles.yellowText}>70% 달성</Text>
                <Text style={styles.blackText}>경험치</Text>
                <Text style={styles.blackText}>코인</Text>
              </View>
              <View>
                <Text style={styles.yellowText}>70% 달성</Text>
                <Text style={styles.blackText}>경험치</Text>
                <Text style={styles.blackText}>코인</Text>
              </View>
            </View>
          </View>
          <View style={styles.fifth}>
            <View style={styles.fifthIconContainer}>
              <Image
                style={styles.fifthIcon}
                source={require('../../../../../../assets/img/night.png')}
              />
            </View>
            <View style={styles.fifthTextContainer}>
              <Text style={styles.redText}>유의 사항</Text>
              <Text style={styles.blackText}>유의사항1</Text>
              <Text style={styles.blackText}>유의사항2</Text>
              <Text style={styles.blackText}>유의사항3</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          // //activeOpacity={1}
          //disabledStyle={{backgroundColor: 'white'}}
          //isDisabled={time>=time2}
          // isLoading={false}
          onPress={() => navigation.navigate('ContentsWrite')}>
          인증하기
        </Button>
      </View>
    </>
  );
};

export default Contents;

const styles = StyleSheet.create({
  container: {},
  thumbnailContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  first: {
    //backgroundColor: 'lightblue',
    height: 130,
    borderBottomWidth: 1,
  },
  fistFirstLine: {
    //backgroundColor: 'lightyellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '40%',
  },
  title: {
    fontSize: 30,
    alignSelf: 'flex-end',
    fontWeight:'bold'
  },
  tagContainer: {
    flexDirection: 'row',
    //backgroundColor: 'grey',
    width: '40%',
    justifyContent: 'space-between',
  },
  tagTouch: {
    justifyContent: 'flex-end',
  },
  tag: {
    fontSize:12
  },
  firstSecondLine: {
    //backgroundColor: 'pink',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    //backgroundColor: 'grey',
    alignItems: 'flex-end',
  },
  profileImg: {
    height: 30,
    width: 30,
    resizeMode:'contain'
  },
  profileName: {
    //bottom: '6%',
    marginLeft:'10%',
    fontSize:15,
    alignSelf:'center'
  },
  participants: {
    fontSize:15
  },
  second: {
    //backgroundColor: 'lightblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
  },
  secondIconContainer: {
    height: 80,
    width: 80,
  },
  secondIcon: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
  date: {
    fontSize: 21,
    alignSelf: 'center',
    fontWeight:'bold'
  },
  third: {
    //backgroundColor: 'lightblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
  },
  certificateImgContainer: {
    height: 90,
    width: 90,
  },
  certificateImg: {
    height: '100%',
    width: '100%',
  },
  thirdTextContainer: {
    //backgroundColor: 'pink',
    width: '65%',
  },
  thirdTextLine: {
    marginVertical: '3%',
  },
  yellowText: {
    textAlign: 'right',
    color: 'blue',
    fontWeight:'bold'
  },
  blackText: {
    textAlign: 'right',
  },
  fourth: {
    flexDirection: 'row',
    //backgroundColor: 'lightblue',
    justifyContent: 'space-between',
    paddingVertical: 5,
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  fourthIconContainer: {
    height: 80,
    width: 80,
  },
  fourthIcon: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
  fourthTextContainer: {
    flexDirection: 'row',
  },
  fourthTextBlock: {
    marginRight: 30,
  },
  fifth: {
    flexDirection: 'row',
    //backgroundColor: 'lightblue',
    justifyContent: 'space-between',
    paddingVertical: 20,
    alignItems: 'center',
    //borderBottomWidth:1,
  },
  fifthIconContainer: {
    height: 80,
    width: 80,
  },
  fifthIcon: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
  fifthTextContainer: {},
  redText: {
    color: 'red',
    fontWeight:'bold',
  },
  buttonContainer: {},
  button: {
    width: '100%',
    backgroundColor: '#ffcd2c',
    //'#ffcd2c',
    borderWidth: 0,
    //height: '100%',
    borderRadius: 0,
    alignSelf: 'center',
    marginBottom: -5,
  },
  buttonText: {
    //fontFamily: 'neodgm',
    fontSize: 10,
  },
});
