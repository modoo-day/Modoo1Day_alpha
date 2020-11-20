import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
}   from 'react-native'


const Setting = ({navigation}) => {
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.versionContainer}>
                <TouchableOpacity>
                    <Text style={styles.version}>버전 1.2</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.list}>
                <TouchableOpacity 
                    style={styles.touchable}
                    onPress={()=>navigation.navigate('NotificationSet')}
                >
                    <Text style = {styles.text}>알림</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.list}>
                <TouchableOpacity 
                    style={styles.touchable}
                    //onPress={()=>navigation.navigate('')}
                >
                    <Text style = {styles.text}>개인정보</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.list}>
                <TouchableOpacity 
                    style={styles.touchable}
                    //onPress={()=>navigation.navigate('')}
                >
                    <Text style = {styles.text}>사용가이드</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.list}>
                <TouchableOpacity 
                    style={styles.touchable}
                    //onPress={()=>navigation.navigate('')}
                >
                    <Text style = {styles.text}>문의사항</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.list}>
                <TouchableOpacity 
                    style={styles.touchable}
                    //onPress={()=>navigation.navigate('')}
                >
                    <Text style = {styles.text}>오픈라이선스</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.list}>
                <TouchableOpacity 
                    style={styles.touchable}
                    //onPress={()=>navigation.navigate('')}
                >
                    <Text style = {styles.text}>공지사항</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.list}>
                <TouchableOpacity 
                    style={styles.touchable}
                    //onPress={()=>navigation.navigate('')}
                >
                    <Text style = {styles.text}>이용약관</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Setting;

const styles = StyleSheet.create({
    container:{
        width:'95%',
        alignSelf:'center'
    },
    versionContainer:{
        //backgroundColor:'pink',
        height:50,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    version:{
        fontSize:15
    },
    list:{
        //backgroundColor:'lightblue',
        height:70,
        justifyContent:'center'
    },
    touchable:{
        //backgroundColor:'grey',
        width:'100%'
    },
    text:{
        fontSize:20
    },
})