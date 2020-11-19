import React, {useEffect, useState} from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import Button from 'apsl-react-native-button';
import GrowthChild from './Child/GrowthChild';
import firestore from '@react-native-firebase/firestore';

export default Growth = ({navigation}) => {


    const [DataA, setDataA] = useState({});


    const modooDataRef = firestore().collection('MODOOS_DATA');
    const refreshMain = () => {
        // Data들 파베에서 불러오기.
        // 인기 모두 불러오기 (참여자 수 내림차순)
        console.log('REFRESHMAIN 시작');
        modooDataRef
        .orderBy('participateCount_num', 'desc')  //어떤 순서로 목록을 불러올 지 정하는 거 같아보임.
        .limit(2)
        .get()
        .then((snst) => {
            console.log('GrowthData 받아옴');
            setDataA(snst._docs[0])
        })
        .catch((err) => {
            console.log(err);
        });
    }

    // Refresh 한번만 실행.
    useEffect(() => {
        refreshMain();
    }, []);

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity 
                    style={styles.topLeft}
                    onPress={()=>navigation.navigate('Avatar')}
                >
                    <Image style={styles.topImg} source={require('../../../../assets/img/night.png')}/>
                </TouchableOpacity>
                <View style={styles.topRight}>
                    <View style={styles.experiencePointContainer}>
                        <Text style={styles.level}>10</Text>
                        <View style={styles.progressbarContainer}>
                            <ProgressBar 
                                progress={0.3}
                                width={null}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        {/* <Button
                            title='모do 개설'
                            onPress={()=>navigation.navigate('OpenA')}
                        /> */}
                        <Button 
                            style={styles.button} 
                            textStyle={styles.buttonText}
                            //activeOpacity={1}
                            disabledStyle={{backgroundColor:'white'}}
                            isLoading={false}
                            onPress={()=>navigation.navigate('OpenA')}
                        >
                        모두 개설
                        </Button>
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>

                {/* <TouchableOpacity 
                    style={styles.listContainer}
                    // onPress={()=>
                    //     //navigation.navigate('StatusRoute')
                    // }    
                >
                    <Image style={styles.listImg} source={require('../../../../assets/img/night.png')}/>
                    <View style={styles.listTextContainer}>
                        <Text style={styles.listTitle}>매일 물 마시기</Text>
                       
                        <Text style={styles.date}>20.11.14~20.11.15</Text>
                        <Text style={styles.listButton}>인증하기</Text>
                        
                    </View>
                </TouchableOpacity> */}
                <GrowthChild {...DataA}/>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        //backgroundColor:'lightblue',
        marginHorizontal:'5%'
    },
    top:{
        //backgroundColor:'lightblue',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:'3%'
    },
    topLeft:{
        //backgroundColor:'pink',
    },
    topImg:{
        height:100,
        width:100,
        borderRadius:10,
        borderWidth:3
    },
    topRight:{
        //backgroundColor:'lightyellow',
        width:'62%',
        justifyContent:'space-between',
        paddingVertical:'5%',
    },
    experiencePointContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    level:{
        fontSize:25,
        fontWeight:'bold'
    },
    progressbarContainer:{
        //backgroundColor:'grey',
        width:'80%'
    },
    buttonContainer:{
        //backgroundColor:'grey',
        width:'100%',
        justifyContent:'flex-end'
    },
    button: {
        //width: '90%',
        backgroundColor: '#ffcd2c',
        borderWidth: 5,
        height: '60%',
        borderRadius:50,
        alignSelf:'center'
      },
    buttonText: {
        fontFamily: 'neodgm',
        fontSize: 15,
        fontWeight:'bold'
    },
    bottom:{
        //backgroundColor:'lightblue',
        borderBottomWidth:1.5,
        paddingBottom:5
    },
    listContainer:{
        flex:1,
        backgroundColor:'#ffcd2c',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        marginVertical:'2.5%'
    },
    listImg:{
        height:130,
        width:130,
        borderRadius:10
    },
    listTextContainer:{
        top:6,
        flex:1,
        //backgroundColor:'lightblue',
        //marginLeft:'5%'
        paddingHorizontal:'2%'
    },
    listTitle:{
        fontSize:15,
        fontWeight:'bold'
    },
    date:{
        fontWeight:'bold',
        fontSize:10
    },
    listButton:{
        alignSelf:'flex-end',
        fontWeight:'bold',
        fontSize:20,
    },
})