import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';


import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';

import LoginView from './App/Views/Login/LoginView';
import Elevators from './App/Views/Login/Elevators';
import ElevatorStatus from './App/Views/Login/ElevatorStatus';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginView}
          options={{ title: 'Welcome To The Rocket Elevators!' }}
        />
        <Stack.Screen name="Elevators" style={{ flex: 1 }}
         component={Elevators}
         options={{ title: 'Not Active Elevators' }}
          />
          <Stack.Screen
          name="ElevatorStatus"
          component={ElevatorStatus}
          style={{ flex: 1 }}
          options={{ title: 'Status Of The Selected Elevator' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

};
export default App;