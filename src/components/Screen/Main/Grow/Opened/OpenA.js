import React from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    ScrollView,
    } from 'react-native';
import Button from 'apsl-react-native-button';


const OpenA = () => {
  return (
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
                />
            </View>
            <View style={styles.mid}>
                <Text style={styles.category}>모두의 카테고리</Text>
                <TextInput />
            </View>
            <View style={styles.bottom}>
                <Text style={styles.tag}>모두의 태그</Text>
                <TextInput
                    style={styles.tagInput}
                    placeholder='#태그1 (최대 10자)'
                />
                <TextInput 
                    style={styles.tagInput}
                    placeholder='#태그2 (최대 15자)'
                />
                <TextInput 
                    style={styles.tagInput}
                    placeholder='#태그3 (최대 15자)'
                />
            </View>
        </View>
      <View style={styles.deep}>
          <View style={styles.buttonContainer}>

            <Button
                style={styles.button}
                textStyle={styles.buttonText}
                // //activeOpacity={1}
                // disabledStyle={{backgroundColor: 'white'}}
                // isDisabled={email == '' || password == '' ? true : false}
                // isLoading={false}
                // onPress={() => {
                //   login();
            >취소</Button>
            <Button
                style={styles.button}
                textStyle={styles.buttonText}
                // //activeOpacity={1}
                // disabledStyle={{backgroundColor: 'white'}}
                // isDisabled={email == '' || password == '' ? true : false}
                // isLoading={false}
                // onPress={() => {
                //   login();
            >계속</Button>
          </View>
      </View>
    </ScrollView>
  );
};

export default OpenA;

const styles = StyleSheet.create({
  container: {
    alignSelf:'center',
    width:'95%'
  },
  top: {
    backgroundColor: 'pink',
    height:150
  },
  topTextContainer:{
    flexDirection :'row',
    justifyContent:'space-between'
    //backgroundColor:'grey'
  },
  title: {
    fontFamily:'neodgm'
  },
  titleInput:{
    borderWidth:1,
    borderRadius:50,
    height:30,
    fontSize:13,
    paddingLeft:10,
    paddingBottom:5.5,
  },
  textLimit: {

  },
  mid: {
    backgroundColor: 'lightyellow',
    height:150,
  },
  category: {
    fontFamily:'neodgm'
  },
  bottom: {
    backgroundColor: 'lightblue',
    height:250
  },
  tag: {
    fontFamily:'neodgm'
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
  button:{
    width: '50%',
    backgroundColor: '#ffcd2c',
    borderWidth: 2,
    height: '100%',
    borderRadius: 0,
    alignSelf: 'center',
  },
  buttonText:{
    fontFamily: 'neodgm',
    fontSize: 10,
  },
});
