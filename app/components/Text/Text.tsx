import i18n from 'i18n-js'
import React from 'react'
import {
  StyleProp,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native'
import { isRTL, translate, TxKeyPath } from '../../i18n'
import { baseStyle, decoLiteral, kindLiteral } from './Text.config'
import { TextDeco } from './types/TextDeco'
import { TextKind } from './types/TextKind'

export interface TextProps extends RNTextProps {
  /**
   * Text which is looked up via i18n.
   */
  tKey?: TxKeyPath
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  tOptions?: i18n.TranslateOptions
  /**
   * One of the different types of text presets.
   */
  kind?: TextKind
  /**
   * Text decoration modifier.
   */
  deco?: TextDeco
  /**
   * The text to display if not using `tKey`.
   */
  children?: React.ReactNode
}

/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Text.md)
 */
export const Text = ({
  tKey,
  tOptions,
  kind = TextKind.default,
  deco = TextDeco.default,
  children,
  style: styleOverride,
  ...rest
}: TextProps) => (
  <RNText
    selectable={false}
    {...rest}
    style={[
      rtlStyle,
      baseStyle,
      kindLiteral[kind],
      decoLiteral[deco],
      styleOverride,
    ]}
  >
    {(tKey && translate(tKey, tOptions)) || children}
  </RNText>
)

const rtlStyle: TextStyle = isRTL ? { writingDirection: 'rtl' } : {}
