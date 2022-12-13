import { StyleProp, TextStyle } from 'react-native'
import { TextDeco } from './types/TextDeco'
import { TextKind } from './types/TextKind'
import { TextSize } from './types/TextSize'
import { typography, colors } from '../../theme'

const sizeLiteral: Record<TextSize, TextStyle> = {
  xxl: { fontSize: 36, lineHeight: 44 },
  xl: { fontSize: 24, lineHeight: 34 },
  l: { fontSize: 20, lineHeight: 32 },
  m: { fontSize: 18, lineHeight: 26 },
  s: { fontSize: 16, lineHeight: 24 },
  xs: { fontSize: 14, lineHeight: 21 },
  xxs: { fontSize: 12, lineHeight: 18 },
}

const fontWeightStyles: Record<keyof typeof typography.primary, TextStyle> =
  Object.entries(typography.primary).reduce((acc, [weight, fontFamily]) => {
    return { ...acc, [weight]: { fontFamily } }
  }, {}) as Record<keyof typeof typography.primary, TextStyle>

export const baseStyle: StyleProp<TextStyle> = [
  sizeLiteral.m,
  fontWeightStyles.normal,
  { color: colors.text },
]

export const kindLiteral: Record<TextKind, StyleProp<TextStyle>> = {
  default: [],
  h1: [sizeLiteral.xxl, fontWeightStyles.bold],
  bold: [fontWeightStyles.bold],
  xxs: [sizeLiteral.xxs, fontWeightStyles.medium],
}

export const decoLiteral: Record<TextDeco, StyleProp<TextStyle>> = {
  default: [],
  highlight: [sizeLiteral.xxl, fontWeightStyles.bold],
}
