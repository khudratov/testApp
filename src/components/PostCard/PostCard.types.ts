import {TouchableOpacityProps, ViewStyle} from 'react-native';
import {IPost} from '../../types';

export interface PostCardProps extends TouchableOpacityProps {
  post: IPost;
  style?: ViewStyle;
}
