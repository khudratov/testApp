import React from 'react';
import {SpinnerProps} from './Spinner.types';
import {styles} from './Spinner.styles';
import {ActivityIndicator, View} from 'react-native';
import UI from '../../ui';

export function Spinner(props: SpinnerProps) {
  const {...attr} = props;
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={UI.COLORS.PRIMARY} {...attr} />
    </View>
  );
}
