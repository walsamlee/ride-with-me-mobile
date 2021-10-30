import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import SplashScreen from './app/screens/SplashScreen';
import VerifyScreen from './app/screens/VerifyScreen';
import ForgotPasswordScreen from './app/screens/ForgotPasswordScreen';
import SearchRideScreen from './app/screens/SearchRideScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OnBoardingStack from './app/routes/OnBoardingStack';
import WelcomeScreen from './app/screens/WelcomeScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <OnBoardingStack />
      {/* <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="SerachRide" component={SearchRideScreen} />
      </Drawer.Navigator> */}
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ title: 'Recover Password' }}
        />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Signup' }} />
        <Stack.Screen name="Verify" component={VerifyScreen} options={{ title: 'Verify' }} />
        {/* <Stack.Screen
          name="SerachRide"
          component={SearchRideScreen}
          options={{ title: 'Ride Search' }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
