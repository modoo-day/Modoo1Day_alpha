import React, {useState} from 'react';
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




export default MarketStatus = ({navigation}) => {

    const [modalVisible, setModalVisible] = useState(false);

    return(
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
      <View style={styles.listContainer}>
        <TouchableOpacity
          onPress={()=>navigation.navigate('Contents')}
        >
          <Image style={styles.listImage} source={
            //   {uri: imgUrl}
            require('../../../../assets/img/night.png')
            } 
          />
        </TouchableOpacity>
        <View style={styles.listTextContainer}>
          <View style={styles.listTitleContainer}>
            <Text style={styles.listTitle}>
                {/* {info.title_str} */}
                물 마시기
            </Text>
          </View>
          <TouchableOpacity style={styles.listTagContainer}>
            <Text style={styles.listTag}>
              {/* {info.interestsArr.map((dt) => {
                return '#'.concat(dt+' ');
              })} */}
              #물
            </Text>
          </TouchableOpacity>
          <View style={styles.listBottomTextContainer}>
            <View style={styles.profileContainer}>
              <Image
                style={styles.profileIcon}
                source={require('../../../../assets/icons/profile.png')}
              />
              <Text style={styles.author}>
                  {/* {usrData.name} */}
                  엄예진
                  </Text>
            </View>
            <Text style={styles.participants}>
              {/* {info.participate_count_num} */}
              1000명 참여
            </Text>
          </View>
        </View>
      </View>
      {/* <QuickViewChild {...hotDataFirst} />
      <QuickViewChild {...hotDataSecond} /> */}

      {/* 신규 콘텐츠 */}
      {/* <View style={styles.category}>
        <Text style={styles.categoryText}>신규 모두 ✨</Text>
      </View>
      <QuickViewChild {...newDataFirst} />
      <QuickViewChild {...newDataSecond} /> */}

      {/* 추천 콘텐츠 */}
      {/* <View style={styles.category}>
        <Text style={styles.categoryText}>추천 모두 🍳</Text>
      </View>
      <QuickViewChild {...recDataFirst} />
      <QuickViewChild {...recDataSecond} /> */}
    </ScrollView>
    )
}


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

})