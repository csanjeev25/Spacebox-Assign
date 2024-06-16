const palette = {
  white: "#FFFFFF",
  greyishBrown: '#484848',
  greyishBrownTwo: '#4e4e4e',
  warmGrey: '#6f6f6f',
  lightGrey: '#646464',
  platinum: '#D3D3D3',
  greyish: '#aaaaaa',
  whiteFive: '#efefef',
  seafoamBlue: '#7fd7cf',
  greenBlue: '#00afa0',
  whiteTwo: "#f9f9f9"
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.greyishBrown,
  /**
   * The default color of the screen background.
   */
  background: 'white',
}
