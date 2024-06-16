import React from 'react';
import {
  TouchableOpacityProps,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';

interface ITouchableButton {
  children: React.ReactNode;
  onPress?: () => void;
  otherProps?: TouchableOpacityProps;
  containerStyle?: ViewStyle;
  style?: ViewStyle;
  activeOpacity?: number;
}

export const TouchableButton = (props: ITouchableButton) => {
  const {
    children,
    onPress,
    containerStyle,
    style,
    activeOpacity,
    ...otherProps
  } = props;

  return (
    <TouchableOpacity
      {...otherProps}
      style={[containerStyle, style]}
      onPress={() => {
        requestAnimationFrame(() => {
          onPress?.();
        });
      }}
      activeOpacity={activeOpacity ?? 0.85}
    >
      {children}
    </TouchableOpacity>
  );
};
