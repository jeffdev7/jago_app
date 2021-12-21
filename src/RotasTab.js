import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import ServicosScreen from './pages/Servicos';
import MenuScreen from './StackNav';
import HomeScreen from './pages/Home';

const Tab = createBottomTabNavigator();


export default function Rotas() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio-Tab"

      screenOptions={{
        tabBarActiveTintColor: '#FFF',
        tabBarInactiveTintColor: '#000',
        tabBarActiveBackgroundColor: '#87CEEB',
        "tabBarStyle": [
          {
            "display": "flex",
            //backgroundColor: '#87CEEB'
          },
          null
        ],
        //headerStyle: { backgroundColor: '#000', height: 80},
        //headerTintColor: '#FF0',
      }}>

      <Tab.Screen
        name="Serviços-tab"
        component={ServicosScreen}
        options={{
          tabBarLabel: 'Serviços',
          title: 'Serviços',
          showTitle: false,

          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="miscellaneous-services"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Inicio-Tab"
        component={HomeScreen}

        options={{
          title: 'Início',
          headerShown: false,
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu-tab"
        component={MenuScreen}
        options={{
          tabBarLabel: 'Menu',
          title: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="menu"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
