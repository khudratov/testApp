import React from 'react';
import {PostsProps} from './Posts.types';
import {FlatList, FlatListProps} from 'react-native';
import PostCard from '../PostCard';
import {IPost} from '../../types';
import Space from '../common/Space';
import {styles} from './Posts.styles';
import useSmartNavigation from '../../hooks/useSmartNavigation';

export function Posts(props: PostsProps) {
  const {data} = props;
  const navigation = useSmartNavigation();

  const handlePress = (id: string) => {
    return () => navigation.navigate('PostScreen', {id});
  };

  const renderItem: FlatListProps<IPost>['renderItem'] = ({item}) => {
    return <PostCard post={item} onPress={handlePress(item.id)} />;
  };

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={Space}
      ListHeaderComponent={Space}
      ListFooterComponent={Space}
    />
  );
}
