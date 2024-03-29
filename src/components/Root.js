import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Search from './Screen/Modal/Search/Search';
import AccountRoute from './Screen/Modal/Account/AccountRoute';
import MainRoute from './Screen/Main/MainRoute';
import StatusRoute from './Screen/Main/Market/StatusChild/StatusRoute';
import ContentsWrite from './Screen/Main/Market/StatusChild/Contents/ContentsWrite';
import ReviewWrite from './Screen/Main/Market/StatusChild/Review/ReviewWrite';
import ReviewDetail from './Screen/Main/Market/StatusChild/Review/ReviewDetail';
import QuestionWrite from './Screen/Main/Market/StatusChild/Question/QuestionWrite';
import QuestionDetail from './Screen/Main/Market/StatusChild/Question/QuestionDetail';
import Report from './Screen/Modal/Report/Report';
import OpenA from './Screen/Main/Grow/Opened/OpenA';
import OpenB from './Screen/Main/Grow/Opened/OpenB';
import OpenC from './Screen/Main/Grow/Opened/OpenC';
import OpenD from './Screen/Main/Grow/Opened/OpenD';
import OpenE from './Screen/Main/Grow/Opened/OpenE';


import EmailLogin from './Screen/Modal/Account/LoginChild/EmailLogin';
import LoginProfile from './Screen/Modal/Account/LoginChild/SignUp/LoginProfile';
import EmailCheck from './Screen/Modal/Account/LoginChild/SignUp/EmailCheck';
import PasswordCheck from './Screen/Modal/Account/LoginChild/SignUp/PasswordCheck';
import LoginTaste from './Screen/Modal/Account/LoginChild/SignUp/LoginTaste';
import Avatar from './Screen/Main/Grow/Avatar/Avatar';
import ContentsParticipants from './Screen/Main/Market/StatusChild/Contents/ContentsParticipants';
import AttendanceParticipants from './Screen/Main/Market/StatusChild/Attendance/AttendanceParticipants';
import NotificationSet from './Screen/Modal/Account/AccountChild/NotificationSet';

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
          <Stack.Screen name='ContentsParticipants' component={ContentsParticipants}/>
          <Stack.Screen name='ReviewWrite' component={ReviewWrite}/>
          <Stack.Screen name='ReviewDetail' component={ReviewDetail}/>
          <Stack.Screen name='QuestionWrite' component={QuestionWrite}/>
          <Stack.Screen name='QuestionDetail' component={QuestionDetail}/>
          <Stack.Screen name='Report' component={Report}/>
          <Stack.Screen name='AttendanceParticipants' component={AttendanceParticipants}/>
          {/* 성장 모두개설 */}
          <Stack.Screen name='OpenA' component={OpenA}/>
          <Stack.Screen name='OpenB' component={OpenB}/>
          <Stack.Screen name='OpenC' component={OpenC}/>
          <Stack.Screen name='OpenD' component={OpenD}/>
          <Stack.Screen name='OpenE' component={OpenE}/>
          {/* 성장 아바타 */}
          <Stack.Screen name='Avatar' component={Avatar}/>
          {/* 로그인 */}
          <Stack.Screen name='EmailLogin' component={EmailLogin}/>
          <Stack.Screen name='EmailCheck' component={EmailCheck}/>
          <Stack.Screen name='PasswordCheck' component={PasswordCheck}/>
          <Stack.Screen name='LoginProfile' component={LoginProfile}/>
          <Stack.Screen name='LoginTaste' component={LoginTaste}/>
          {/* 프로필 */}
          <Stack.Screen name='NotificationSet' component={NotificationSet}/>


        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Root;
  
