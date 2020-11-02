import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MarketFind from './MarketFind';



export default MarketFindRoute = ({navigation}) => {
    
    const NavigationRouter = createStackNavigator();

    return (
        <NavigationRouter.Navigator>
          <NavigationRouter.Screen name='MarketFind' component={MarketFind} />
          <NavigationRouter.Screen name='MarketStatus' component={MarketStatus} />
        </NavigationRouter.Navigator>
    
        
    
      );
}

