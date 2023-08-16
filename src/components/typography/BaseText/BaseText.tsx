import React from 'react';
import {BaseTextProps} from './BaseText.types';
import {styles} from './BaseText.styles';
import {Text} from 'react-native';

export function BaseText(props: BaseTextProps) {
  const {style, color, ...attr} = props;

  return (
    <Text style={[styles.font, style, color ? {color} : null]} {...attr} />
  );
}
