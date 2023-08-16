import {RouteProp, useRoute} from '@react-navigation/native';
import {MainNavigationType} from '../types/navigation';

const useSmartRoute = <T extends keyof MainNavigationType>() => {
  return useRoute<RouteProp<MainNavigationType, T>>();
};

export default useSmartRoute;
