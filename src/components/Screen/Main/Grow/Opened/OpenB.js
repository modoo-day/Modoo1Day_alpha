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

    const [btn1, setBtn1] = useState(false); // 누구나
    const [btn2, setBtn2] = useState(false); // 비밀번호를 공유한 사람만
    const [password, setPassword] = useState('');

    let passwordInput;

    if (btn2 == true) {
        passwordInput = <TextInput
                            style={styles.passwordInput}
                            placeholder='숫자 4자리'
                            value={password}
                            onChangeText={(contents) => setPassword(contents)}
                        />
    }

    return(
        <>
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.topText}>참여 및 공개 범위</Text>
                </View>
                <View style={styles.mid}>
                    <Button
                        style={btn1==true? styles.activeButton : styles.button}
                        textStyle={styles.buttonText}
                        disabledStyle={{backgroundColor: 'white'}}
                        onPress={()=> btn1==false ? setBtn1(true) : setBtn1(false)}
                        //isDisabled={btn1==false ? true : false}
                    >
                        누구나
                    </Button>
                </View>
                <View style={styles.bottom}>
                    <Button
                        style={btn2==true? styles.activeButton : styles.button}
                        textStyle={styles.buttonText}
                        disabledStyle={{backgroundColor: 'white'}}
                        onPress={()=> btn2==false ? setBtn2(true) : setBtn2(false)}
                        //isDisabled={btn1==false ? true : false}
                    >
                        비민번호를 공유한 사람만
                    </Button>
                    {passwordInput}
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
                    isDisabled={btn1==false && password == '' ? true : false}
                    // isLoading={false}
                    onPress={() => navigation.navigate('OpenC') }
                >계속</Button>
            </View>
        </View>
        </>
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
    mid:{
        backgroundColor:'pink',
        height:50
    },
    activeButton:{
        backgroundColor:'#ffcd2c',
        width:'55%',
        height:'80%'
    },
    button:{
        backgroundColor:'white',
        width:'55%',
        height:'80%'
        
    },
    buttonText:{
         fontFamily:'neodgm'
    },
    bottom:{
        backgroundColor:'lightblue',
        flexDirection:'row',
        justifyContent:'space-between',
        height:50
    },
    passwordInput:{
        borderRadius:10,
        borderWidth:1,
        width:'30%',
        height:'80%'
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