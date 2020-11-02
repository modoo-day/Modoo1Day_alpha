import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from './Feed';



export default FeedRoute = ({navigation}) => {
    
    const NavigationRouter = createStackNavigator();

    return (
        <NavigationRouter.Navigator>
          <NavigationRouter.Screen name='Feed' component={Feed} />
          
        </NavigationRouter.Navigator>
    
        
    
      );
}

