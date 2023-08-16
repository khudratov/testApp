import React from 'react';
import {HeadProps} from './Head.types';
import {styles} from './Head.styles';
import BaseText from '../BaseText';

export function Head(props: HeadProps) {
  const {type = 'medium', style, ...attr} = props;

  return <BaseText style={[styles.text, style, styles[type]]} {...attr} />;
}
