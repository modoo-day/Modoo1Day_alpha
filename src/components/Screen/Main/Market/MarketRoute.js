import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Market from './Market';



export default MarketRoute = ({navigation}) => {
    
    const NavigationRouter = createStackNavigator();

    return (
        <NavigationRouter.Navigator>
          <NavigationRouter.Screen name='Market' component={Market} />
          
        </NavigationRouter.Navigator>
    
        
    
      );
}

