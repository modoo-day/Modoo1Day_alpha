import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    } from 'react-native';
import Button from 'apsl-react-native-button';

    
const Attendance = ({navigation}) => {
    return(
        <>
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.top}>
                <Text style={styles.progressText}>전체 달성률 85%</Text>
                <View style={styles.progressContainer}>

                </View>
            </View>
            <View style={styles.mid}>
                <View style={styles.oneCheck}>
                    <View style={styles.besideCircle}></View>
                    <TouchableOpacity
                        style={styles.circle}
                        onPress={()=>navigation.navigate('AttendanceParticipants')}
                    >
                    </TouchableOpacity>
                    <View style={styles.besideCircle}>
                        <Text style={styles.exp}>
                            EXP
                        </Text>
                        <Text style={styles.coin}>
                            COIN
                        </Text>
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
                //onPress={() => navigation.navigate('ContentsWrite') }
            >
                인증하기
            </Button>
        </View>
        </>
    )
}

export default Attendance;

const styles = StyleSheet.create({
    top:{
        backgroundColor:'pink',
        height:100,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    progressText:{

    },
    progressContainer:{
        height:30,
        width:'80%',
        backgroundColor:'grey',
        borderRadius:50,
        marginTop:'5%'
    },
    mid:{
        backgroundColor:'lightblue',
        
    },
    oneCheck:{
        backgroundColor:'lightgreen',
        flexDirection:'row',
        //justifyContent:'center',
        paddingVertical:20
    },
    circle:{
        height:45,
        width:45,
        backgroundColor:'#fdd835',
        borderRadius:50,
        borderWidth:3,
        alignSelf:'center'
    },
    besideCircle:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    exp:{
        marginLeft:'10%'
    },
    coin:{
        marginLeft:'10%'
    },
    buttonContainer:{

    },
    button:{
        width: '100%',
        backgroundColor: '#ffcd2c', 
        //'#ffcd2c',
        borderWidth: 0,
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