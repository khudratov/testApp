import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainNavigationType} from '../types/navigation';

const useSmartNavigation = () => {
  return useNavigation<StackNavigationProp<MainNavigationType>>();
};

export default useSmartNavigation;
