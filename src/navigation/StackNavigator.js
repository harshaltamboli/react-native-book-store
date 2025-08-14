import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens

import Login from '../../screens/Login';
import Register from '../../screens/Register';



const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false, // hide header
      }}
    >
     
      <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="Register" component={Register} />
    
    </Stack.Navigator>
  );
};

export default StackNavigator;
