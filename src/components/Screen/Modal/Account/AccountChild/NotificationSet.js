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

    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const [isEnabled4, setIsEnabled4] = useState(false);
    const [isEnabled5, setIsEnabled5] = useState(false);

    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
    const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);
    const toggleSwitch5 = () => setIsEnabled5(previousState => !previousState);

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.pushTextContainer}>
                <Text style={styles.pushText}>푸시 알림</Text>
            </View>
            <View style={styles.list}>
                <Text style = {styles.text}>모두 일시 중단</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch1}
                    value={isEnabled1}
                />
            </View>
            <View style={styles.list}>
                <Text style = {styles.text}>콘텐츠 알림</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch2}
                    value={isEnabled2}
                />
            </View>
            <View style={styles.list}>
                <Text style = {styles.text}>콘텐츠 추천</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled3 ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch3}
                    value={isEnabled3}
                />
            </View>
            <View style={styles.list}>
                <Text style = {styles.text}>인증샷 및 댓글</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled4 ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch4}
                    value={isEnabled4}
                />
            </View>
            <View style={styles.list}>
                <Text style = {styles.text}>팔로잉 및 팔로워</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled5 ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch5}
                    value={isEnabled5}
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