import React, {useEffect} from 'react';
import {MainScreenProps} from './MainScreen.types';
import {SafeAreaView} from 'react-native';
import {Posts} from '../../components/Posts/Posts';
import {styles} from './MainScreen.styles';
import Button from '../../components/common/Button';
import {getAllPostSelector, getPostsAction} from '../../store/postsSlice';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import Spinner from '../../components/Spinner';

export function MainScreen(props: MainScreenProps) {
  const {navigation} = props;
  const {list, getLoading} = useAppSelector(getAllPostSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  const handleAddPress = () => {
    navigation.navigate('AddPostScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      {getLoading ? <Spinner /> : null}
      {list ? <Posts data={list} /> : null}
      <Button
        label={'Add Post'}
        style={styles.addButton}
        onPress={handleAddPress}
      />
    </SafeAreaView>
  );
}
