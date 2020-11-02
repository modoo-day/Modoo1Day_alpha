import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Button, Text, Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MarketRoute from './Market/MarketRoute';
import GrowRoute from './Grow/GrowRoute';
import FeedRoute from './Feed/FeedRoute';
import HistoryRoute from './History/HistoryRoute';


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
                  >
                    <Image source={require('../../../assets/icons/search.png')}
                      style={{width:27, height:27}}
                    />
                  </TouchableOpacity>
                </View>
                
                <View style={{marginHorizontal:10}}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Account')}
                  >
                    <Image source={require('../../../assets/icons/profile.png')}
                      style={{width:30, height:30}}
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
