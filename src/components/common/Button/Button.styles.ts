import {StyleSheet} from 'react-native';
import UI from '../../../ui';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: UI.COLORS.PRIMARY,
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  label: {
    color: UI.COLORS.WHITE,
  },
});
