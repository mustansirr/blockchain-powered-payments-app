import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import PayByUserIDScreen from '../screens/PayByUserIDScreen';
import EnterAmountScreen from '../screens/EnterAmountScreen';
import EnterPINScreen from '../screens/EnterPINScreen';
import RequestMoneyScreen from '../screens/RequestMoneyScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PayByUserID" component={PayByUserIDScreen} /> 
        <Stack.Screen name="EnterAmount" component={EnterAmountScreen} />
        <Stack.Screen name="EnterPIN" component={EnterPINScreen} />
        <Stack.Screen name="RequestMoney" component={RequestMoneyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
