import React, {useEffect, useReducer, useState} from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    } from 'react-native';
import auth from "@react-native-firebase/auth";
import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from 'apsl-react-native-button';




const EmailLogin = () =>{

    navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [userData, setUserData] = useState({});


   

    const handleEmail = (text) =>{
        setEmail({text})
    }

    const handlePassword = (text) =>{
        setPassword({text})
    }

    const login = (email, pass) => {
        auth()
        // 관리자에 의해 익명 로그인 막힘.
        .signInAnonymously()
        .then(() => {
            console.log('User signed in anonymously');
            navigation.navigate('Home')
        })
        .catch(error => {
            if (error.code === 'auth/operation-not-allowed') {
              console.log('Enable anonymous in your firebase console.');
            }        

            console.error(error);
            navigation.navigate('Home')
        })
    }

    const logout = () =>{
        auth()
        .signOut()
        .then(() => console.log('User signed Out!'));
    }
    
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Button
                onPress={logout}
            > 로그아웃 </Button>
            <View style={styles.top}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.id}
                        placeholder='아이디'
                        onChangeText={handleEmail}
                        autoCapitalize='none'
                    />
                    <TextInput
                        style={styles.pw}
                        placeholder='비밀번호'
                        onChangeText={handlePassword}
                        autoCapitalize='none'
                        secureTextEntry={true}
                    />
                </View>
            </View>
            <View style={styles.mid}>
                {/* <Button
                    title='시작하기!'
                    // onPress={()=>navigation.navigate('MarketRoute')}
                    onPress = {()=> login(email, password)}
                    disabled={email== '' || password=='' ? true:false}
                /> */}
                <Button 
                    style={styles.button} 
                    textStyle={styles.buttonText}
                    //activeOpacity={1}
                    disabledStyle={{backgroundColor:'white'}}
                    isDisabled={email== '' || password=='' ? true:false}
                    isLoading={false}
                    onPress={()=>login(email, password)}
                    >
                    시작하기!
                </Button>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('EmailCheck')}
                >
                    <Text style={styles.register}>회원가입</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgot}>아이디/비밀번호 찾기</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default EmailLogin;

const styles = StyleSheet.create({
    container:{
        //backgroundColor:'blue',
    },
    top:{
        //backgroundColor:'lightyellow',
        height:'55%',
        justifyContent:'flex-end',
    },
    inputContainer:{
        //backgroundColor:'grey',
        height:'40%',
        justifyContent:"space-between",
        paddingHorizontal:'15%'
    },
    id:{
        borderWidth:1,
        borderRadius:30
    },
    pw:{
        borderWidth:1,
        borderRadius:30
    },
    mid:{
        //backgroundColor:'pink',
        justifyContent:'center',
        height:100
    },
    button: {
        width: '80%',
        backgroundColor: '#ffcd2c',
        borderWidth: 2,
        height: '50%',
        borderRadius:50,
        alignSelf:'center'
      },
    buttonText: {
        fontFamily: 'neodgm',
        fontSize: 10,
    },
    bottom:{
        //backgroundColor:'lightblue',
        alignItems:'center',
        height:300
    },
    register:{
        fontFamily:'neodgm'
    },
    forgot:{
        marginTop:'7%',
        fontFamily:'neodgm'
    },
    
})