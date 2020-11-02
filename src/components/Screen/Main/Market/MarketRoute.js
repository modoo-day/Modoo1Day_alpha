import React from 'react';
import MarketFind from './MarketFind';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MarketStatus from './MarketStatus';


export default MarketRoute = ({navigation}) => {
    
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
          <NavigationRouter.Screen name='MarketFind' component={MarketFind} />
          <NavigationRouter.Screen name='MarketStatus' component={MarketStatus} />
        </NavigationRouter.Navigator>
      );
}

