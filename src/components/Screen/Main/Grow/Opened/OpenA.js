import React, {useState} from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    ScrollView,
    } from 'react-native';
import Button from 'apsl-react-native-button';
import {Picker} from '@react-native-picker/picker';




const OpenA = ({navigation}) => {
  
    const [title, setTitle] = useState('');

    const [pick, setPick] = useState('');

    const [tag1, setTag1] = useState('');
    const [tag2, setTag2] = useState('');
    const [tag3, setTag3] = useState('');



    return (
      <>
      <ScrollView>
        <View style={styles.container}>   
          <View style={styles.top}>
            <View style={styles.topTextContainer}>
                <Text style={styles.title}>모두의 이름</Text>
                <Text style={styles.textLimit}>8/25</Text>
            </View>
            <TextInput 
                style={styles.titleInput}
                placeholder="이름을 만들어주세요." 
                value={title}
                onChangeText={(contents) => setTitle(contents)}
            />
          </View>
          <View style={styles.mid}>
            <Text style={styles.category}>모두의 카테고리</Text>
            <Picker
                selectedValue={pick}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                    setPick(itemValue)
                    //this.setState({language: itemValue})
            }>
                <Picker.Item enabled={false} label="카테고리를 선택해주세요."/>
                <Picker.Item label="가족" value="가족" />
                <Picker.Item label="건강/운동" value="건강/운돟" />
            </Picker>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.tag}>모두의 태그</Text>
            <TextInput
                style={styles.tagInput}
                placeholder='#태그1 (최대 10자)'
                value={tag1}
                onChangeText={(contents) => setTag1(contents)}
            />
            <TextInput 
                style={styles.tagInput}
                placeholder='#태그2 (최대 15자)'
                value={tag2}
                onChangeText={(contents) => setTag2(contents)}
            />
            <TextInput 
                style={styles.tagInput}
                placeholder='#태그3 (최대 15자)'
                value={tag3}
                onChangeText={(contents) => setTag3(contents)}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.deep}>
        <View style={styles.buttonContainer}>

          <Button
              style={styles.button1}
              textStyle={styles.buttonText1}
              // //activeOpacity={1}
              // disabledStyle={{backgroundColor: 'white'}}
              //isDisabled={title==''&& pick=='' &&tag1 == '' && tag2 == '' && tag3=='' ? false : true}
              // isLoading={false}
              onPress={() => navigation.goBack() }
          >취소</Button>
          <Button
              style={styles.button2}
              textStyle={styles.buttonText2}
              // //activeOpacity={1}
              disabledStyle={{backgroundColor: 'white'}}
              isDisabled={title==''||pick=='' ||tag1 == '' ? true : false}
              // isLoading={false}
              onPress={() => navigation.navigate('OpenB') }
          >계속</Button>
        </View>
      </View>
    </>
  );
};

export default OpenA;

const styles = StyleSheet.create({
  container: {
    alignSelf:'center',
    width:'95%',
    marginTop:'2%'
  },
  top: {
    //backgroundColor: 'pink',
    height:150
  },
  topTextContainer:{
    flexDirection :'row',
    justifyContent:'space-between'
    //backgroundColor:'grey'
  },
  title: {
    fontFamily:'neodgm',
    fontSize:20
  },
  titleInput:{
    borderWidth:1,
    borderRadius:50,
    height:30,
    fontSize:13,
    paddingLeft:10,
    paddingBottom:5.5,
    marginTop:'2%'
  },
  textLimit: {

  },
  mid: {
    //backgroundColor: 'lightyellow',
    height:150,
  },
  category: {
    fontFamily:'neodgm',
    fontSize:20

  },
  picker:{
    borderWidth:1,
    borderRadius:50,
    height:30,
    //fontSize:13,
    //paddingLeft:10,
    //paddingBottom:5.5,
  },
  bottom: {
   // backgroundColor: 'lightblue',
    height:250
  },
  tag: {
    fontFamily:'neodgm',
    fontSize:20

  },
  tagInput:{
    borderWidth:1,
    borderRadius:10,
    height:37,
    width:250,
    fontSize:13,
    paddingLeft:10,
    paddingBottom:10,
    marginTop:'4%'

  },
  deep:{
    backgroundColor:'grey',
    //height:200,
    justifyContent:'flex-end',
  },
  buttonContainer:{
    flexDirection:'row',
    height:50,
  },
  button1:{
    width: '50%',
    backgroundColor: 'white', 
    //'#ffcd2c',
    borderWidth: 2,
    height: '100%',
    borderRadius: 0,
    alignSelf: 'center',
  },
  buttonText1:{
    fontFamily: 'neodgm',
    fontSize: 10,
  },
  button2:{
    width: '50%',
    backgroundColor: '#ffcd2c', 
    //'#ffcd2c',
    borderWidth: 2,
    height: '100%',
    borderRadius: 0,
    alignSelf: 'center',
  },
  buttonText2:{
    fontFamily: 'neodgm',
    fontSize: 10,
  },
});
