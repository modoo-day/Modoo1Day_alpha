import React, {useState} from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal,
    Alert
} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import Button from 'apsl-react-native-button';


const Avatar = ({navigation}) => {

    const [modalVisible, setModalVisible] = useState(false);

    return(
        <ScrollView contentContainerStyle={styles.container}>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalTop}>
                        <View style={styles.modalLeftindent}></View>
                        <Text style={styles.modalTopText}>캐릭터 변경</Text>
                        <TouchableOpacity
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                            style={styles.backIconTouch}
                        >
                            <Image
                                style={styles.backIcon}
                                source={require('../../../../../assets/icons/refresh.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <ScrollView contentContainerStyle={styles.modalMid}>
                    
                            
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

                       
                    </ScrollView>
                    <View style={styles.modalBottom}>

                        <View  style={styles.modalBottomContent}>
                            
                        </View>
                    </View>
                </View>
            </Modal>



            <View style={styles.top}>
                <TouchableOpacity 
                    style={styles.topLeft}
                    onPress={() => {
                        setModalVisible(true);
                      }}
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
        //backgroundColor:'lightyellow',
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
    bottomSecondText:{

    },
    modalContainer:{
        height:'90%',
        backgroundColor:'pink',
        width:'92%',
        alignSelf:'center',
        top:40,
        borderRadius:10
    },
    modalTop:{
        //backgroundColor:'grey',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    modalLeftindent:{
        width:35,
    },
    modalTopText:{
        fontFamily:'neodgm'
    },
    backIconTouch:{
        height:35,
        width:35,
    },
    backIcon:{
        height:'100%',
        width:'100%'
    },
    modalMid:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly'
    },
    modalBottom:{
        //backgroundColor:'grey',
        height:'20%',
        justifyContent:'center'
    },
    modalBottomContent:{
        height:60,
        marginHorizontal:'15%',
        backgroundColor:'lightblue',
        borderRadius:15,
    },

})