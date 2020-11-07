import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import Button from 'apsl-react-native-button';


const Question = ({navigation}) =>{
    return(
        <ScrollView style={styles.container}>
            <View style={styles.buttonContainer}>
                {/* <Button
                    title='문의 하기'
                    onPress={()=>navigation.navigate('QuestionWrite')}
                /> */}

                <Button 
                    style={styles.button} 
                    textStyle={styles.buttonText}
                    //activeOpacity={1}
                    disabledStyle={{backgroundColor:'white'}}
                    isLoading={false}
                    onPress={()=>navigation.navigate('QuestionWrite')}
                    >
                    문의 하기
                </Button>
            </View>
            <View style={styles.listContianer}>

                {/* 답변 완료 */}
                <TouchableOpacity 
                    style={styles.list}
                    onPress={()=>navigation.navigate('QuestionDetail')}
                >
                    <View style={styles.listIconContainer}>
                        <Image style={styles.listIcon} source={require('../../../../../../assets/icons/crown.png')}/>
                    </View>
                    <View style={styles.postContainer}>
                        <View style={styles.postTitleContainer}>
                            <Text style={styles.title}>문의 제목</Text>
                        </View>
                        <View style={styles.postBottomContainer}>
                            <Text style={styles.bottomText}>엄에진</Text>
                            <Text style={styles.bottomText}>2020.10.31</Text>
                            <View style={styles.answerContainer}>
                                <Text style={styles.answer}>답변완료</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                
                {/* 답변 준비중 */}
                <View style={styles.list}>
                    <View style={styles.listIconContainer}>
                        <Image style={styles.listIcon} source={require('../../../../../../assets/icons/crown.png')}/>
                    </View>
                    <View style={styles.postContainer}>
                        <View style={styles.postTitleContainer}>
                            <Text style={styles.title}>문의 제목</Text>
                        </View>
                        <View style={styles.postBottomContainer}>
                            <Text style={styles.bottomText}>엄에진</Text>
                            <Text style={styles.bottomText}>2020.10.31</Text>
                            <View style={styles.answerWaitContainer}>
                                <Text style={styles.answerWait}>답변준비중</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            
            
        </ScrollView>

        
    )    
}

export default Question


const styles = StyleSheet.create({
    container:{
    //    backgroundColor:'lightblue'
    },
    buttonContainer:{
        backgroundColor:'pink',
        height:50
    },
    buttonLayout: {
        backgroundColor: '#ffcd2c',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        height: '100%',
        borderRadius:0
    },
    buttonText: {
        fontFamily: 'neodgm',
        fontSize: 10,
    },
    listContianer:{
        
        //backgroundColor:'lightgreen',
        
    },
    list:{
        flexDirection:'row',
        borderBottomWidth:0.9,
        justifyContent:'space-between',
        paddingHorizontal:'4%'

    },
    listIconContainer:{
        marginTop:'2.2%'
    },
    listIcon:{
        width:25,
        height:25
    },
    postContainer:{
        height:85,
        //backgroundColor:'lightyellow',
        width:'100%'
    },
    postTitleContainer:{
       // backgroundColor:'pink',
        height:50,
        marginTop:'2.2%',
        marginHorizontal:'5%'
    },
    title:{
        fontSize:20,
        fontFamily:'neodgm'
    },
    postBottomContainer:{
      //  backgroundColor:'grey',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'baseline',
        marginHorizontal:'5%'
    },
    bottomText:{
        fontFamily:'neodgm',
        fontSize:15
    },
    answerContainer:{
        backgroundColor:'#ffcd2c',
        borderWidth:1,
        width:'30%'
    },
    answer:{
        fontSize:10,
        fontFamily:'neodgm',
        textAlign:'center'
    },
    answerWaitContainer:{
        backgroundColor:'white',
        borderWidth:1,
        width:'30%'
    },
    answerWait:{
        fontSize:10,
        fontFamily:'neodgm',
        textAlign:'center'
    },
    button: {
        width: '105%',
        backgroundColor: '#ffcd2c',
        borderWidth: 2,
        height: '100%',
        //marginTop: '4%',
        borderRadius:0,
        alignSelf:'center'
    },
    buttonText: {
        fontFamily: 'neodgm',
        fontSize: 10,
    },
})