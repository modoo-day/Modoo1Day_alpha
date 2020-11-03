import React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, Button} from 'react-native';



const ContentsWrite = ({navigation}) =>{
    return(
        <ScrollView contentContainerStyle={{maxHeight:'200%'}}>

            <View style={styles.container}>
                <View style={styles.top}>
                    <Image style={styles.img} source={require('../../../../../../assets/img/night.png')}/>
                
                    <TouchableOpacity style={styles.cameraContainer}>
                        <Image style={styles.camera} source={require('../../../../../../assets/icons/camera.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottom}>
                    <TextInput
                        style={styles.input}
                        multiline={true}
                    ></TextInput>
                </View>


                <View style={styles.bottomButtonContainer}>

                    <Button
                        title='인증 하기'
                        onPress={()=>navigation.navigate('Certificate')}
                    />
                </View>
                    
            </View>
        </ScrollView>
    )
}
export default ContentsWrite;

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
    bottom:{
       // backgroundColor:'lightyellow',
        marginTop:'15%',
        width:'100%',
        height:'25%',
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
        backgroundColor:'pink',
        height:100,
        width:'60%'
    },
    bottomButtonLayout: {
        backgroundColor: '#ffcd2c',
        borderWidth: 2,
        height: '100%',
        borderRadius:10
    },
    bottomButtonText: {
        fontFamily: 'neodgm',
        fontSize: 10,
    },
})