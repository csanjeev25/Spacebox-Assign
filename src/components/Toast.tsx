import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
import { emitter, eventName } from 'src/utils';

export function Toast() {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const opacity = useRef(new Animated.Value(0)).current;

  const showToast = useCallback(
    (msg: string) => {
      setMessage(msg);
      setVisible(true);

      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          Animated.timing(opacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start(() => setVisible(false));
        }, 3000); // Toast visibility duration
      });
    },
    [opacity],
  );

  useEffect(() => {
    emitter.on(eventName.SHOW_TOAST, showToast);
    return () => {
      emitter.off(eventName.SHOW_TOAST, showToast);
    };
  }, [showToast]);

  if (!visible) {
    return null;
  }

  return (
    <Animated.View style={[styles.toast, { opacity }]}>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    zIndex: 1000,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
