import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from 'apsl-react-native-button';



const OpenD = ({navigation}) => {

    const [timePicker, setTimePicker] = useState(false);
    const [time, setTime] = useState(new Date());
    const [timeString, setTimeString] = useState('00 : 00');
    const [timeColor, setTimeColor] = useState('lightgray');
  

    const [timePicker2, setTimePicker2] = useState(false);
    const [time2, setTime2] = useState(new Date());
    const [timeString2, setTimeString2] = useState('00 : 00');
    const [timeColor2, setTimeColor2] = useState('lightgray');

    
    const onChangetime = (event, selectedtime) => {
        const currenttime = selectedtime || time;
        setTimePicker(false);
        setTime(currenttime);
        setTimetoString(currenttime);
        setTimeColor('black');
    };
    
    const onChangetime2 = (event, selectedtime) => {
        const currenttime2 = selectedtime || time2;
        setTimePicker2(false);
        setTime2(currenttime2);
        setTimetoString2(currenttime2);
        setTimeColor2('black');
        

    };


    function setTimetoString(selectedtime) {
        var cetificateTime = selectedtime.toJSON();
        //var yy = cetificateTime.substring(0, 4);
        var hour = cetificateTime.substring(11, 13);
        var minute = cetificateTime.substring(14, 16);
        console.log(time.toJSON());
        setTimeString(hour + ' : ' + minute );
    }

    function setTimetoString2(selectedtime) {
        var cetificateTime = selectedtime.toJSON();
        //var yy = cetificateTime.substring(0, 4);
        var hour = cetificateTime.substring(11, 13);
        var minute = cetificateTime.substring(14, 16);
        console.log(time.toJSON());
        setTimeString2(hour + ' : ' + minute );
    }

    return(
        <>
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.top}>
                    <View style={styles.topTextContainer}>
                        <Text style={styles.topText1}>모두 인증</Text>
                        <Text style={styles.topText2}>인증 방법을 설정합니다.</Text>
                    </View>
                </View>
                <View style={styles.mid}>
                    <Text style={styles.midText}>인증 시간</Text>
                    {timePicker && (
                        <DateTimePicker
                        value={time}
                        mode={'time'}
                        display="spinner"
                        onChange={onChangetime}
                        />
                    )}
                    {timePicker2 && (
                        <DateTimePicker
                        value={time2}
                        mode={'time'}
                        display="spinner"
                        onChange={onChangetime2}
                        />
                    )}

                    <View style={styles.timeContainer}>
                        <TouchableOpacity
                            onPress={() => setTimePicker(true)}
                            //style={{...styles.button, borderColor: timeColor}}
                            >
                            <Text style={{color: timeColor}, styles.timeText}>{timeString}</Text>
                        </TouchableOpacity>
                        <Text> {'\t'}-{'\t'}</Text>
                        <TouchableOpacity
                            onPress={() => setTimePicker2(true)}
                            //style={{...styles.button, borderColor: timeColor}}
                            >
                            <Text style={{color: timeColor2}, styles.timeText}>{timeString2}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.bottomText}>인증 방법 및 예시</Text>
                    <View style={styles.bottomImageContainer}>
                        <TouchableOpacity 
                            style={styles.imageTouch}
                            onPress={()=>navigation.navigate('OpenE')}    
                        >
                            <Image source={require('../../../../../assets/img/night.png')} style={styles.img}/>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.imageTouch}
                            onPress={()=>navigation.navigate('OpenE')}    
                        >
                            <Image source={require('../../../../../assets/img/night.png')} style={styles.img}/>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            

        </ScrollView>
        <View style={styles.deep}>
            <View style={styles.buttonContainer}>

                <Button
                    style={styles.deepButton1}
                    textStyle={styles.deepButtonText1}
                    // //activeOpacity={1}
                    // disabledStyle={{backgroundColor: 'white'}}
                    // isDisabled={email == '' || password == '' ? true : false}
                    // isLoading={false}
                    onPress={() => navigation.goBack() }
                >취소</Button>
                <Button
                    style={styles.deepButton2}
                    textStyle={styles.deepButtonText2}
                    // //activeOpacity={1}
                    disabledStyle={{backgroundColor: 'white'}}
                    isDisabled={time>=time2}
                    // isLoading={false}
                    onPress={() => navigation.navigate('Home') }
                >완료!</Button>
            </View>
        </View>
        </>
    )
}

export default OpenD;

const styles = StyleSheet.create({
    container:{
        width:'95%',
        alignSelf:'center'
    },
    top:{
        //backgroundColor:'lightyellow',
        height:100,
        justifyContent:'center'
    },
    topTextContainer:{
        //backgroundColor:'grey',
        height:'50%',
        justifyContent:'space-between'
    },
    topText1:{
        fontFamily:'neodgm',
        fontSize:20

    },
    topText2:{
        fontFamily:'neodgm',
    },
    mid:{
        //backgroundColor:'pink',
        height:150
    },
    midText:{
        fontFamily:'neodgm',
        fontSize:20
    },
    timeContainer:{
        flexDirection:'row',
        backgroundColor:'lightgrey',
        marginTop:'5%',
        width:'55%',
        justifyContent:'center',
        height:40,
        borderWidth:1,
        alignItems:'center',
        borderRadius:10
    },
    timeText:{

    },
    bottom:{
        //backgroundColor:'lightblue'
    },
    bottomText:{
        fontFamily:'neodgm',
        fontSize:20
    },
    bottomImageContainer:{
        marginTop:'6%',
        flexDirection:'row'
    },
    imageTouch:{
        width:110,
        height:110,
        marginLeft:'3%'
       
    },
    img:{
        width:'100%',
        height:'100%',
        borderRadius:10
    },
    deep:{
        backgroundColor:'grey',
        //height:200,
        justifyContent:'flex-end',
        //height:250
    },
    buttonContainer:{
        flexDirection:'row',
        height:50,
    },
    deepButton1:{
        width: '50%',
        backgroundColor: 'white', 
        //'#ffcd2c',
        borderWidth: 2,
        height: '100%',
        borderRadius: 0,
        alignSelf: 'center',
    },
    deepButtonText1:{
        fontFamily: 'neodgm',
        fontSize: 10,
    },
    deepButton2:{
        width: '50%',
        backgroundColor: '#ffcd2c', 
        //'#ffcd2c',
        borderWidth: 2,
        height: '100%',
        borderRadius: 0,
        alignSelf: 'center',
    },
    deepButtonText2:{
        fontFamily: 'neodgm',
        fontSize: 10,
    },
})