import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
} from 'react-native';
import Button from 'apsl-react-native-button';

const PersonalInfoCheck = ({navigation}) =>{
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.top}>
                <Text style={styles.topText1}>비밀번호 재확인</Text>
                <Text style={styles.topText2}>안전한 정보 보호를 위해 비밀번호를 재확인 해주세요.</Text>
            </View>
            <View style={styles.mid}>
                <Text style={styles.midText}>비밀번호</Text>
                <TextInput style={styles.midTextInput} />
            </View>
            <View style={styles.bottom}>
                <Button 
                    style={styles.button} 
                    textStyle={styles.buttonText}
                    //activeOpacity={1}
                    //disabledStyle={{backgroundColor:'white'}}
                    isLoading={false}
                    onPress={()=>navigation.navigate('PersonalInfoSet')}
                >
                확인
                </Button>
            </View>
        </ScrollView>
    )
}


export default PersonalInfoCheck;

const styles = StyleSheet.create({
    container:{
        width:'95%',
        alignSelf:'center'
    },
    top:{
        //backgroundColor:'lightblue',
        height:100,
        justifyContent:'space-between',
        paddingVertical:20
    },
    topText1:{
        fontSize:15,
        fontWeight:'bold'
    },
    topText2:{
        fontSize:15
    },
    mid:{
        //backgroundColor:'pink',
        height:100,
        marginTop:'10%',
        justifyContent:'space-between',
        paddingVertical:10
    },
    midText:{
        fontSize:15,
        fontWeight:'bold'
    },
    midTextInput:{
        borderWidth:1,
        borderRadius:10,
        
    },
    bottom:{
        //backgroundColor:'lightyellow',
        height:100,
        justifyContent:'center'
    },
    button: {
        //width: '90%',
        backgroundColor: '#ffcd2c',
        borderWidth: 0,
        height: '60%',
        borderRadius:10,
        alignSelf:'center',
      },
    buttonText: {
        fontFamily: 'neodgm',
        fontSize: 20,
        fontWeight:'bold',
    },
})