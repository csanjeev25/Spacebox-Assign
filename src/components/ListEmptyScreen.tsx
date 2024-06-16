import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {colors, spacing } from '../values/theme';

interface IProps {
  /*
    Optional display text
  */
  displayText?: string;
  /*
    on click retry
  */
  onClickHandler?: () => void;
}

export function ListEmptyScreen(props: IProps) {
  const {displayText, onClickHandler} = props;
  return (
    <View style={styles.container}>
      {onClickHandler ? (
        <TouchableOpacity onPress={onClickHandler}>
          <Text style={styles.displayText}>{displayText}</Text>
          <Text style={styles.button}>{'Retry'}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.displayText}>{displayText}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayText: {
    color: colors.palette.greyish,
    marginVertical: spacing.grid_2,
    fontSize: 14,
  },
  button: {
    color: colors.palette.seafoamBlue,
    fontWeight: "semibold",
    fontSize: 14
  },
});
