import React from 'react';
import {View, Text, StyleSheet, ScrollView, Button, Image} from 'react-native';


const Question = ({navigation}) =>{
    return(
        <ScrollView style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button
                    title='문의 하기'
                />
            </View>
            <View style={styles.listContianer}>

                {/* 답변 완료 */}
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
                            <View style={styles.answerContainer}>
                                <Text style={styles.answer}>답변완료</Text>
                            </View>
                        </View>
                    </View>
                </View>
                
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
})