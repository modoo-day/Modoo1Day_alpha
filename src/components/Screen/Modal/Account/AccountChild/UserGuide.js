import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,

}from 'react-native';

const UserGuide = () => {
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.one}>
                <Text style={styles.title}>회원 및 혜택</Text>
                <View style={styles.contentsTextContainer}>
                    <Text style={styles.contents}>모두의 하루 회원이 되시면</Text>
                    <Text style={styles.contents}>즉시 게시판 이용 및 다양한 모두 콘텐츠 참여,</Text>
                    <Text style={styles.contents}>각종 리워드 혜택을 받으실 수 있습니다.</Text>
                    <Text style={styles.contents}>로그인 후 나의 경험치, 레벨 캐릭터 등을 확인해보세요!</Text>
                </View>
            </View>
            <View style={styles.one}>
                <Text style={styles.title}>시장</Text>
                <View style={styles.contentsTextContainer}>
                    <Text style={styles.contents}>당신이 원하는 습관 목표 "모두"를 골라보세요!</Text>
                    <Text style={styles.contents}>혼자서도, 다른 사람들과도 함께 할 수 있는</Text>
                    <Text style={styles.contents}>"모두"가 당신을 기다립니다.</Text>
                </View>
            </View>
            <View style={styles.one}>
                <Text style={styles.title}>성장</Text>
                <View style={styles.contentsTextContainer}>
                    <Text style={styles.contents}>[모두 개설]</Text>
                    <Text style={styles.contents}>당신이 원하는 습관 목표 모두를 개설해보세요.</Text>
                    <Text style={styles.contents}>[모두 확인]</Text>
                    <Text style={styles.contents}>진행 중, 진행을 기다리는 "모두"를 확인할 수 있습니다.</Text>
                    <Text style={styles.contents}>[옷장]</Text>
                    <Text style={styles.contents}>당신의 캐릭터를 변경하고 꾸밀 수 있습니다.</Text>
                </View>
            </View>
            <View style={styles.one}>
                <Text style={styles.title}>인증/피드</Text>
                <View style={styles.contentsTextContainer}>
                    <Text style={styles.contents}>[인증]</Text>
                    <Text style={styles.contents}>당신과 같은 습관 목표를 달성하는</Text>
                    <Text style={styles.contents}>동료 유저들의 인증샷을 구경하고 응원해 주세요!</Text>
                    <Text style={styles.contents}>[피드]</Text>
                    <Text style={styles.contents}>다양한 유저들의 다양한 습관 목표 달성을 구경, 응원해 주세요!</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default UserGuide;

const styles = StyleSheet.create({
    container:{
        width:'95%',
        alignSelf:'center'
    },
    one:{
        backgroundColor: '#ffcd2c',
        borderRadius:10,
        //height:140,
        padding:10,
        //justifyContent:'space-between',
        marginTop:'5%'
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
    },
    contentsTextContainer:{
        marginTop:'2%'
    },
    contents:{

    },
})