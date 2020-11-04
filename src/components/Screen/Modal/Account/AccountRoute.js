import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from './Account';
import Login from './Login';



export default AccountRoute = ({navigation}) => {
    
    const NavigationRouter = createStackNavigator();

    return (
        <NavigationRouter.Navigator>
          <NavigationRouter.Screen name='Login' component={Login} />
          <NavigationRouter.Screen name='Account' component={Account} />
        </NavigationRouter.Navigator>
    
        
    
      );
}

