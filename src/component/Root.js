import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { 
    NavigationContainer, 
  } from '@react-navigation/native';

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
            component={}
            options={({navigation, route}) => ({
              headerTitle: (props) => <LogoTitle {...props} />,
            })}
          />
          <modal.Screen name="Search" component={} mode={modal} />
          <modal.Screen name="Account" component={} mode={modal} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Root;
  