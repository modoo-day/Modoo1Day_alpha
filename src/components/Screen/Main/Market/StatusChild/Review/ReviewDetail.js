import React from 'react';
import {
        View,
        Text,
        StyleSheet,
        Image,
        TouchableOpacity
        } from 'react-native';
import { Rating } from 'react-native-elements';


const ReviewDetail = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.first}>
                <View style={styles.firstTop}>
                    <TouchableOpacity>
                        <Image style={styles.crown} source={require('../../../../../../assets/icons/EmailInput.png')}/>
                    </TouchableOpacity>
                    <Rating
                        // count={5}
                        // defaultRating={5}
                        // size={5}
                        showRating={false}
                        readonly 
                        startingValue={5}
                        imageSize={20}
                    />
                </View>
                <View style={styles.fisrtMid}>
                    <Text style={styles.firstText}>안아ㅣ럼;ㄴ이ㅏㅓㄻ니;ㅏㅇ럼닝ㅁㄴㅇsadfasdfasdfasdfasdfasdfasdfasdfasdfsadfasdfasfasdfasfasfafasf람니;라ㅓㅁ니라ㅓㅁ니ㅏ;럼니ㅏㅇ;럼ㄴㅇ리ㅏㅓㅁㄴㅇ리ㅏㅓㅁㄴㅇ리마;널러ㅏㅁㄴ이;ㅏ러</Text>
                </View>
                <View style={styles.firstBottom}>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Report')}
                    >
                        <Image style={styles.report} source={require('../../../../../../assets/icons/EmailInput.png')} />
                    </TouchableOpacity>
                    <View style={styles.profile}>
                        <Text style={styles.name}>엄예진</Text>
                        <Text style={styles.date}>2020.10.31</Text>
                    </View>
                </View>
            </View>
            
        </View>
    )
}

export default ReviewDetail;

const styles = StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor:'pink',
        marginHorizontal:'5%'
        
    },
    first:{
        marginTop:20
        //backgroundColor:'lightgreen'
    },
    firstTop:{
        //backgroundColor:'lightblue',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    crown:{
        width:30,
        height:30
    },
    firstMid:{

    },
    firstText:{
        paddingTop:15
    },
    firstBottom:{
        //backgroundColor:'grey',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingVertical:20,
        borderBottomWidth:1
    },
    report:{
        width:30,
        height:30
    },
    profile:{
        //backgroundColor:'blue',
        width:'45%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    name:{
        fontFamily:'neodgm',
        fontSize:16,
    },
    date:{
        fontFamily:'neodgm',
        fontSize:16,
    },
    
})