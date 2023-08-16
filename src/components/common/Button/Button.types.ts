import {ColorValue, TouchableOpacityProps} from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
  color?: ColorValue;
  labelColor?: ColorValue;
}
