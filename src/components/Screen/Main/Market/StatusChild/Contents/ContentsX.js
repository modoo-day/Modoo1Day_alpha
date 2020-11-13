import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    View,
    Image,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
import Button from 'apsl-react-native-button';


export default Contents = () => {
    
    const navigation = useNavigation();

    return(
        <ScrollView >
            <View style={styles.topMargin}></View>
            <View style={styles.container}>
            <View style={styles.first}>
              <Image style={styles.listImage} source={require('../../../../../../assets/img/night.png')}/>
              <View style={styles.listTextContainer}>
                <View style={styles.listTitleContainer}>
                  <Text style={styles.listTitle}>물 마시기</Text>
                </View>
                <View style={styles.listTagContainer}>
                    <TouchableOpacity style={styles.listTagTouch}>
                        <Text style={styles.listTag}>#물</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listTagTouch}>
                        <Text style={styles.listTag}>#물</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listTagTouch}>
                        <Text style={styles.listTag}>#물</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listBottomTextContainer}>
                  <View style={styles.profileContainer}>
                    <Image style={styles.profileIcon} source={require('../../../../../../assets/icons/profile.png')}/>
                    <Text style={styles.author}>ㅂㅇㅅ</Text>
                  </View>
                  <Text style={styles.participants}>1000000만명 참여</Text>
                </View>
              </View>
            </View>

            <View style={styles.second}>
              <Image style={styles.listImage} source={require('../../../../../../assets/img/night.png')}/>
              <View style={styles.listTextContainer}>
                <View style={styles.secondLineContainer}>
                    <Text style={styles.secondCategoryText}>참여 기간</Text>
                    <Text style={styles.deadline}>10.31 ~ 11.06</Text>
                </View>
                <View style={styles.secondLineContainer}>
                    <Text style={styles.secondCategoryText}>인증</Text>
                    <Text style={styles.secondInfoText}>마시는 물이 보이게끔 찍어주세요</Text>
                </View>
                <View style={styles.secondLineContainer}>
                    <Text style={styles.secondCategoryText}>인증 요일</Text>
                    <Text style={styles.secondInfoText}>월, 화, 수, 목, 금, 토</Text>
                </View>
                <View style={styles.secondLineContainer}>
                    <Text style={styles.secondCategoryText}>인증 시간</Text>
                    <Text style={styles.secondInfoText}>00:00 ~ 23.59</Text>
                </View>
              </View>
            </View>

          
          <View style={styles.third}>
              <Image style={styles.listImage} source={require('../../../../../../assets/img/night.png')}/>
              <View style={styles.listTextContainer}>
                <View style={styles.thirdLineContainer}>
                        <Text style={styles.thirdLineText1}>70%이상 달성 시</Text>
                        <Text style={styles.thirdLineText1}>100%이상 달성 시</Text>
                    </View>
                    <View style={styles.third23LineContianer}>
                        <View style={styles.thirdLineContainer}>
                            <Text style={styles.thirdLineText2}>2경험치 (1경험치)</Text>
                            <Text style={styles.thirdLineText2}>5경험치 (3경험치)</Text>
                        </View>
                        <View style={styles.thirdLineContainer}>
                            <Text style={styles.thirdLineText2}>2코인 (2코인)</Text>
                            <Text style={styles.thirdLineText2}>5코인 (3코인)</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.fourth}>
              <Image style={styles.listImage} source={require('../../../../../../assets/img/night.png')}/>
              <View style={styles.listTextContainer}>
                <View style={styles.fourthLineContainer}>
                        <Text style={styles.fourthTitleText}>유의 사항</Text>
                    </View>
                    <View style={styles.fourthLineContainer}>
                        <Text style={styles.fourthText}>인증 가이드 사진에 맞춰서 찍어야합니다.</Text>
                    </View>
                    <View style={styles.fourthLineContainer}>
                        <Text style={styles.fourthText}>중복된 사진은 경고를 받게 될 수 있습니다.</Text>
                    </View>
                    <View style={styles.fourthLineContainer}>
                        <Text style={styles.fourthText}>리뷰를 남겨주셔야 리워드를 받을 수 있습니다.</Text>
                    </View>
                </View>
            </View>
            </View>
            <View style={styles.buttonContainer}>

              <Button 
                style={styles.button} 
                textStyle={styles.buttonText}
                //activeOpacity={1}
                disabledStyle={{backgroundColor:'white'}}
                isDisabled={false}
                isLoading={false}
                onPress={()=>navigation.navigate('ContentsWrite')}
                >
                  인증 하기
              </Button>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        marginHorizontal:'5%'
    },
    topMargin:{
      height:'6%'
    },
    first:{
      // backgroundColor:'lightgreen',
      flex:1,
      flexDirection:'row',
      marginBottom:'5%',
    //   marginHorizontal:'5%'
    },
    listImage:{
        width:120,
        height:120
    },
    listTextContainer:{
      flex:1,
      paddingLeft:'5%'
    },
    listTitleContainer:{
      flex:115,
    },
    listTitle:{
      top:'5%',
      fontFamily:'neodgm',
      fontSize:25
    },
    listTagContainer:{
      flex:1,
      flexDirection:'row',
    },
    listTagTouch:{
      //backgroundColor:'pink',
      bottom:'15%',
      marginRight:'12%'
    },
    listTag:{
      fontFamily:'neodgm',
      fontSize:16
    },
    listBottomTextContainer:{
      // backgroundColor:'lightblue',
      flex:1,
      flexDirection:'column'
    },
    profileContainer:{
      flex:1,
      flexDirection:'row'
    },
    profileIcon:{
      width:20,
      height:20,
      marginRight:'5%'
    },
    author:{
      fontFamily:'neodgm',
      fontSize:10,
    },
    participants:{
      fontSize:10,
      fontFamily:'neodgm',
    },
    second:{
      // backgroundColor:'lightgreen',
      flex:1,
      flexDirection:'row',
      marginBottom:'5%',
    //   marginHorizontal:'5%'
    },
    secondLineContainer:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      //backgroundColor:'pink'
    },
    secondCategoryText:{
      fontFamily:'neodgm',
      fontSize:10
    },
    deadline:{
      fontFamily:'neodgm',
      fontSize:10
    },
    secondInfoText:{
      fontFamily:'neodgm',
      fontSize:10
    },
    third:{
      // backgroundColor:'lightgreen',
      flex:1,
      flexDirection:'row',
      marginBottom:'5%',
    //   marginHorizontal:'5%'
    },
    thirdLineContainer:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
    },
    third23LineContianer:{
      //backgroundColor:'pink'
    },
    thirdLineText1:{
      fontFamily:'neodgm',
      fontSize:10
    },
    thirdLineText2:{
      fontFamily:'neodgm',
      fontSize:10,
      marginTop:'2%'
    },
    fourth:{
      // backgroundColor:'lightgreen',
      flex:1,
      flexDirection:'row',
      marginBottom:'5%',
    //   marginHorizontal:'5%'
    },
    fourthLineContainer:{
      flex:0.8
    },
    fourthTitleText:{
      fontSize:10,
      fontFamily:'neodgm',
  
    },
    fourthText:{
      fontSize:10,
      fontFamily:'neodgm',
    },
    buttonContainer:{
        height:110,
        //backgroundColor:'pink'
    },
    button: {
      width: '105%',
      backgroundColor: '#ffcd2c',
      borderWidth: 2,
      //height: '35%',
      //marginTop: '4%',
      borderRadius:0,
      alignSelf:'center'
    },
    buttonText: {
      fontFamily: 'neodgm',
      fontSize: 10,
    },
  });
  