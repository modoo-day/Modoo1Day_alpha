import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import History from './History';



export default HistoryRoute = ({navigation}) => {
    
    const NavigationRouter = createStackNavigator();

    return (
        <NavigationRouter.Navigator>
          <NavigationRouter.Screen name='History' component={History} />
        </NavigationRouter.Navigator>
    
        
    
      );
}

