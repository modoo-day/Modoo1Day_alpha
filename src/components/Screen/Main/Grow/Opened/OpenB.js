import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TextInput,
    } from 'react-native';
import Button from 'apsl-react-native-button';


const OpenB = ({navigation}) =>{
    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.topText}>참여 및 공개 범위</Text>
                </View>
                <View style={styles.mid}>
                    <Button
                        style={styles.button}
                        textStyle={styles.buttonText}
                    >
                        누구나
                    </Button>
                </View>
                <View style={styles.bottom}>
                    <Button
                        style={styles.button}
                        textStyle={styles.buttonText}
                    >
                        비민번호를 공유한 사람만
                    </Button>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder='숫자 4자리'
                    />
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
                        onPress={() => navigation.navigate('OpenC') }
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
    mid:{
        backgroundColor:'pink',
        height:50
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
        height:250
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