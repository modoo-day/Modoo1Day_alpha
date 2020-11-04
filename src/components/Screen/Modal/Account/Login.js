import React from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    Image,
    TouchableOpacity
        } from 'react-native';
import EmailButton from './LoginChild/EmailButton';
import GoogleButton from './LoginChild/GoogleButton';
import KakaoButton from './LoginChild/KakaoButton';

const Login = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.top}>
                <Image style={styles.logoImg} source={require('../../../../assets/icons/modoo.png')}/>
                <Text style={styles.logoText}>모두의 하루</Text>
            </View>
            <View style={styles.mid}>
                <View style={styles.buttonContainer}>
                    <KakaoButton/>
                    <GoogleButton/>
                    <EmailButton/>
                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.bottomTextContainer}>
                    <Text style={styles.bottomText}>로그인을 하시면 </Text>
                    <TouchableOpacity
                    //onPress={()=>navigation.navigate('TosPage')}
                        style={styles.tosTextContainer}
                    >
                        <Text style={styles.tosText}>이용약관</Text>
                    </TouchableOpacity>
                    <Text style={styles.bottomText}> 동의로 간주합니다.</Text>
                </View>
            </View>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    top:{
        //backgroundColor:'lightyellow',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    logoImg:{
        width:150,
        height:150
    },
    logoText:{
        fontSize:50,
        color:'#ffcd2c',
        fontFamily:'neodgm'
    },
    mid:{
        flex:1,
        //backgroundColor:'pink',
        justifyContent:'center',
    },
    buttonContainer:{
        //backgroundColor:'lightgrey',
        height:'70%',
        justifyContent:'space-between',
    },
    bottom:{
        flex:0.3,
        //backgroundColor:'lightblue'
    },
    bottomTextContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },
    bottomText:{
        fontFamily:'neodgm',
        fontSize:10,
        textAlign:'center',
    },
    tosTextContainer:{
        //backgroundColor:'pink',
    },
    tosText:{
        fontFamily:'neodgm',
        fontSize:10,
        textDecorationLine:'underline'
    },
})