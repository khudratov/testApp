import React from 'react';
import {ButtonProps} from './Button.types';
import {styles} from './Button.styles';
import {Text, TouchableOpacity} from 'react-native';

export function Button(props: ButtonProps) {
  const {label, style, ...attr} = props;

  return (
    <TouchableOpacity style={[styles.container, style]} {...attr}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}
