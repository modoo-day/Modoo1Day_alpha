import React from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    PixelRatio
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
        justifyContent:'space-evenly',
        flexWrap:'wrap',
        marginHorizontal:'1%',
        backgroundColor:'grey'
        },
    imgContainer:{
        backgroundColor:'lightyellow',
        width:PixelRatio.getPixelSizeForLayoutSize(45),
        height:PixelRatio.getPixelSizeForLayoutSize(45),
        marginTop:'1%'
    },
    feedImg:{
        height:'100%',
        width:'100%'
    }
})