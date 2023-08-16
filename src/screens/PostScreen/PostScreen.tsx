import {PostScreenProps} from './PostScreen.types';
import {styles} from './PostScreen.styles';
import {SafeAreaView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '../../components/common/Container';
import {Comments} from '../../components/Comments/Comments';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import {getAllPostSelector, getPostByIdAction} from '../../store/postsSlice';
import Spinner from '../../components/Spinner';
import {
  createCommentAction,
  getCommentsSelector,
} from '../../store/commentsSlice';
import {getCommentsByPostIdAction} from '../../store/commentsSlice';
import Input from '../../components/common/Input';
import Space from '../../components/common/Space';
import Button from '../../components/common/Button';

export function PostScreen(props: PostScreenProps) {
  const {route} = props;
  const {id} = route.params;
  const dispatch = useAppDispatch();
  const {getPostLoading, post} = useAppSelector(getAllPostSelector);
  const {comments, getCommentLoading, createCommentLoading} =
    useAppSelector(getCommentsSelector);
  const [comment, setComment] = useState('');

  const handleSendComment = () => {
    dispatch(
      createCommentAction({
        comment: {
          postId: id,
          text: comment,
          id: Date.now().toString(),
        },
        onSuccess() {
          setComment('');
        },
      }),
    );
  };

  useEffect(() => {
    dispatch(getCommentsByPostIdAction({postId: id}));
    dispatch(getPostByIdAction({id}));
  }, [dispatch, id]);

  return (
    <SafeAreaView style={styles.container}>
      <Container>
        {getPostLoading || getCommentLoading ? (
          <Spinner />
        ) : post ? (
          <Comments data={comments !== null ? comments : []} post={post} />
        ) : null}
      </Container>

      <View style={styles.inputContainer}>
        <Input value={comment} onChangeText={setComment} style={styles.input} />
        <Space width={16} />
        <Button
          label={'Send'}
          onPress={handleSendComment}
          disabled={createCommentLoading}
        />
      </View>
    </SafeAreaView>
  );
}
