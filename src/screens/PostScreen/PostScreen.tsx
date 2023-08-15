import {PostScreenProps} from './PostScreen.types';
import {styles} from './PostScreen.styles';
import {SafeAreaView, Text} from 'react-native';
import React from 'react';

export function PostScreen(props: PostScreenProps) {
  return (
    <SafeAreaView>
      <Text>Main Screen</Text>
    </SafeAreaView>
  );
}
