import React from 'react';
import {MainScreenProps} from './MainScreen.types';
import {styles} from './MainScreen.styles';
import {SafeAreaView} from 'react-native';
import Button from '../../components/Button';

export function MainScreen(props: MainScreenProps) {
  return (
    <SafeAreaView>
      <Button label="Choose" />
    </SafeAreaView>
  );
}
