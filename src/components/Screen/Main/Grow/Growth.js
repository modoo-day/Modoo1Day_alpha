import React from 'react';
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


export default Growth = ({navigation}) => {
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.top}>
                <View style={styles.topLeft}>
                    <Image style={styles.topImg} source={require('../../../../assets/img/night.png')}/>
                </View>
                <View style={styles.topRight}>
                    <View style={styles.experiencePointContainer}>
                        <Text>레벨</Text>
                        <ProgressBar 
                            progress={0.3}
                            width={140}
                        />
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
                        모do 개설
                        </Button>
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>

                <TouchableOpacity 
                    style={styles.listContainer}
                    onPress={()=>navigation.navigate('StatusRoute')}    
                >
                    <Image style={styles.listImg} source={require('../../../../assets/img/night.png')}/>
                    <View style={styles.listTextContainer}>
                        <Text style={styles.listTitle}>매일 물 마시기</Text>
                        {/* <TouchableOpacity
                            // onPress={navigation.navigate('ContentsWrite')}
                            //  내비게이션이 사용된 태그 안에 또 내비게이션을 사용할 수 없음.
                        > */}
                            <Text style={styles.listButton}>인증하기</Text>
                        {/* </TouchableOpacity> */}
                    </View>
                </TouchableOpacity>
                
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
        width:'60%',
        justifyContent:'space-between',
        paddingVertical:'5%',
    },
    experiencePointContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    buttonContainer:{
        //backgroundColor:'grey',
        width:'100%',
        justifyContent:'flex-end'
    },
    button: {
        width: '90%',
        backgroundColor: '#ffcd2c',
        borderWidth: 2,
        height: '55%',
        borderRadius:50,
        alignSelf:'center'
      },
    buttonText: {
        fontFamily: 'neodgm',
        fontSize: 10,
    },
    bottom:{
        //backgroundColor:'lightblue',
        borderBottomWidth:1.5,
        paddingBottom:5
    },
    listContainer:{
        flex:1,
        backgroundColor:'lightgrey',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        marginVertical:'2.5%'
    },
    listImg:{
        height:60,
        width:60,
        borderRadius:10
    },
    listTextContainer:{
        top:6,
        width:'70%',
        //backgroundColor:'lightblue',
        marginLeft:'5%'
    },
    listTitle:{

    },
    listButton:{
        alignSelf:'flex-end'
    },
})