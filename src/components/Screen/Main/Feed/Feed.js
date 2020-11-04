import React from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

export default Feed = () => {
    return(
        <ScrollView contentContainerStyle={styles.container}>
            {/* <Image style={styles.feedImg} source={require('../../../../assets/img/night.png')} /> */}
            <TouchableOpacity style={styles.imgContainer}>
                <Image style={styles.feedImg} source={require('../../../../assets/img/night.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imgContainer}>
                <Image style={styles.feedImg} source={require('../../../../assets/img/night.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imgContainer}>
                <Image style={styles.feedImg} source={require('../../../../assets/img/night.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imgContainer}>
                <Image style={styles.feedImg} source={require('../../../../assets/img/night.png')}/>
            </TouchableOpacity>
            
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
        marginHorizontal:'1%',
        backgroundColor:'grey'
        },
    imgContainer:{
        backgroundColor:'lightyellow',
        width:125,
        height:125,
        marginTop:'1%'
    },
    feedImg:{
        height:'100%',
        width:'100%'
    }
})