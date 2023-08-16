import {NativeStackScreenProps} from '@react-navigation/native-stack';

type MainNavigationType = {
  MainScreen: undefined;
  PostScreen: {
    id: string;
  };
  AddPostScreen: undefined;
};

type ScreenProps<T extends keyof MainNavigationType> = NativeStackScreenProps<
  MainNavigationType,
  T,
  'MyStack'
>;

export type {MainNavigationType, ScreenProps};
