import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    
    } from 'react-native'
import Button from 'apsl-react-native-button';


const Contents = ({navigation}) =>{
    return(
        <>
        <ScrollView contentContainerStyle = {styles.container}>
            <View style={styles.thumbnailContainer}>
                <Image style={styles.thumbnail} source={require('../../../../../../assets/img/night.png')} />
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.first}>
                    <View style={styles.fistFirstLine}>
                        <Text style={styles.title}>물 마시기</Text>
                        <View style={styles.tagContainer}>
                            <TouchableOpacity
                                style={styles.tagTouch}
                            >
                                <Text style={styles.tag}>#물</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.tagTouch}
                            >
                                <Text style={styles.tag}>#물</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.tagTouch}
                            >
                                <Text style={styles.tag}>#물</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.firstSecondLine}>
                        <TouchableOpacity style={styles.profileContainer}>
                            <Image style={styles.profileImg} source={require('../../../../../../assets/img/night.png')} />
                            <Text style={styles.profileName}>엄예진</Text>
                        </TouchableOpacity>
                        <Text style={styles.participants}>1000명 참여중</Text>
                    </View>
                </View>
                <View style={styles.second}>
                    <View style={styles.secondIconContainer}>
                        <Image style={styles.secondIcon} source={require('../../../../../../assets/img/night.png')}/>
                    </View>
                    <Text style={styles.date}>20.11.15 ~ 11.21</Text>
                </View>
                <View style={styles.third}>
                    <View style={styles.certificateImgContainer}>
                        <Image style={styles.certificateImg} source={require('../../../../../../assets/img/night.png')} />
                    </View>
                    <View style={styles.thirdTextContainer}>
                        <View style={styles.thirdTextLine}>
                            <Text style={styles.yellowText}>인증 설명</Text>
                            <Text style={styles.blackText}>맛있게 보이는 물을 마시는 물이 보이게끔 찍어주세요</Text>
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
                        <Image style={styles.fourthIcon} source={require('../../../../../../assets/img/night.png')}/>
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
                        <Image style={styles.fifthIcon} source={require('../../../../../../assets/img/night.png')} />
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
                onPress={() => navigation.navigate('ContentsWrite') }
            >
                인증하기
            </Button>
        </View>
        </>
    )
}

export default Contents;

const styles = StyleSheet.create({
    container:{

    },
    thumbnailContainer:{
        width:'100%',
        aspectRatio:16/9
    },
    thumbnail:{
        width:'100%',
        height:'100%'
    },
    infoContainer:{
        width:'90%',
        alignSelf:'center'
    },
    first:{
        backgroundColor:'lightblue',
        height:130,
        borderBottomWidth:1
    },
    fistFirstLine:{
        backgroundColor:'lightyellow',
        flexDirection:'row',
        justifyContent:'space-between',
        height:'40%'
    },
    title:{
        fontSize:30,
        alignSelf:'flex-end'
    },
    tagContainer:{
        flexDirection:'row',
        backgroundColor:'grey',
        width:'35%',
        justifyContent:'space-between'
    },
    tagTouch:{
        justifyContent:'flex-end'
    },
    tag:{

    },
    firstSecondLine:{
        backgroundColor:'pink',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    profileContainer:{
        flexDirection:'row',
        backgroundColor:'grey',
        alignItems:'flex-end'
    },
    profileImg:{
        height:30,
        width:30,
    },
    profileName:{
        bottom:'6%'
    },
    participants:{

    },
    second:{
        backgroundColor:'lightblue',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:5,
        borderBottomWidth:1
    },
    secondIconContainer:{
        height:80,
        width:80
    },
    secondIcon:{
        height:'100%',
        width:'100%',
        borderRadius:50
    },
    date:{
        fontSize:20,
        alignSelf:'center'
    },
    third:{
        backgroundColor:'lightblue',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:20,
        borderBottomWidth:1,
    },
    certificateImgContainer:{
        height:90,
        width:90
    },
    certificateImg:{
        height:'100%',
        width:'100%',
    },
    thirdTextContainer:{
        backgroundColor:'pink',
        width:'65%'
    },
    thirdTextLine:{
        marginVertical:'3%'
    },
    yellowText:{
        textAlign:'right',
        color:'blue',
    },
    blackText:{
        textAlign:'right'
    },
    fourth:{
        flexDirection:'row',
        backgroundColor:'lightblue',
        justifyContent:'space-between',
        paddingVertical:5,
        alignItems:'center',
        borderBottomWidth:1,
    },
    fourthIconContainer:{
        height:80,
        width:80
    },
    fourthIcon:{
        height:'100%',
        width:'100%',
        borderRadius:50
    },
    fourthTextContainer:{
        flexDirection:'row',
    },
    fourthTextBlock:{
        marginRight:30
    },
    fifth:{
        flexDirection:'row',
        backgroundColor:'lightblue',
        justifyContent:'space-between',
        paddingVertical:20,
        alignItems:'center',
        //borderBottomWidth:1,
    },
    fifthIconContainer:{
        height:80,
        width:80
    },
    fifthIcon:{
        height:'100%',
        width:'100%',
        borderRadius:50
    },
    fifthTextContainer:{

    },
    redText:{
        color:'red'
    },
    buttonContainer:{

    },
    button:{
        width: '100%',
        backgroundColor: '#ffcd2c', 
        //'#ffcd2c',
        borderWidth: 2,
        //height: '100%',
        borderRadius: 0,
        alignSelf: 'center',
        marginBottom:-5
    },
    buttonText:{
        //fontFamily: 'neodgm',
        fontSize: 10,
    }
})