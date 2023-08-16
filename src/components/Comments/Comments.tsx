import React, {useCallback} from 'react';
import {CommentsProps} from './Comments.types';
import {FlatList, FlatListProps, View} from 'react-native';
import Head from '../typography/Head';
import Space from '../common/Space';
import {IComment} from '../../types';
import {Comment} from '../Comment/Comment';
import Paragraph from '../typography/Paragraph';

export function Comments(props: CommentsProps) {
  const {post, data} = props;

  const renderItem: FlatListProps<IComment>['renderItem'] = ({item}) => {
    return <Comment comment={item} key={item.id} />;
  };

  const ListHeaderComponent: FlatListProps<any>['ListHeaderComponent'] =
    useCallback(() => {
      return (
        <>
          <View>
            <Head type="large">{post.title}</Head>
            <Space height={16} />
            <Paragraph type="large">{post.body}</Paragraph>
          </View>

          <Space height={40} />
          <Head type={'small'}>Comments</Head>

          <Space height={16} />
        </>
      );
    }, [post]);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
}
