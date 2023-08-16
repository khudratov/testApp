import React from 'react';
import {SpaceProps} from './Space.types';
import {View} from 'react-native';

export function Space(props: SpaceProps) {
  const {height = 16, width = 0} = props;
  return <View style={{height, width}} />;
}
