import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from './Account';
import Login from './Login';
import auth from '@react-native-firebase/auth';
import Setting from './AccountChild/Setting';



export default AccountRoute = ({navigation}) => {
    
    const NavigationRouter = createStackNavigator();

    if (auth().currentUser != null) {
      return (
        <NavigationRouter.Navigator>
          <NavigationRouter.Screen name='Setting' component={Setting} />
        </NavigationRouter.Navigator>
      );
    } else {
      return (
        <NavigationRouter.Navigator>
          <NavigationRouter.Screen name='Login' component={Login} />
        </NavigationRouter.Navigator>
      );
    }
}

