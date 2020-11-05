import React from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    PixelRatio,
    FlatList
} from 'react-native';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      img:require('../../../../assets/img/night.png'),
      tag:'#물',
      author:'김대기 기자',
      participants:'1000'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      img:require('../../../../assets/img/night.png'),
      tag:'#물',
      author:'김대기 기자',
      participants:'1000'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      img:require('../../../../assets/img/night.png'),
      tag:'#물',
      author:'김대기 기자',
      participants:'1000'
    },
    { id: '5869sdfasdf0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      img:require('../../../../assets/img/night.png'),
      tag:'#물',
      author:'김대기 기자',
      participants:'1000'
    },
    {
      id: '5ewrdfd94a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      img:require('../../../../assets/img/night.png'),
      tag:'#물',
      author:'김대기 기자',
      participants:'1000'
    },
    {
        id: '5ewrdfdqwer94a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        img:require('../../../../assets/img/night.png'),
        tag:'#물',
        author:'김대기 기자',
        participants:'1000'
      },
      {
        id: '5ewrdfdrg94a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        img:require('../../../../assets/img/night.png'),
        tag:'#물',
        author:'김대기 기자',
        participants:'1000'
      },
      {
        id: '5ewrdfd94sadvca0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        img:require('../../../../assets/img/night.png'),
        tag:'#물',
        author:'김대기 기자',
        participants:'1000'
      },
      {
        id: '5ewrdfd94a0f-3da1-471f-bd96fgf-145571e29d72',
        title: 'Third Item',
        img:require('../../../../assets/img/night.png'),
        tag:'#물',
        author:'김대기 기자',
        participants:'1000'
      },
      {
        id: '5ewrdfd94a0f-3da1-47sdfsdf1f-bd96-145571e29d72',
        title: 'Third Item',
        img:require('../../../../assets/img/night.png'),
        tag:'#물',
        author:'김대기 기자',
        participants:'1000'
      },
      {
        id: '5ewrdfd94a0f-3da1-471f-basdfasdfd96-145571e29d72',
        title: 'Third Item',
        img:require('../../../../assets/img/night.png'),
        tag:'#물',
        author:'김대기 기자',
        participants:'1000'
      },
      {
        id: '5ewrdfd94a0f-3da1-471f-basdfasfdsadfasdfd96-145571e29d72',
        title: 'Third Item',
        img:require('../../../../assets/img/night.png'),
        tag:'#물',
        author:'김대기 기자',
        participants:'1000'
      },
      {
        id: '5ewrdfd94a0f-3da1-471f-basdfasdfd96-145571asdfasdfe29d72',
        title: 'Third Item',
        img:require('../../../../assets/img/night.png'),
        tag:'#물',
        author:'김대기 기자',
        participants:'1000'
      },
      {
        id: '5ewrdfd94a0f-3da1-471f-basdfasdfd96-14557ef1e29d72',
        title: 'Third Item',
        img:require('../../../../assets/img/night.png'),
        tag:'#물',
        author:'김대기 기자',
        participants:'1000'
      },
      {
        id: '5ewrdfd94a0f-3da1-471f-basvadfewfddfasdfd96-145571e29d72',
        title: 'Third Item',
        img:require('../../../../assets/img/night.png'),
        tag:'#물',
        author:'김대기 기자',
        participants:'1000'
      },
      {
        id: '5ewrdfd94a0f-3da1-471f-basdfasrujhtgefedfd96-145571e29d72',
        title: 'Third Item',
        img:require('../../../../assets/img/night.png'),
        tag:'#물',
        author:'김대기 기자',
        participants:'1000'
      },
      {
        id: '5ewrdfd94a0f-3da1-47qwerqwerqeewwerqw1f-basdfasrujhtgefedfd96-145571e29d72',
        title: 'Third Item',
        img:require('../../../../assets/img/night.png'),
        tag:'#물',
        author:'김대기 기자',
        participants:'1000'
      },
      {
        id: '5ewrdfd9qwe4a0f-3da1-471f-basdfasrujhtgefedfd96-145571e29d72',
        title: 'Third Item',
        img:require('../../../../assets/img/night.png'),
        tag:'#물',
        author:'김대기 기자',
        participants:'1000'
      },
      {
        id: '5ewrdfd9qtw4a0f-3da1-471f-basdfasrujhtgefedfd96-145571e29d72',
        title: 'Third Item',
        img:require('../../../../assets/img/night.png'),
        tag:'#물',
        author:'김대기 기자',
        participants:'1000'
      },
      {
        id: '5ewrdfd9qtw4a0f-3qewrqwerqwerqwerqwrda1-471f-basdfasrujhtgefedfd96-145571e29d72',
        title: 'Third Item',
        img:require('../../../../assets/img/night.png'),
        tag:'#물',
        author:'김대기 기자',
        participants:'1000'
      },
      {
        id: '5ewrdfd9qtw4a0f-3da1-4qwerqwerqwerqwerqwerqwerqwer71f-basdfasrujhtgefedfd96-145571e29d72',
        title: 'Third Item',
        img:require('../../../../assets/img/night.png'),
        tag:'#물',
        author:'김대기 기자',
        participants:'1000'
      },
  ];

  



export default Feed = () => {

    const Item = ({img}) => (
        <View style={{flex:1, flexDirection:'column'}}>
            <TouchableOpacity style={styles.imgContainer}>
                <Image style={styles.feedImg} source={img}/>
            </TouchableOpacity>
        </View>
      );

    const renderItem = ({ item }) => (
        <Item
            img={item.img}
        />

    );

    return(


        <View style={styles.Container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                //keyExtractor={item => item.id}
                horizontal={false}
                numColumns={3}
                //removeClippedSubviews={true}
                maxToRenderPerBatch={1}
                //initialNumToRender={1}
            />
        </View>

        
        // <ScrollView contentContainerStyle={styles.container}>
        //     {/* <Image style={styles.feedImg} source={require('../../../../assets/img/night.png')} /> */}
        //     <TouchableOpacity style={styles.imgContainer}>
        //         <Image style={styles.feedImg} source={require('../../../../assets/img/night.png')}/>
        //     </TouchableOpacity>
        // </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        //flexDirection:'row',
        //flexWrap:'wrap',
        //marginHorizontal:'10%',
        //backgroundColor:'grey',
        //justifyContent:'space-between'
        },
    imgContainer:{
        // backgroundColor:'lightyellow',
        // width:PixelRatio.getPixelSizeForLayoutSize(45),
        // height:PixelRatio.getPixelSizeForLayoutSize(45),
        marginTop:'1%',
        left:0.99,
        flex:1,
        aspectRatio:1    
        },
    feedImg:{
        height:'100%',
        width:'100%'
    }
})