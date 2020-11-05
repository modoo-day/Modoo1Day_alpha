import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  Modal,
  TouchableOpacity,
} from 'react-native';
import QuickViewChild from './Child/QuickViewChild';
import firestore from '@react-native-firebase/firestore';

const MarketStatus = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [hotDataA, setHotDataA] = useState({});
  const [hotDataB, setHotDataB] = useState({});
  const [newDataA, setNewDataA] = useState({});
  const [newDataB, setNewDataB] = useState({});
  const [recDataA, setRecDataA] = useState({});
  const [recDataB, setRecDataB] = useState({});
  const MODOOD = 1;
  const modooDataRef = firestore().collection('MODOOS_DATA');
  const refreshMain = () => {
    // Data들 파베에서 불러오기.
    // 인기 모두 불러오기 (참여자 수 내림차순)
    console.log('REFRESHMAIN 시작');
    modooDataRef
      .orderBy('participateCount_num', 'desc')
      .limit(2)
      .get()
      .then((snst) => {
        console.log('HotData 받아옴');
        setHotDataA(snst._docs[0]._data);
        setHotDataB(snst._docs[1]._data);
      })
      .catch((err) => {
        console.log(err);
      });

    // 최신 모두 불러오기 (타임스탬프 내림차순)
    modooDataRef
      .orderBy('upload_time', 'desc')
      .limit(2)
      .get()
      .then((snst) => {
        console.log('NewData 받아옴');
        setNewDataA(snst._docs[0]._data);
        setNewDataB(snst._docs[1]._data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    refreshMain();
  }, []);

  return (
    <ScrollView>
      {/* 광고 배너 */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.backIconContainer}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              style={styles.backIconTouch}>
              <Image
                style={styles.backIcon}
                source={require('../../../../assets/icons/refresh.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.bigBannerContainer}>
            <Image
              style={styles.bigBannerImage}
              source={require('../../../../assets/img/night.png')}
            />
            <Text style={styles.bannerText}>내가 광고주다 ㅋㅋㄹㅃㅃ</Text>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <Image
          style={styles.bannerImage}
          source={require('../../../../assets/img/night.png')}
        />
      </TouchableOpacity>

      {/* 인기콘텐츠 */}
      <View style={styles.category}>
        <Text style={styles.categoryText}>인기 모두 🔥</Text>
      </View>

      <QuickViewChild {...hotDataA} />
      <QuickViewChild {...hotDataB} />

      {/* 신규 콘텐츠 */}
      <View style={styles.category}>
        <Text style={styles.categoryText}>신규 모두 ✨</Text>
      </View>
      <QuickViewChild {...newDataA} />
      <QuickViewChild {...newDataB} />

      {/* 추천 콘텐츠 */}
      <View style={styles.category}>
        <Text style={styles.categoryText}>추천 모두 🍳</Text>
      </View>
      <QuickViewChild {...recDataA} />
      <QuickViewChild {...recDataB} />
    </ScrollView>
  );
};
export default MarketStatus;
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
    flex: 115,
    justifyContent: 'center',
  },
  listTitle: {
    top: '5%',
    fontFamily: 'neodgm',
    fontSize: 18,
  },
  listTagContainer: {
    //backgroundColor:'pink',
    bottom: '10%',
    marginRight: '80%',
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
