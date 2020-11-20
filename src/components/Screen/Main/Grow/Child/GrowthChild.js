import React, {useState, useEffect} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import storage from '@react-native-firebase/storage';


export default GrowthChild = (info) => {

    const navigation = useNavigation();

    const [usrImgUrl, setUsrImgUrl] = useState(
        'https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png',
    );

    const processUserProfileImg = () => {
        if (info._data == undefined) {
        return;
        }
        let userImgStorageUrl = info._data.uploaderImg_str;
        storage()
        .refFromURL(userImgStorageUrl)
        .getDownloadURL()
        .then((url) => {
            // console.log('봐라', url);
            setUsrImgUrl(url);
        });
    };
    useEffect(() => {
        processUserProfileImg();
    }, [info]);


    if (info._data == undefined) {
        return(
            <TouchableOpacity 
                style={styles.listContainer}
                onPress={()=>console.log('아직 로딩중')}    
            >
                <Image style={styles.listImg} source={require('../../../../../assets/img/night.png')}/>
                <View style={styles.listTextContainer}>
                    <Text style={styles.listTitle}>로딩 중</Text>
                    {/* <TouchableOpacity
                        // onPress={navigation.navigate('ContentsWrite')}
                        //  내비게이션이 사용된 태그 안에 또 내비게이션을 사용할 수 없음.
                    > */}
                    <Text style={styles.date}>로딩 중</Text>
                    <Text style={styles.listButton}>로딩 중</Text>
                    {/* </TouchableOpacity> */}
                </View>
            </TouchableOpacity>
        )
    }
    else{
        return(
            <TouchableOpacity 
                style={styles.listContainer}
                onPress={()=>
                    navigation.navigate('StatusRoute', {
                        screen: 'Contents',
                        params: {ref: info._data},
                      })}    
            >
                <Image 
                    style={styles.listImg} 
                    source={{
                        uri:
                          'https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png',
                      }} 
                />
                <View style={styles.listTextContainer}>
                    <Text style={styles.listTitle}>{info._data.title_str}</Text>
                    {/* <TouchableOpacity
                        // onPress={navigation.navigate('ContentsWrite')}
                        //  내비게이션이 사용된 태그 안에 또 내비게이션을 사용할 수 없음.
                    > */}

                    {/* 모두 참여 기간 데이터의 이름을 모르겠음 */}
                    <Text style={styles.date}>20.11.15~20.11.21</Text>
                    <Text style={styles.listButton}>인증하기</Text>
                    {/* </TouchableOpacity> */}
                </View>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    listContainer:{
        flex:1,
        backgroundColor:'#ffcd2c',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        marginVertical:'2.5%'
    },
    listImg:{
        height:130,
        width:130,
        borderRadius:10
    },
    listTextContainer:{
        top:6,
        flex:1,
        //backgroundColor:'lightblue',
        //marginLeft:'5%'
        paddingHorizontal:'2%'
    },
    listTitle:{
        fontSize:15,
        fontWeight:'bold'
    },
    date:{
        fontWeight:'bold',
        fontSize:10
    },
    listButton:{
        alignSelf:'flex-end',
        fontWeight:'bold',
        fontSize:20,
        top:10
    },
})