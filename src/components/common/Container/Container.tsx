import React from 'react';
import {ContainerProps} from './Container.types';
import {styles} from './Container.styles';
import {View} from 'react-native';

export function Container(props: ContainerProps) {
  return <View style={styles.container} {...props} />;
}
