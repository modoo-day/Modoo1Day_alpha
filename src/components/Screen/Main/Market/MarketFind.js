import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      img:require('../../../../assets/img/night.png'),
      tag:'#물',
      author:'김대기 기자',
      participants:'1000'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      img:require('../../../../assets/img/night.png'),
      tag:'#물',
      author:'김대기 기자',
      participants:'1000'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      img:require('../../../../assets/img/night.png'),
      tag:'#물',
      author:'김대기 기자',
      participants:'1000'
    },
  ];

  



export default MarketFind = ({navigation}) => {


    const Item = ({ title, img, tag, author, participants }) => (
        <View style={styles.listContainer}>
            <TouchableOpacity
              onPress={()=>navigation.navigate('Contents')}
            >
              <Image style={styles.listImage} source={
                //   {uri: imgUrl}
                img
                }
              />
            </TouchableOpacity>
            <View style={styles.listTextContainer}>
              <View style={styles.listTitleContainer}>
                <Text style={styles.listTitle}>
                    {/* {info.title_str} */}
                    {title}
                </Text>
              </View>
              <TouchableOpacity style={styles.listTagContainer}>
                <Text style={styles.listTag}>
                  {/* {info.interestsArr.map((dt) => {
                    return '#'.concat(dt+' ');
                  })} */}
                  {tag}
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
                      {author}
                      </Text>
                </View>
                <Text style={styles.participants}>
                  {/* {info.participate_count_num} */}
                  {participants}명 참여
                </Text>
              </View>
            </View>
          </View>
      );

    const renderItem = ({ item }) => (
        <Item
            title={item.title}
            img={item.img}
            tag={item.tag}
            author={item.author}
            participants={item.participants}
        />

    );

    return(
        <View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}


const styles = StyleSheet.create({
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