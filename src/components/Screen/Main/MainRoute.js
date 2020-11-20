import React, {useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Button, Text, Image, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MarketRoute from './Market/MarketRoute';
import GrowRoute from './Grow/GrowRoute';
import FeedRoute from './Feed/FeedRoute';
import HistoryRoute from './History/HistoryRoute';
import auth from '@react-native-firebase/auth';


const BottomTab = createBottomTabNavigator();


const MainRoute = ({navigation}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: 'green',
                
              }}>
              
              <View style={{marginHorizontal: 10, flex:1, flexDirection:'row'}}>
                <View style={{marginRight:15, top:2}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Search')}
                    style={styles.searchIconTouch}
                  >
                    <Image source={require('../../../assets/icons/search.png')}
                      style={styles.searchIcon}
                    />
                  </TouchableOpacity>
                </View>
                
                <View style={{marginHorizontal:10}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Account')}
                    style = {auth().currentUser != null ? styles.profileIconTouch : styles.loginIconTouch}
                  >
                    <Image source={ auth().currentUser != null ? require('../../../assets/icons/ghost.png') : require('../../../assets/icons/profile.png')}
                      style={auth().currentUser != null ? styles.profileIcon : styles.loginIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ),
        });
      });

    return (
        <BottomTab.Navigator
          tabBarOptions={{
            activeTintColor: '#ffcd2c',
            inactiveTintColor: 'gray',
            labelPosition: 'below-icon',
            labelStyle:{
              fontFamily:'neodgm',
              fontSize:20
            },
            style: {
              paddingBottom:'4%',
              paddingHorizontal:'14%'
              }
            }}
        >
          <BottomTab.Screen name='MarketRoute' component={MarketRoute} />
          <BottomTab.Screen name='GrowRoute' component={GrowRoute} />
          <BottomTab.Screen name='FeedRoute' component={FeedRoute} />
          <BottomTab.Screen name='HistoryRoute' component={HistoryRoute} />
        </BottomTab.Navigator>
    
        
    
      );
}


export default MainRoute;


const styles = StyleSheet.create({
  searchIconTouch:{
    width:35,
    height:35, 
    //backgroundColor:'purple',
    //borderRadius:20,
    //borderWidth:3,
    //padding:2
  },
  searchIcon:{
    width:'100%',
    height:'100%',
    resizeMode:'contain',
  },
  profileIconTouch:{
    width:40, 
    height:40, 
    backgroundColor:'purple',
    borderRadius:20,
    borderWidth:3,
    padding:2
  },
  profileIcon:{
    width:'100%',
    height:'100%',
    resizeMode:'contain',
  },
  loginIconTouch:{
    width:40, 
    height:40, 
    //backgroundColor:'purple',
    // borderRadius:20,
    // borderWidth:3,
    //padding:2
  },
  loginIcon:{
    width:'100%',
    height:'100%',
    //resizeMode:'contain',
  },

})