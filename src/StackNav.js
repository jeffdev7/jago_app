import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MenuScreen from './pages/Menu';
import SobreScreen from './menuPages/Sobre';
import ContatoScreen from './menuPages/Contato';
import LoginScreen from './menuPages/Login';

const Stack = createStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator 
    /*screenOptions={{
        headerStyle: { backgroundColor: '#505' },
        headerTintColor: '#FF0',
    }}*/ >
      <Stack.Screen name='Menu' component={MenuScreen} options = {{headerShown: false }}/>
      <Stack.Screen name='Sobre' component={SobreScreen} options = {{title: 'Sobre'}}/>
      <Stack.Screen name='Contato' component={ContatoScreen} options = {{title: 'Contato'}}/>
      <Stack.Screen name='Login' component={LoginScreen} options = {{title: 'Login'}}/>
    </Stack.Navigator>
  )
}