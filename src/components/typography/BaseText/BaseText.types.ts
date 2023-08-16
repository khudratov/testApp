import {ColorValue, TextProps} from 'react-native';

export interface BaseTextProps extends TextProps {
  color?: ColorValue;
  type?: 'small' | 'medium' | 'large';
}
