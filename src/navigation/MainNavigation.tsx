import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import PostScreen from '../screens/PostScreen';
import {MainNavigationType} from '../types/navigation';
import AddPostScreen from '../screens/AddPostScreen';

const Stack = createNativeStackNavigator<MainNavigationType>();

export default function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{title: 'Posts'}}
      />
      <Stack.Screen
        name="PostScreen"
        component={PostScreen}
        options={{title: ''}}
      />
      <Stack.Screen
        name="AddPostScreen"
        component={AddPostScreen}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
}
