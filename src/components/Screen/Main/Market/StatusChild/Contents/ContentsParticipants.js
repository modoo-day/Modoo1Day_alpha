import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,

    } from 'react-native';


const ContentsParticipants = ({navigation}) => {
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.participantsNumContainer}>
                <Text style={styles.participantsNum}>참여자 10명</Text>
            </View>
            <View style={styles.list}>
                <View style={styles.profileImgContainer}>
                    <Image style={styles.profileImg} source={require('../../../../../../assets/img/night.png')} />
                </View>
                <View style={styles.profileTextContainer}>
                    <Text style={styles.profileText}>아이디</Text>
                </View>
                <View style={styles.profileThird}>

                </View>
            </View>
        </ScrollView>
    )
}

export default ContentsParticipants;

const styles = StyleSheet.create({
    container:{
        width:'95%',
        alignSelf:'center'
    },
    participantsNumContainer:{
        alignSelf:'flex-end',
        marginTop:'5%'
    },
    participantsNum:{

    },
    list:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    profileImgContainer:{
        width:80,
        height:80
    },
    profileImg:{
        height:'100%',
        width:'100%',
        borderRadius:50
    },
    profileTextContainer:{

    },
    profileText:{

    },
    profileThird:{
        height:50,
        width:'50%',
        backgroundColor:'grey',
        borderRadius:10
    },
})