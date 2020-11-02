import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Grow from './Grow';



export default GrowRoute = ({navigation}) => {
    
    const NavigationRouter = createStackNavigator();

    return (
        <NavigationRouter.Navigator>
          <NavigationRouter.Screen name='Grow' component={Grow} />
          
        </NavigationRouter.Navigator>
    
        
    
      );
}

