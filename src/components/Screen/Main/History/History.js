import React, {useState} from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    ScrollView,
    Image,
    } from 'react-native';
import Button from 'apsl-react-native-button';


const History = () => {


    const [btn, setBtn] = useState(false);

    let renderItem;

    if(btn==false) {
        renderItem = 
            <>
                <View style={styles.listContainer}>
                    <View style={styles.progressContainer}>

                    </View>
                    <View style={styles.listImgContainer}>
                        <Image style={styles.listImg} source={require('../../../../assets/img/night.png')}/>
                    </View>
                </View>
                <View style={styles.listContainer}>
                    <View style={styles.progressContainer}>

                    </View>
                    <View style={styles.listImgContainer}>
                        <Image style={styles.listImg} source={require('../../../../assets/img/night.png')}/>
                    </View>
                </View>
                <View style={styles.listContainer}>
                    <View style={styles.progressContainer}>

                    </View>
                    <View style={styles.listImgContainer}>
                        <Image style={styles.listImg} source={require('../../../../assets/img/night.png')}/>
                    </View>
                </View>
                <View style={styles.listContainer}>
                    <View style={styles.progressContainer}>

                    </View>
                    <View style={styles.listImgContainer}>
                        <Image style={styles.listImg} source={require('../../../../assets/img/night.png')}/>
                    </View>
                </View>
                <View style={styles.listContainer}>
                    <View style={styles.progressContainer}>

                    </View>
                    <View style={styles.listImgContainer}>
                        <Image style={styles.listImg} source={require('../../../../assets/img/night.png')}/>
                    </View>
                </View>
            </>

        
    } else if (btn==true) {
        renderItem =
        <>
            <View style={styles.badgeLine}>
                <View style={styles.badgeContainer}>
                    <View style={styles.badgeImgContainer}>
                        <Image style={styles.badgeImg} source={require('../../../../assets/img/night.png')} />
                    </View>
                    <View style={styles.badgeUnderContainer}>

                    </View>
                </View>
                <View style={styles.badgeContainer}>
                    <View style={styles.badgeImgContainer}>
                        <Image style={styles.badgeImg} source={require('../../../../assets/img/night.png')} />
                    </View>
                    <View style={styles.badgeUnderContainer}>

                    </View>
                </View>
                <View style={styles.badgeContainer}>
                    <View style={styles.badgeImgContainer}>
                        <Image style={styles.badgeImg} source={require('../../../../assets/img/night.png')} />
                    </View>
                    <View style={styles.badgeUnderContainer}>

                    </View>
                </View>
            </View>
            <View style={styles.badgeLine}>
                <View style={styles.badgeContainer}>
                    <View style={styles.badgeImgContainer}>
                        <Image style={styles.badgeImg} source={require('../../../../assets/img/night.png')} />
                    </View>
                    <View style={styles.badgeUnderContainer}>

                    </View>
                </View>
                <View style={styles.badgeContainer}>
                    <View style={styles.badgeImgContainer}>
                        <Image style={styles.badgeImg} source={require('../../../../assets/img/night.png')} />
                    </View>
                    <View style={styles.badgeUnderContainer}>

                    </View>
                </View>
                <View style={styles.badgeContainer}>
                    <View style={styles.badgeImgContainer}>
                        <Image style={styles.badgeImg} source={require('../../../../assets/img/night.png')} />
                    </View>
                    <View style={styles.badgeUnderContainer}>

                    </View>
                </View>
            </View>
        </>
    }

    return(
        <View style = {styles.container}>
            <View style={styles.top}>
                <Button
                    style={btn==false? styles.activeButton : styles.button}
                    textStyle={styles.buttonText}
                    // //activeOpacity={1}
                    //isDisabled={title==''&& pick=='' &&tag1 == '' && tag2 == '' && tag3=='' ? false : true}
                    // isLoading={false}
                    onPress={() => setBtn(false) }
                >레벨</Button>
                <Button
                    style={btn==true? styles.activeButton : styles.button}
                    textStyle={styles.buttonText}
                    // //activeOpacity={1}
                    //isDisabled={title==''&& pick=='' &&tag1 == '' && tag2 == '' && tag3=='' ? false : true}
                    // isLoading={false}
                    onPress={() => setBtn(true) }
                >뱃지</Button>
            </View>
            <ScrollView contentContainerStyle={styles.mid}>
                {renderItem}
            </ScrollView>
        </View>
    )
}

export default History;

const styles = StyleSheet.create({
    container:{

    },
    top:{
        backgroundColor:'lightblue',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:'20%',
        height:50,
        borderBottomWidth:1
    },
    button:{
        width: 80,
        backgroundColor: 'white', 
        //'#ffcd2c',
        borderWidth: 2,
        height: 30,
        borderRadius: 50,
        top:10,
    },
    activeButton:{
        width: 80,
        backgroundColor: '#ffcd2c', 
        //'#ffcd2c',
        borderWidth: 2,
        height: 30,
        borderRadius: 50,
        top:10,
    },
    buttonText:{
        fontFamily: 'neodgm',
        fontSize: 10,
    },
    mid:{
        //backgroundColor:'grey'
        width:'95%',
        alignSelf:'center'
    },
    listContainer:{
        backgroundColor:'grey',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:10,
        marginTop:'7%'
    },
    progressContainer:{
        height:30,
        backgroundColor:'lightblue',
        flex:1,
        marginHorizontal:'10%'
    },
    listImgContainer:{
        width:80,
        height:80,
    },
    listImg:{
        width:'100%',
        height:'100%',
        borderRadius:10,
    },
    badgeLine:{
        backgroundColor:'pink',
        height:135,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:'5%',
        borderRadius:10,
        marginTop:'7%'
    },
    badgeContainer:{
        width:'30%',
        //height:'100%'
        //backgroundColor:'lightyellow',
        justifyContent:'center',
        alignItems:'center',
    },
    badgeImgContainer:{
        width:80,
        height:80,
    },
    badgeImg:{
        width:'100%',
        height:'100%',
        borderRadius:10
    },
    badgeUnderContainer:{
        height:25,
        width:'100%',
        backgroundColor:'grey',
        marginTop:'10%',
        borderRadius:10
    },
})