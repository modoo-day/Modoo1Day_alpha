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


const Avatar = ({navigation}) => {
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity 
                    style={styles.topLeft}
                    onPress={()=>navigation.navigate('Avatar')}
                >
                    <Image style={styles.topImg} source={require('../../../../../assets/img/night.png')}/>
                </TouchableOpacity>
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
                        {/* <Button 
                            style={styles.button} 
                            textStyle={styles.buttonText}
                            //activeOpacity={1}
                            disabledStyle={{backgroundColor:'white'}}
                            isLoading={false}
                            //onPress={()=>navigation.navigate('OpenA')}
                        >
                        모do 개설
                        </Button> */}
                    </View>
                </View>
            </View>
            <View style={styles.mid}>
                <TouchableOpacity style={styles.midImgTouch}>
                    <Image style={styles.midImg} source={require('../../../../../assets/img/night.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <View style={styles.bottomFirst}>
                    <TouchableOpacity style={styles.bottomFirstImgTouch}>
                        <Image style={styles.bottomFirstImg} source={require('../../../../../assets/img/night.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomFirstImgTouch}>
                        <Image style={styles.bottomFirstImg} source={require('../../../../../assets/img/night.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomFirstImgTouch}>
                        <Image style={styles.bottomFirstImg} source={require('../../../../../assets/img/night.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomFirstImgTouch}>
                        <Image style={styles.bottomFirstImg} source={require('../../../../../assets/img/night.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomSecond}>
                    <TouchableOpacity style={styles.bottomSecondTouch}>
                        <View style={styles.bottomSecondImgContainer}>
                            <Image style={styles.bottomSecondImg} source={require('../../../../../assets/img/night.png')} />
                        </View>
                        <View style={styles.bottomSecondTextContainer}>
                            <Text style={styles.bottonSecondText}>이게 뭘까</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomSecondTouch}>
                        <View style={styles.bottomSecondImgContainer}>
                            <Image style={styles.bottomSecondImg} source={require('../../../../../assets/img/night.png')} />
                        </View>
                        <View style={styles.bottomSecondTextContainer}>
                            <Text style={styles.bottonSecondText}>이게 뭘까</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomSecondTouch}>
                        <View style={styles.bottomSecondImgContainer}>
                            <Image style={styles.bottomSecondImg} source={require('../../../../../assets/img/night.png')} />
                        </View>
                        <View style={styles.bottomSecondTextContainer}>
                            <Text style={styles.bottonSecondText}>이게 뭘까</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomSecondTouch}>
                        <View style={styles.bottomSecondImgContainer}>
                            <Image style={styles.bottomSecondImg} source={require('../../../../../assets/img/night.png')} />
                        </View>
                        <View style={styles.bottomSecondTextContainer}>
                            <Text style={styles.bottonSecondText}>이게 뭘까</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomSecondTouch}>
                        <View style={styles.bottomSecondImgContainer}>
                            <Image style={styles.bottomSecondImg} source={require('../../../../../assets/img/night.png')} />
                        </View>
                        <View style={styles.bottomSecondTextContainer}>
                            <Text style={styles.bottonSecondText}>이게 뭘까</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomSecondTouch}>
                        <View style={styles.bottomSecondImgContainer}>
                            <Image style={styles.bottomSecondImg} source={require('../../../../../assets/img/night.png')} />
                        </View>
                        <View style={styles.bottomSecondTextContainer}>
                            <Text style={styles.bottonSecondText}>이게 뭘까</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
         
        </ScrollView>
    )
}

export default Avatar;

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
    mid:{
        //backgroundColor:'lightyellow',
        height:42,
        alignItems:'flex-end'
    },
    midImgTouch:{
        height:25,
        width:25
    },
    midImg:{
        width:'100%',
        height:'100%',
        borderRadius:10
    },
    bottom:{
        backgroundColor:'lightblue',
        height:450,
        borderRadius:10
    },
    bottomFirst:{
        height:'16%',
        //backgroundColor:'pink',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:'10%',
        alignItems:'center',
        borderBottomWidth:1
    },
    bottomFirstImgTouch:{
        height:55,
        width:55,
    },
    bottomFirstImg:{
        height:'100%',
        width:'100%',
        borderRadius:10
    },
    bottomSecond:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center'
    },
    bottomSecondTouch:{
        backgroundColor:'lightyellow',
        width:'33%',
        height:160,
        padding:'2%'
    },
    bottomSecondImgContainer:{
        aspectRatio:1    
    },
    bottomSecondImg:{
        width:'100%',
        height:'100%',
        borderRadius:10,
    },
    bottomSecondTextContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        backgroundColor:'grey',
        height:'20%',
        borderRadius:10,
        marginTop:'10%'
    },
    bottonSecondText:{

    },
})