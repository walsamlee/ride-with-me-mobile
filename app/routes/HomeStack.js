import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SearchRideScreen from '../screens/SearchRideScreen';

const screens = {
  Home: {
    screen: SearchRideScreen,
    navigationOptions: {
      title: 'Home',
    }
  }
};

const HomeStack = createNativeStackNavigator(screens, {
  defaultNavigationOption: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default HomeStack;