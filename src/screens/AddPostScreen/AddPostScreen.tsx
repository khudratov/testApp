import React, {useState} from 'react';
import {AddPostScreenProps} from './AddPostScreen.types';
import {styles} from './AddPostScreen.styles';
import {SafeAreaView} from 'react-native';
import Head from '../../components/typography/Head';
import Container from '../../components/common/Container';
import Space from '../../components/common/Space';
import Input from '../../components/common/Input';
import Paragraph from '../../components/typography/Paragraph';
import Button from '../../components/common/Button';
import {createPostAction, getAllPostSelector} from '../../store/postsSlice';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

export function AddPostScreen(props: AddPostScreenProps) {
  const {navigation} = props;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useAppDispatch();
  const {createLoading} = useAppSelector(getAllPostSelector);

  const handleSave = () => {
    dispatch(
      createPostAction({
        post: {id: Date.now().toString(), title, body},
        onSuccess() {
          navigation.navigate('MainScreen');
        },
      }),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Container>
        <Head type={'large'}>Add Post</Head>
        <Space height={40} />

        <Paragraph type={'small'}>Title</Paragraph>
        <Space height={8} />

        <Input value={title} onChangeText={setTitle} />

        <Space height={40} />

        <Paragraph type={'small'}>Body</Paragraph>
        <Space height={8} />

        <Input value={body} onChangeText={setBody} />

        <Space height={40} />
        <Button
          label={'Save'}
          style={styles.button}
          onPress={handleSave}
          disabled={createLoading}
        />
      </Container>
    </SafeAreaView>
  );
}
