import React from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity,
    ScrollView
    } from 'react-native';

    
const EmailLogin = ({navigation}) =>{
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.top}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.id}
                        placeholder='아이디'
                    />
                    <TextInput
                        style={styles.pw}
                        placeholder='비밀번호'
                    />
                </View>
            </View>
            <View style={styles.mid}>
                <Button
                    title='시작하기!'
                />
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity>
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
        backgroundColor:'pink',
        justifyContent:'center',
        height:100
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