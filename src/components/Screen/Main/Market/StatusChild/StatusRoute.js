import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Review from './Review/Review';
import Contents from './Contents/Contents';
import Certificate from './Certificate/Certificate';
import Question from './Question/Question';


export default StatusRoute = ({navigation}) => {
    
    const NavigationRouter = createMaterialTopTabNavigator();

    return (
        <NavigationRouter.Navigator
          initialRouteName="MarketRoute"
          tabBarOptions={{
          activeTintColor: 'black',
          labelStyle: { fontSize: 14, fontFamily:'neodgm',justifyContent: 'center',
          alignItems: 'center' },
          indicatorStyle:{backgroundColor:'#fdd835'},
          // indicatorContainerStyle:{width:'70%', left:'5%'},
          style: { backgroundColor: 'white'},
          }}
        >
          <NavigationRouter.Screen name='Contents' component={Contents} />
          <NavigationRouter.Screen name='Certificate' component={Certificate} />
          <NavigationRouter.Screen name='Review' component={Review} />
          <NavigationRouter.Screen name='Question' component={Question} />
        </NavigationRouter.Navigator>
      );
}
