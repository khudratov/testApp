import React from 'react';
import {InputProps} from './Input.types';
import {styles} from './Input.styles';
import {TextInput} from 'react-native';
import Paragraph from '../../typography/Paragraph';
import UI from '../../../ui';
import Space from '../Space';

export function Input(props: InputProps) {
  const {style, error, ...attr} = props;

  return (
    <>
      <TextInput style={[styles.container, style]} {...attr} />

      {error ? (
        <>
          <Paragraph type={'small'} color={UI.COLORS.ERROR}>
            Error
          </Paragraph>
          <Space height={16} />
        </>
      ) : null}
    </>
  );
}
