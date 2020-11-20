import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity} from 'react-native';
import Button from 'apsl-react-native-button';



const OpenE = ({navigation}) =>{

    const [text, setText] = useState('');


    return(
        <ScrollView contentContainerStyle={{maxHeight:'200%'}}>

            <View style={styles.container}>
                <View style={styles.top}>
                    <Image style={styles.img} source={require('../../../../../assets/img/night.png')}/>
                
                    <TouchableOpacity style={styles.cameraContainer}>
                        <Image style={styles.camera} source={require('../../../../../assets/icons/camera.png')}/>
                    </TouchableOpacity>
                </View>
                <Text
                    style={styles.textLimit}
                >0/25</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                        value={text}
                        onChangeText={(contents) => setText(contents)}
                        placeholder='설명을 입력해주세요.'
                    ></TextInput>
                </View>


                <View style={styles.bottomButtonContainer}>

                    {/* <Button
                        title='인증 하기'
                        onPress={()=>navigation.navigate('Certificate')}
                        disabled={text== '' ? true:false}
                    /> */}

                    <Button 
                        style={styles.button} 
                        textStyle={styles.buttonText}
                        //activeOpacity={1}
                        disabledStyle={{backgroundColor:'white'}}
                        isDisabled={text==''?true:false}
                        isLoading={false}
                        onPress={()=>navigation.goBack()}
                        >
                        확인
                    </Button>
                </View>
                    
            </View>
        </ScrollView>
    )
}
export default OpenE;

const styles = StyleSheet.create({
    container:{
        
       // backgroundColor:'pink',
        alignItems:'center',
        marginHorizontal:'8%'
    },
    top:{
        marginTop:'7%',
        //backgroundColor:'lightyellow',
        paddingBottom:'7%',
        borderBottomWidth:1
    },
    img:{
        width:300,
        height:300,
        borderRadius:10
    },
    cameraContainer:{
        //backgroundColor:'pink',
        alignSelf:'flex-end',
        marginTop:'5%'
    },  
    camera:{
        height:30,
        width:30,
    },
    textLimit:{
        //backgroundColor:'pink',
        textAlign:'right',
        alignSelf:'flex-end',
        top:35,
        fontFamily:'neodgm'
    },
    inputContainer:{
        //backgroundColor:'lightyellow',
        marginTop:'15%',
        width:'100%',
        height:'10%',
        borderWidth:1,
        borderRadius:10
    },
    input:{
        height:'100%',
        width:'100%',
        fontSize:17
    },
    bottomButtonContainer:{
        marginTop:'15%',
        //backgroundColor:'pink',
        height:100,
        width:'100%'
    },
    bottomButtonLayout: {
        backgroundColor: '#ffcd2c',
        borderWidth: 2,
        height: '100%',
        borderRadius:10
    },
    button: {
        width: '105%',
        backgroundColor: '#ffcd2c',
        borderWidth: 2,
        height: '50%',
        borderRadius:10,
        alignSelf:'center'
      },
    buttonText: {
        fontFamily: 'neodgm',
        fontSize: 10,
    },
})