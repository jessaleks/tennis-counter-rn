import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CounterScreen from "./screens/CounterScreen";
import HistoryScreen from './screens/HistoryScreen';
import {tailwind} from "./tailwind";

const Tab = createBottomTabNavigator();

const inactiveTintColor = tailwind('text-gray-400')
const activeTintColor = tailwind('text-gray-100')
const backgroundColor = tailwind('bg-gray-900')

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
          tabBarOptions={{
                  borderColor: "none" ,
                  activeTintColor: activeTintColor.color,
                  inactiveTintColor: inactiveTintColor.color,
                  activeBackgroundColor: backgroundColor.backgroundColor,
                  inactiveBackgroundColor:backgroundColor.backgroundColor
              }}


      >
        <Tab.Screen name="Counter" component={CounterScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}