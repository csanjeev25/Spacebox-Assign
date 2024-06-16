import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IError} from 'src/redux/types';

interface IErrorScreen {
  error: IError;
}
export function ErrorScreen(props: IErrorScreen) {
  const { message, type } = props.error;

  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorImage: {
    width: 300,
    height: 500,
    marginBottom: 20,
  },
  errorText: {
    fontSize: 14,
    textAlign: 'center',
  },
});