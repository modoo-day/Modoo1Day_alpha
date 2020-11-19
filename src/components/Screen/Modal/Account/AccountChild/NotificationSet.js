import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Switch
    }   from 'react-native'


const NotificationSet = ({navigation}) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.pushTextContainer}>
                <Text style={styles.pushText}>푸시 알림</Text>
            </View>
            <View style={styles.list}>
                <Text style = {styles.text}>모두 일시 중단</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.list}>
                <Text style = {styles.text}>콘텐츠 알림</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.list}>
                <Text style = {styles.text}>콘텐츠 추천</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.list}>
                <Text style = {styles.text}>인증샷 및 댓글</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.list}>
                <Text style = {styles.text}>팔로잉 및 팔로워</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
          
        </ScrollView>
    )
}

export default NotificationSet;

const styles = StyleSheet.create({
    container:{
        width:'95%',
        alignSelf:'center'
    },
    pushTextContainer:{
        //backgroundColor:'pink',
        height:50,
        //alignItems:'flex-end',
        justifyContent:'center'
    },
    pushText:{
        fontSize:15,
        fontWeight:'bold'
    },
    list:{
        //backgroundColor:'lightblue',
        height:70,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    touchable:{
        //backgroundColor:'grey',
        width:'45%'
    },
    text:{
        fontSize:20
    },
})