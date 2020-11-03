import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { 
    NavigationContainer, 
  } from '@react-navigation/native';
import Search from './Screen/Modal/Search/Search';
import AccountRoute from './Screen/Modal/Account/AccountRoute';
import MainRoute from './Screen/Main/MainRoute';
import StatusRoute from './Screen/Main/Market/StatusChild/StatusRoute';
import ContentsWrite from './Screen/Main/Market/StatusChild/Contents/ContentsWrite';

const Stack = createStackNavigator();
const modal = createStackNavigator();

function LogoTitle() {
    return (
      <Image
        style={{width: 50, height: 50}}
        source={require('../assets/icons/modoo.png')}
      />
    );
}

function Root() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={MainRoute}
            options={({navigation, route}) => ({
              headerTitle: (props) => <LogoTitle {...props} />,
            })}
          />
          <modal.Screen name="Search" component={Search} mode={modal} />
          <modal.Screen name="Account" component={AccountRoute} mode={modal} />
          {/* StatusRoute */}
          <Stack.Screen name='StatusRoute' component={StatusRoute}/>
          <Stack.Screen name='ContentsWrite' component={ContentsWrite}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Root;
  