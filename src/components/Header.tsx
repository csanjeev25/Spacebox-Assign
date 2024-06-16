import React from "react"
import { View, StyleSheet, StyleProp, ViewStyle, TextStyle, TextProps, Text } from "react-native"
import { colors, fontSize, spacing } from "../values/theme"
import { IosUtils } from "../utils/ios.utils";

export interface HeaderProps {
  /**
   * Optional title style override.
   */
  titleStyle?: StyleProp<TextStyle>
  /**
   * Optional inner header wrapper style override.
   */
  style?: StyleProp<ViewStyle>
  /**
   * Title text to display
   */
  title?: TextProps["text"]
  /**
   * Optional inner header wrapper style override.
   */
  containerStyleOverride?: StyleProp<ViewStyle>
  /**
   * Optional inner header wrapper style override.
   */
  titleStyleOverride?: StyleProp<ViewStyle>
}

export function Header(props: HeaderProps) {
  const {
    title,
    titleStyle,
    titleStyleOverride,
    containerStyleOverride,
  } = props

  return (
    <View style={[containerStyleOverride ? containerStyleOverride : styles.container]}>
      <Text
        style={[titleStyleOverride ? titleStyleOverride : styles.title, titleStyle]}
      >{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.palette.whiteFive,
    height: spacing.grid_7,
    elevation: 2,
    ...IosUtils.getIosElevation(spacing.xxxs),
    justifyContent: "center"
  },
  title: {
    fontSize: fontSize.h2,
    color: "black",
    fontWeight: "bold",
    marginLeft: spacing.grid_2,
  },
})
