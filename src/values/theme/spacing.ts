/**
  Use these spacings for margins/paddings and other whitespace throughout app.
 */
export const spacing = {
  xxxs: 2,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,

  grid_0: 0,
  grid_1_half: 4,
  grid_1: 8,
  grid_3_half: 12,
  grid_2: 16,
  grid_5_half: 20,
  grid_3: 24,
  grid_7_half: 28,
  grid_4: 32,
  grid_9_half: 36,
  grid_5: 40,
  grid_11_half: 44,
  grid_6: 48,
  grid_13_half:52,
  grid_7: 56,
  grid_8: 64,
  grid_9: 72,
  grid_10: 80,

  size_18: 18,
  size_80: 80
} as const

export type Spacing = keyof typeof spacing
