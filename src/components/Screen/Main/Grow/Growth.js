import React from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    Image,
    Button,
    TouchableOpacity,
    ScrollView
} from 'react-native';

export default Growth = () => {
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.top}>
                <View style={styles.topLeft}>
                    <Image style={styles.topImg} source={require('../../../../assets/img/night.png')}/>
                </View>
                <View style={styles.topRight}>
                    <Text>경험치바</Text>
                    <View style={styles.buttonContainer}>
                        <Button
                            title='모do 개설'
                        />
                    </View>
                </View>
            </View>
            <View style={styles.bottom}>

                <View style={styles.listContainer}>
                    <Image style={styles.listImg} source={require('../../../../assets/img/night.png')}/>
                    <View style={styles.listTextContainer}>
                        <Text style={styles.listTitle}>매일 물 마시기</Text>
                        <TouchableOpacity>
                            <Text style={styles.listButton}>인증하기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.listContainer}>
                    <Image style={styles.listImg} source={require('../../../../assets/img/night.png')}/>
                    <View style={styles.listTextContainer}>
                        <Text style={styles.listTitle}>매일 물 마시기</Text>
                        <TouchableOpacity>
                            <Text style={styles.listButton}>인증하기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.listContainer}>
                    <Image style={styles.listImg} source={require('../../../../assets/img/night.png')}/>
                    <View style={styles.listTextContainer}>
                        <Text style={styles.listTitle}>매일 물 마시기</Text>
                        <TouchableOpacity>
                            <Text style={styles.listButton}>인증하기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
        width:'55%',
        justifyContent:'space-between',
        paddingVertical:'5%'
    },
    buttonContainer:{
        width:'100%'
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