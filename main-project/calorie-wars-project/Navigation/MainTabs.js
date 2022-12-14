import * as react from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Image } from 'react-native';
import Home from '../Screens/Home';
import Leaderboard from '../Screens/Leaderboard';
import ProfilePage from '../Screens/ProfilePage';
import Chat from '../Screens/Chat';
import Log from '../Screens/Log';

import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  LogBox,
} from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export default function MainTabs() {
  console.disableYellowBox = true;
  return (
    <>
      <Tab.Navigator initialRouteName={'ProfilePage'} barStyle={{ backgroundColor: '#8D99AE' }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../assets/home.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Leaderboard"
          component={Leaderboard}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../assets/leaderboard.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../assets/chat.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Log"
          component={Log}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../assets/log.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../assets/user.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
