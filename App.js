import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import WelcomeScreen from './WelcomeScreen';
import SProvider from './datacont';
import FightScreen from './FightScreen';
import StatScreen from './StatScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IProvider from './indexcontext';
import QProvider from './questioncontext';
const Stack = createNativeStackNavigator() 
export default function App() {
  return (
    <SProvider>
      <IProvider>
        <QProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name = "welcome" component={WelcomeScreen} options={{ headerShown: false}} />
            <Stack.Screen name = "question" component={FightScreen} options={{ headerShown: false }}/>
            <Stack.Screen name = "stat" component={StatScreen} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </QProvider>

      </IProvider>
    </SProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
