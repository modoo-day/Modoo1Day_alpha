import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    } from 'react-native';
import Button from 'apsl-react-native-button';
import ProgressBar from 'react-native-progress/Bar';
import Dash from 'react-native-dash';

    
const Attendance = ({navigation}) => {

    const [date, setDate] = useState(0);

    return(
        <>
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.top}>
                <Text style={styles.progressText}>전체 달성률 85%</Text>
                <View style={styles.progressContainer}>
                        <ProgressBar 
                            progress={0.85}
                            width={null}
                            height={13}
                            borderRadius={50}
                        />
                </View>
            </View>
            
            <View style={styles.mid}>
                <View style={styles.oneCheck}>
                    <View style={styles.besideCircle}></View>
                    <TouchableOpacity
                        style={date >= 1? styles.activeCircle : styles.circle}
                        onPress={()=> navigation.navigate('AttendanceParticipants', {day:1})}
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
                <Dash style={styles.dashStyle}/>
                <View style={styles.oneCheck}>
                    <View style={styles.besideCircle}></View>
                    <TouchableOpacity
                        style={date >= 2? styles.activeCircle : styles.circle}
                        onPress={()=> navigation.navigate('AttendanceParticipants', {day:2})}
                    >
                    </TouchableOpacity>
                    <View style={styles.besideCircle}>
            
                    </View>
                </View>
                <Dash style={styles.dashStyle}/>
                <View style={styles.oneCheck}>
                    <View style={styles.besideCircle}></View>
                    <TouchableOpacity
                        style={date >= 3? styles.activeCircle : styles.circle}
                        onPress={()=> navigation.navigate('AttendanceParticipants', {day:3})}
                    >
                    </TouchableOpacity>
                    <View style={styles.besideCircle}>
            
                    </View>
                </View>  
                <Dash style={styles.dashStyle}/>
                <View style={styles.oneCheck}>
                    <View style={styles.besideCircle}></View>
                    <TouchableOpacity
                        style={date >= 4? styles.activeCircle : styles.circle}
                        onPress={()=> navigation.navigate('AttendanceParticipants', {day:4})}
                    >
                    </TouchableOpacity>
                    <View style={styles.besideCircle}>
            
                    </View>
                </View>  
                <Dash style={styles.dashStyle}/>
                <View style={styles.oneCheck}>
                    <View style={styles.besideCircle}></View>
                    <TouchableOpacity
                        style={date >= 5? styles.activeCircle : styles.circle}
                        onPress={()=> navigation.navigate('AttendanceParticipants', {day:5})}
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
                <Dash style={styles.dashStyle}/>
                <View style={styles.oneCheck}>
                    <View style={styles.besideCircle}></View>
                    <TouchableOpacity
                        style={date >= 6? styles.activeCircle : styles.circle}
                        onPress={()=> navigation.navigate('AttendanceParticipants', {day:6})}
                    >
                    </TouchableOpacity>
                    <View style={styles.besideCircle}>
            
                    </View>
                </View>  
                <Dash style={styles.dashStyle}/>
                <View style={styles.oneCheck}>
                    <View style={styles.besideCircle}></View>
                    <TouchableOpacity
                        style={date >= 7? styles.activeCircle : styles.circle}
                        onPress={()=> navigation.navigate('AttendanceParticipants', {day:7})}
                    >
                    </TouchableOpacity>
                    <View style={styles.besideCircle}>
            
                    </View>
                </View>     
                <Dash style={styles.dashStyle}/>
                <View style={styles.oneCheck}>
                    <View style={styles.besideCircle}></View>
                    <TouchableOpacity
                        style={date >= 7? styles.activeCircle : styles.circle}
                        onPress={()=> navigation.navigate('AttendanceParticipants', {day:8})}
                    >
                    </TouchableOpacity>
                    <View style={styles.besideCircle}>
            
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
                onPress={() => setDate(1) }
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
        //backgroundColor:'pink',
        height:100,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    progressText:{
        fontSize:15,
        fontWeight:'bold'
    },
    progressContainer:{
        height:30,
        width:'80%',
        //backgroundColor:'grey',
        borderRadius:50,
        marginTop:'5%'
    },
    mid:{
        //backgroundColor:'lightblue',
        
    },
    oneCheck:{
       // backgroundColor:'lightgreen',
        flexDirection:'row',
        //justifyContent:'center',
        //paddingVertical:20
    },
    circle:{
        height:45,
        width:45,
        backgroundColor:'grey',
        borderRadius:50,
        borderWidth:3,
        alignSelf:'center'
    },
    activeCircle:{
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
    dashStyle:{
        width:1, 
        height:30, 
        flexDirection:'column', 
        alignSelf:'center'  
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