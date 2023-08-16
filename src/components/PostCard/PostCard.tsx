import React, {useState} from 'react';
import {PostCardProps} from './PostCard.types';
import {styles} from './PostCard.styles';
import {TouchableOpacity, View} from 'react-native';
import {Paragraph} from '../typography/Paragraph/Paragraph';
import Head from '../typography/Head';
import Space from '../common/Space';
import Button from '../common/Button';
import {Input} from '../common/Input/Input';
import useAppDispatch from '../../hooks/useAppDispatch';
import {deletePostActions, updatePostActions} from '../../store/postsSlice';
import UI from '../../ui';

export function PostCard(props: PostCardProps) {
  const {post, style, ...attr} = props;
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [isDeleteDisabled, setIsDeleteDisabled] = useState(false);
  const [isSaveDisabled, setIsSaveDisabled] = useState(false);
  const dispatch = useAppDispatch();

  const handleSave = () => {
    setIsSaveDisabled(true);
    dispatch(
      updatePostActions({
        post: {id: post.id, title, body},
        onSuccess: () => {
          setIsEdit(false);
          setIsSaveDisabled(false);
        },
      }),
    );
  };

  const handleEditPress = () => {
    setIsEdit(true);
  };

  const handleChangeTitle = (value: string) => {
    setTitle(value);
  };
  const handleChangeBody = (value: string) => {
    setBody(value);
  };

  const handleDeletePress = () => {
    setIsDeleteDisabled(true);
    dispatch(deletePostActions({post}));
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      disabled={isDeleteDisabled || isSaveDisabled}
      {...attr}>
      {isEdit ? (
        <Input value={title} onChangeText={handleChangeTitle} />
      ) : (
        <Head type="small">{post.title}</Head>
      )}

      <Space height={4} />

      {isEdit ? (
        <Input value={body} onChangeText={handleChangeBody} />
      ) : (
        <Paragraph type="small">{post.body}</Paragraph>
      )}

      <Space height={16} />

      <View style={styles.inputContainer}>
        {isEdit ? (
          <Button
            label={'Save'}
            onPress={handleSave}
            disabled={isSaveDisabled}
          />
        ) : (
          <Button label={'Edit'} onPress={handleEditPress} />
        )}
        <Space width={16} />
        <Button
          label={'Delete'}
          color={UI.COLORS.ERROR}
          onPress={handleDeletePress}
          disabled={isDeleteDisabled}
        />
      </View>
    </TouchableOpacity>
  );
}
