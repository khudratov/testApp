import React from 'react';
import {ParagraphProps} from './Paragraph.types';
import {styles} from './Paragraph.styles';
import BaseText from '../BaseText';

export function Paragraph(props: ParagraphProps) {
  const {type = 'medium', style, ...attr} = props;

  return <BaseText style={[styles.text, style, styles[type]]} {...attr} />;
}
