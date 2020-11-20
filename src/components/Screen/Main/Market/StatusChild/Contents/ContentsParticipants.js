import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    FlatList,
    } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';


const DATA = [
{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'First Item',
    img:require('../../../../../../assets/img/night.png'),
},
{
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
    img:require('../../../../../../assets/img/night.png')
},
{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    img:require('../../../../../../assets/img/night.png'),
},
{
    id: '58694a0f-3da1-4asdf71f-bd96-145571e29d72',
    name: 'Third Item',
    img:require('../../../../../../assets/img/night.png'),
},
{
    id: '58694a0f-3da1-471f-bdasdf96-145571e29d72',
    name: 'Third Item',
    img:require('../../../../../../assets/img/night.png'),
},
{
    id: '58694a0f-3da1-471f-bd96-14asdf5571e29d72',
    name: 'Third Item',
    img:require('../../../../../../assets/img/night.png'),
},
];


const Item = ({ name, img }) => (

        <View style={styles.list}>
            <View style={styles.profileImgContainer}>
                <Image style={styles.profileImg} source={img} />
            </View>
            <View style={styles.profileTextContainer}>
                <Text style={styles.profileText}>{name}</Text>
            </View>
            <View style={styles.profileThird}>
               <ProgressBar 
                    progress={0.85}
                    width={null}
                    height={13}
                    borderRadius={50}
                />
            </View>
        </View>
);

const renderItem = ({ item }) => (
    <Item
        name={item.name}
        img={item.img}
    />

);



const ContentsParticipants = ({navigation}) => {
    return(
        <View Style={styles.container}>
            <View style={styles.participantsNumContainer}>
                <Text style={styles.participantsNum}>참여자 10명</Text>
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default ContentsParticipants;

const styles = StyleSheet.create({
    container:{
        width:'90%',
        alignSelf:'center',
        //backgroundColor:'blue'
    },
    participantsNumContainer:{
        alignSelf:'center',
        marginTop:'5%',
        width:'95%',
        alignItems:'flex-end'
    },
    participantsNum:{
        fontSize:10
    },
    list:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'95%',
        //backgroundColor:'pink',
        alignSelf:'center',
        marginVertical:'2.5%'
    },
    profileImgContainer:{
        width:80,
        height:80
    },
    profileImg:{
        height:'100%',
        width:'100%',
        borderRadius:50
    },
    profileTextContainer:{
        //backgroundColor:'lightblue',
        width:'20%'
    },
    profileText:{
        fontSize:17,
    },
    profileThird:{
        height:50,
        width:'45%',
        //backgroundColor:'grey',
        borderRadius:10,
        justifyContent:'center'
    },
})