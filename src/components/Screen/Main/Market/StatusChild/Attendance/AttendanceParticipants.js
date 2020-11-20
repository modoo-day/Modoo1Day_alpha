import React, {useEffect, useState} from 'react';
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native'


const AttendanceParticipants = ({route}) => {

    const [day, setDay] = useState('')

    React.useEffect(() => {
        if (route.params?.day) {
          // Post updated, do something with `route.params.post`
          // For example, send the post to the server
          setDay(route.params.day)
        }
      }, [route.params?.day]);

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.top}>
                <View style={{flex:1}}></View>
                <Text style={styles.day}>DAY {day}</Text>
                <Text style={styles.participants}>참여자 10명</Text>
            </View>
            <View style={styles.attendanceContainer}>
                <View style={styles.attendanceTextContainer}>
                    <Text style={styles.attendanceText}>출석 3/10</Text>
                </View>
                <View style={styles.profileListContainer}>
                    <View style={styles.profileContainer}>
                        <Image style={styles.profileImg} source={require('../../../../../../assets/img/night.png')}/>
                        <View style={styles.idContainer}>
                            <Text style={styles.id}>아이디</Text>
                        </View>
                    </View>
                    <View style={styles.profileContainer}>
                        <Image style={styles.profileImg} source={require('../../../../../../assets/img/night.png')}/>
                        <View style={styles.idContainer}>
                            <Text style={styles.id}>아이디</Text>
                        </View>
                    </View>
                    <View style={styles.profileContainer}>
                        <Image style={styles.profileImg} source={require('../../../../../../assets/img/night.png')}/>
                        <View style={styles.idContainer}>
                            <Text style={styles.id}>아이디</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.attendanceContainer}>
                <View style={styles.attendanceTextContainer}>
                    <Text style={styles.attendanceText}>결석 3/10</Text>
                </View>
                <View style={styles.profileListContainer}>
                    <View style={styles.profileContainer}>
                        <Image style={styles.profileImg} source={require('../../../../../../assets/img/night.png')}/>
                        <View style={styles.idContainer}>
                            <Text style={styles.id}>아이디</Text>
                        </View>
                    </View>
                    <View style={styles.profileContainer}>
                        <Image style={styles.profileImg} source={require('../../../../../../assets/img/night.png')}/>
                        <View style={styles.idContainer}>
                            <Text style={styles.id}>아이디</Text>
                        </View>
                    </View>
                    <View style={styles.profileContainer}>
                        <Image style={styles.profileImg} source={require('../../../../../../assets/img/night.png')}/>
                        <View style={styles.idContainer}>
                            <Text style={styles.id}>아이디</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default AttendanceParticipants;

const styles = StyleSheet.create({
    container:{
        width:'95%',
        alignSelf:'center'
    },
    top:{  
        //backgroundColor:'pink',
        flexDirection:'row',
        paddingVertical:30,
        justifyContent:'space-between',
        alignItems:'center'
    },
    day:{
        flex:1,
        textAlign:'center',
        fontSize:30,
    },
    participants:{
        flex:1,
        textAlign:'right'
    },
    attendanceContainer:{
        //backgroundColor:'lightblue'
    },
    attendanceTextContainer:{
        height:100,
        justifyContent:'center'
    },
    attendanceText:{
        fontSize:25,
        //fontWeight:'bold'
    },
    profileListContainer:{
        //backgroundColor:'lightgreen',
        flexDirection:'row',
        flexWrap:'wrap',
        borderRadius:10,
        borderWidth:1,
        marginBottom:'5%'
    },
    profileContainer:{
        //backgroundColor:'lightyellow',
        flexDirection:'row',
        width:'50%',
        justifyContent:'space-between',
        padding:'3%',
        alignItems:'center',
        borderRadius:30
    },
    profileImg:{
        height:60,
        width:60,
        borderRadius:50,
    },
    idContainer:{
       // backgroundColor:'lightgrey',
        width:'50%',
        alignItems:'center'
    },
    id:{
        fontSize:15
    },
})