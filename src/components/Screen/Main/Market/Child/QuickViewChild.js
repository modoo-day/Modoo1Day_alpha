import React, {useState, useEffect} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import storage from '@react-native-firebase/storage';

const QuickViewChild = (info) => {
  
  const navigation = useNavigation();

  const [usrImgUrl, setUsrImgUrl] = useState(
    'https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png',
  );

  const processUserProfileImg = () => {
    if (info._data == undefined) {
      return;
    }
    let userImgStorageUrl = info._data.uploaderImg_str;
    storage()
      .refFromURL(userImgStorageUrl)
      .getDownloadURL()
      .then((url) => {
        // console.log('봐라', url);
        setUsrImgUrl(url);
      });
  };
  useEffect(() => {
    processUserProfileImg();
  }, [info]);

  // 아직 로딩중이면.
  if (info._data == undefined) {
    return (
      <View style={styles.listContainer}>
        <TouchableOpacity
          onPress={() => {
            console.log('아직 로딩중');
          }}>
          <Image
            style={styles.listImage}
            source={require('../../../../../assets/img/night.png')}
          />
        </TouchableOpacity>
        <View style={styles.listTextContainer}>
          <View style={styles.listTitleContainer}>
            <Text style={styles.listTitle}>로딩중</Text>
          </View>
          <TouchableOpacity style={styles.listTagContainer}>
            <Text style={styles.listTag}>로딩중</Text>
          </TouchableOpacity>
          <View style={styles.listBottomTextContainer}>
            <View style={styles.profileContainer}>
              <Image
                style={styles.profileIcon}
                source={require('../../../../../assets/icons/profile.png')}
              />
              <Text style={styles.author}>로딩중</Text>
            </View>
            <Text style={styles.participants}>로딩중</Text>
          </View>
        </View>
      </View>
    );
  }
  // 로딩 완료면
  else {
    // console.log(info._data.title_str);
    return (
      <View style={styles.listContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('StatusRoute', {
              screen: 'Contents',
              params: {ref: info._data},
            })
          }>
          <Image
            style={styles.listImage}
            source={{
              uri:
                'https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png',
            }}
          />
        </TouchableOpacity>
        <View style={styles.listTextContainer}>
          <View style={styles.listTitleContainer}>
            <Text style={styles.listTitle}>{info._data.title_str}</Text>
          </View>
          <TouchableOpacity style={styles.listTagContainer}>
            <Text style={styles.listTag}>
              {info._data.interestsArr.map((dt) => {
                return '#'.concat(dt + ' ');
              })}
            </Text>
          </TouchableOpacity>
          <View style={styles.listBottomTextContainer}>
            <View style={styles.profileContainer}>
              <Image
                style={styles.profileIcon}
                // source={require('../../../../../assets/icons/profile.png')}
                source={{uri: usrImgUrl}}
              />
              <Text style={styles.author}>{info._data.uploader_str}</Text>
            </View>
            <Text style={styles.participants}>
              {info._data.participateCount_num}명 참여
            </Text>
          </View>
        </View>
      </View>
    );
  }
};
export default QuickViewChild;
const styles = StyleSheet.create({
  // 모달창
  modalContainer: {
    backgroundColor: 'white',
    width: '100%',
    flex: 0.937,
  },
  backIconContainer: {
    height: '10%',
    justifyContent: 'center',
    marginLeft: '4%',
  },
  backIconTouch: {
    // backgroundColor:'pink',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 33,
    height: 33,
  },
  bigBannerContainer: {
    height: '87.5%',
  },
  bigBannerImage: {
    //배너 누르면 나오는 큰 이미지를 말합니다.
    flex: 0.65,
    width: '100%',
  },
  bannerText: {
    marginTop: '5%',
  },
  bannerImage: {
    width: '100%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  //콘텐츠 카테고리
  category: {
    marginTop: '8%',
    marginBottom: '4%',
    marginLeft: '4%',
  },
  categoryText: {
    fontFamily: 'neodgm',
    fontSize: 15,
  },
  newCon_container: {},
  //스크롤 리스트
  listContainer: {
    // backgroundColor:'lightgreen',
    flex: 1,
    flexDirection: 'row',
    marginBottom: '5%',
    marginHorizontal: '5%',
  },
  listImage: {
    width: 120,
    height: 120,
  },
  listTextContainer: {
    flex: 1,
    paddingLeft: '5%',
  },
  listTitleContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    //backgroundColor:'grey'
  },
  listTitle: {
    fontFamily: 'neodgm',
    fontSize: 18,
  },
  listTagContainer: {
    //backgroundColor:'pink',
    bottom: '10%',
    marginRight: '80%',
    width: '100%',
  },
  listTag: {
    fontFamily: 'neodgm',
    fontSize: 16,
  },
  listBottomTextContainer: {
    // backgroundColor:'lightblue',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  profileIcon: {
    width: 20,
    height: 20,
    marginRight: '5%',
  },
  author: {
    fontFamily: 'neodgm',
    fontSize: 15,
  },
  participants: {
    fontSize: 15,
    fontFamily: 'neodgm',
  },
});
