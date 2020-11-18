import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    } from 'react-native';
    
const Attendance = () => {
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.top}>
                <Text style={styles.progressText}>전체 달성률 85%</Text>
                <View style={styles.progressContainer}>

                </View>
            </View>
            <View style={styles.mid}>
                <View style={styles.oneCheck}>
                    <View style={styles.besideCircle}></View>
                    <View>

                    </View>
                    <View style={styles.circle}>

                    </View>
                    <View style={styles.besideCircle}>
                        <Text style={styles.exp}>
                            EXP
                        </Text>
                        <Text style={styles.coin}>
                            COIN
                        </Text>
                    </View>
                </View>       
            </View>
        </ScrollView>
    )
}

export default Attendance;

const styles = StyleSheet.create({
    top:{
        backgroundColor:'pink',
        height:100,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    progressText:{

    },
    progressContainer:{
        height:30,
        width:'80%',
        backgroundColor:'grey',
        borderRadius:50,
        marginTop:'5%'
    },
    mid:{
        backgroundColor:'lightblue',
        
    },
    oneCheck:{
        backgroundColor:'lightgreen',
        flexDirection:'row',
        //justifyContent:'center',
        paddingVertical:20
    },
    circle:{
        height:45,
        width:45,
        backgroundColor:'#fdd835',
        borderRadius:50,
        borderWidth:3,
        alignSelf:'center'
    },
    besideCircle:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    exp:{
        marginLeft:'10%'
    },
    coin:{
        marginLeft:'10%'
    }
})