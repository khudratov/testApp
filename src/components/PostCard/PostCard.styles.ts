import {StyleSheet} from 'react-native';
import UI from '../../ui';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: UI.COLORS.WHITE,
    shadowColor: UI.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  inputContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
