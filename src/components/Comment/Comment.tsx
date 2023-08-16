import React, {useState} from 'react';
import {CommentProps} from './Comment.types';
import {styles} from './Comment.styles';
import {View} from 'react-native';
import Paragraph from '../typography/Paragraph';
import Button from '../common/Button';
import UI from '../../ui';
import Space from '../common/Space';
import Input from '../common/Input';
import useAppDispatch from '../../hooks/useAppDispatch';
import {
  deleteCommentAction,
  getCommentsSelector,
  updateCommentAction,
} from '../../store/commentsSlice';
import useAppSelector from '../../hooks/useAppSelector';

export function Comment(props: CommentProps) {
  const {comment} = props;
  const [isEdit, setIsEdit] = useState(false);
  const [commentValue, setCommentValue] = useState(comment.text);
  const [isDeleteDisabled, setIsDeleteDisabled] = useState(false);
  const dispatch = useAppDispatch();
  const {updateCommentLoading} = useAppSelector(getCommentsSelector);

  const handleDeletePress = () => {
    setIsDeleteDisabled(true);
    dispatch(
      deleteCommentAction({
        comment,
        onSuccess() {
          setIsDeleteDisabled(false);
        },
      }),
    );
  };

  const handleEditPress = () => {
    setIsEdit(true);
  };

  const handleSavePress = () => {
    dispatch(
      updateCommentAction({
        comment: {...comment, text: commentValue},
        onSuccess() {
          setIsEdit(false);
        },
      }),
    );
  };

  const handleCancelPress = () => {
    setIsEdit(false);
    setCommentValue(comment.text);
  };

  return (
    <View style={styles.container}>
      {isEdit ? (
        <Input value={commentValue} onChangeText={setCommentValue} />
      ) : (
        <Paragraph type="small">{comment.text}</Paragraph>
      )}

      <Space height={16} />
      <View style={styles.row}>
        {isEdit ? (
          <>
            <Button
              label={'Save'}
              onPress={handleSavePress}
              disabled={updateCommentLoading}
            />
            <Space width={8} />
            <Button
              label={'Cancel'}
              disabled={updateCommentLoading}
              onPress={handleCancelPress}
              color={UI.COLORS.ICE_BLUE}
              labelColor={UI.COLORS.BLACK}
            />
          </>
        ) : (
          <>
            <Button label={'Edit'} onPress={handleEditPress} />
            <Space width={8} />

            <Button
              label={'Delete'}
              color={UI.COLORS.ERROR}
              onPress={handleDeletePress}
              disabled={isDeleteDisabled}
            />
          </>
        )}
      </View>
    </View>
  );
}
