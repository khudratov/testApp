import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigation from './MainNavigation';

export default function Navigation() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
