import React, {useState} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TextInput,
    } from 'react-native';
import Button from 'apsl-react-native-button';


const OpenB = ({navigation}) =>{

    const [btn, setBtn] = useState('');
    let button1;
    let button2;
    let button3;
    
    if (btn == '1일모두') {
        button1 =  <Button
                        style={styles.button}
                        textStyle={styles.buttonText}
                    >
                        100명~5000명
                    </Button>
    } else if (btn == '5일모두'||btn == '7일모두') {
        button1 =  <Button
                        style={styles.button}
                        textStyle={styles.buttonText}
                    >
                        2명~100명
                    </Button> ;
        button2 = <Button
                        style={styles.button}
                        textStyle={styles.buttonText}
                    >
                        101명~500명
                    </Button>;
        button3 = <Button
                        style={styles.button}
                        textStyle={styles.buttonText}
                    >
                        501명~5000명
                    </Button>;
    }

    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.topText}>모두 기간</Text>
                </View>
                <View style={styles.topFirst}>
                    <Button
                        style={btn=='1일모두' ?styles.activeButton : styles.button}
                        textStyle={styles.buttonText}
                        onPress={()=>setBtn('1일모두')}
                    >
                        1일 모두
                    </Button>
                </View>
                <View style={styles.topSecond}>
                    <Button
                        style={btn=='5일모두' ?styles.activeButton : styles.button}
                        textStyle={styles.buttonText}
                        onPress={()=>setBtn('5일모두')}
                    >
                        5일(평일) 모두
                    </Button>
                </View>
                <View style={styles.topThird}>
                    <Button
                        style={btn=='7일모두' ?styles.activeButton : styles.button}
                        textStyle={styles.buttonText}
                        onPress={()=>setBtn('7일모두')}
                    >
                        7일(평일*주말) 모두
                    </Button>
                </View>

                <View style={styles.mid}>
                    <Text style={styles.midText}>모두 참여 인원</Text>
                </View>
                <View style={styles.infoTextContainer}>
                    <Text style={styles.infoText}>최소 인원이 모여야 진행 가능합니다.</Text>
                </View>

                <View style={styles.midFirst}>
                   {button1}
                </View>
                <View style={styles.midSecond}>
                    {button2}
                </View>
                <View style={styles.midThird}>
                    {button3}
                </View>
                
                <View style={styles.bottom}>
                    <Text>1인당 n경험치 n코인</Text>
                    <Text>최소 인원이 많을수록 더 많은 리워드!</Text>
                </View>
            </View>
            <View style={styles.deep}>
                <View style={styles.buttonContainer}>

                    <Button
                        style={styles.deepButton}
                        textStyle={styles.deepButtonText}
                        // //activeOpacity={1}
                        // disabledStyle={{backgroundColor: 'white'}}
                        // isDisabled={email == '' || password == '' ? true : false}
                        // isLoading={false}
                        onPress={() => navigation.goBack() }
                    >취소</Button>
                    <Button
                        style={styles.deepButton}
                        textStyle={styles.deepButtonText}
                        // //activeOpacity={1}
                        // disabledStyle={{backgroundColor: 'white'}}
                        // isDisabled={email == '' || password == '' ? true : false}
                        // isLoading={false}
                        // onPress={() => navigation.navigate('OpenC') }
                    >계속</Button>
                </View>
            </View>
        </ScrollView>
    )
}


export default OpenB;

const styles = StyleSheet.create({
    container:{
        width:'95%',
        alignSelf:'center'
    },
    top:{
        backgroundColor:'lightyellow',
        height:50,
        justifyContent:'center'
    },
    topText:{
        fontFamily:'neodgm'
    },
    topFirst:{
        backgroundColor:'pink',
        height:50
    },
    
    button:{
        backgroundColor:'white',
        width:'55%',
        height:'80%'
        
    },
    activeButton:{
        backgroundColor:'#ffcd2c',
        width:'55%',
        height:'80%'
        
    },
    buttonText:{
         fontFamily:'neodgm'
    },
    topSecond:{
        backgroundColor:'lightblue',
        flexDirection:'row',
        justifyContent:'space-between',
        height:50
    },
    topThird:{
        backgroundColor:'lightyellow',
        flexDirection:'row',
        justifyContent:'space-between',
        height:50
    },
  

    mid:{
        backgroundColor:'grey',
        height:50,
        justifyContent:'center'
    },
    midText:{
        fontFamily:'neodgm'
    },
    infoTextContainer:{
        backgroundColor:'grey',
        height:50,
        justifyContent:'center'
    },
    infoText:{
        fontFamily:'neodgm'

    },
    midFirst:{
        backgroundColor:'pink',
        height:50
    },
    
    button:{
        backgroundColor:'white',
        width:'50%',
        height:'75%'
        
    },
    buttonText:{
         fontFamily:'neodgm'
    },
    midSecond:{
        backgroundColor:'lightblue',
        flexDirection:'row',
        justifyContent:'space-between',
        height:50
    },
    midThird:{
        backgroundColor:'lightyellow',
        flexDirection:'row',
        justifyContent:'space-between',
        height:50
    },
    bottom:{

    },
    deep:{
        backgroundColor:'grey',
        //height:200,
        justifyContent:'flex-end',
        height:200
    },
    buttonContainer:{
        flexDirection:'row',
        height:50,
    },
    deepButton:{
        width: '50%',
        backgroundColor: 'white', 
        //'#ffcd2c',
        borderWidth: 2,
        height: '100%',
        borderRadius: 0,
        alignSelf: 'center',
    },
    deepButtonText:{
        fontFamily: 'neodgm',
        fontSize: 10,
    },
})