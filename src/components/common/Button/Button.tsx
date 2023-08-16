import React from 'react';
import {ButtonProps} from './Button.types';
import {styles} from './Button.styles';
import {TouchableOpacity} from 'react-native';
import Paragraph from '../../typography/Paragraph';
import UI from '../../../ui';

export function Button(props: ButtonProps) {
  const {label, style, color, labelColor, disabled, ...attr} = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.container,
        style,
        color ? {backgroundColor: color} : null,
        disabled ? {backgroundColor: UI.COLORS.GREY} : null,
      ]}
      {...attr}>
      <Paragraph type="small" style={styles.label} color={labelColor}>
        {label}
      </Paragraph>
    </TouchableOpacity>
  );
}
