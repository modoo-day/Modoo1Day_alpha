import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Growth from './Growth';



export default GrowthRoute = ({navigation}) => {
    
    const NavigationRouter = createStackNavigator();

    return (
        <NavigationRouter.Navigator>
          <NavigationRouter.Screen name='Growth' component={Growth} />
          
        </NavigationRouter.Navigator>
    
        
    
      );
}

