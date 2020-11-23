import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
} from 'react-native';
import Button from 'apsl-react-native-button';

const PersonalInfoSet = ({navigation}) =>{
    return(
        <>
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.line}>
                <Text style={styles.lineText}>아이디</Text>
                <TextInput style={styles.lineTextInput} />
            </View>
            <View style={styles.line}>
                <Text style={styles.lineText}>현재 비밀번호</Text>
                <TextInput style={styles.lineTextInput} />
            </View>
            <View style={styles.line}>
                <Text style={styles.lineText}>새 비밀번호</Text>
                <TextInput style={styles.lineTextInput} />
            </View>
            <View style={styles.line}>
                <Text style={styles.lineText}>새 비밀번호 확인</Text>
                <TextInput style={styles.lineTextInput} />
            </View>
            <View style={styles.line}>
                <Text style={styles.lineText}>이름</Text>
                <TextInput style={styles.lineTextInput} />
            </View>
            <View style={styles.line}>
                <Text style={styles.lineText}>이메일</Text>
                <TextInput style={styles.lineTextInput} />
            </View>
            <View style={styles.linePhone}>
                <Text style={styles.linePhoneText}>휴대폰</Text>
                <View style={styles.linePhoneContentContainer}>
                    <TextInput style={styles.linePhoneTextInput} />
                    <Button 
                        style={styles.linePhoneButton} 
                        textStyle={styles.linePhoneButtonText}
                        //activeOpacity={1}
                        //disabledStyle={{backgroundColor:'white'}}
                        isLoading={false}
                        //onPress={()=>navigation.navigate('OpenA')}
                    >
                    다른 번호 인증
                    </Button>
                </View>
            </View>
            <View style={styles.line}>
                <Text style={styles.lineText}>생년월일</Text>
                <TextInput style={styles.lineTextInput} />
            </View>
            <View style={styles.line}>
                <Text style={styles.lineText}>성별</Text>
                <TextInput style={styles.lineTextInput} />
            </View>
        </ScrollView>
        <View style={styles.bottom}>
            <Button 
                style={styles.button} 
                textStyle={styles.buttonText}
                //activeOpacity={1}
                //disabledStyle={{backgroundColor:'white'}}
                isLoading={false}
                onPress={()=>navigation.navigate('Setting')}
            >
            변경하기
            </Button>
        </View>
        </>
    )
}


export default PersonalInfoSet;

const styles = StyleSheet.create({
    container:{
        width:'95%',
        alignSelf:'center'
    },
    line:{
        //backgroundColor:'pink',
        height:100,
        marginTop:'1%',
        justifyContent:'space-between',
        paddingVertical:10
    },
    lineText:{
        fontSize:15,
        fontWeight:'bold'
    },
    lineTextInput:{
        borderWidth:1,
        borderRadius:10,
        height:45,
    },
    linePhone:{
        justifyContent:'space-between',
        //backgroundColor:'pink',
        height:100,
        marginTop:'1%',
        paddingVertical:10
    },
    linePhoneText:{
        fontSize:15,
        fontWeight:'bold'
    },
    linePhoneContentContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    linePhoneTextInput:{
        width:'58%',
        borderWidth:1,
        borderRadius:10,
        height:45
    },
    linePhoneButton:{
        borderWidth:1,
        width:'40%',
        height:45,
    },
    linePhoneButtonText:{
        fontSize:15,
        fontWeight:'bold'
    },
    bottom:{
        backgroundColor:'lightyellow',
        height:50,
        justifyContent:'flex-end'
    },
    button: {
        //width: '90%',
        backgroundColor: '#ffcd2c',
        borderWidth: 0,
        height: '100%',
        borderRadius:0,
        alignSelf:'center',
        top:'2.5%'
      },
    buttonText: {
        fontFamily: 'neodgm',
        fontSize: 20,
        fontWeight:'bold',
    },
})