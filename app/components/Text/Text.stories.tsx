import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Text } from './Text'
import Button from '../../../storybook/stories/Button'
import { HealthBar } from '../HealthBar/HealthBar'
import { TextKind } from './types/TextKind'
import { oneOf } from '../../utils/rng/rng'
const heading = ['What a title OMG!', 'Heading, Heading']
const text = [
  "As others have mentioned the dollar sign is intended to be used by \
mechanically generated code. However, that convention has been broken by \
some wildly popular JavaScript libraries. JQuery, Prototype and MS AJAX \
(AKA Atlas) all use this character in their identifiers (or as an entire \
identifier). In short you can use the $ whenever you want. (The \
interpreter won't complain.) The question is when do you want to use it?",
  "As others have mentioned the dollar sign is intended to be used by \
mechanically generated code.\nHowever, that convention has been broken by \
some wildly popular JavaScript libraries.\n\nJQuery, Prototype and MS AJAX \
(AKA Atlas) all use this character in their identifiers (or as an entire \
identifier).\nIn short you can use the $ whenever you want.\n\n(The \
interpreter won't complain.)\nThe question is when do you want to use it?",
]

storiesOf('Text', module)
  .add('all', () => (
    <>
      {Object.values(TextKind).map(e => (
        <Text kind={e}>{oneOf(heading)}</Text>
      ))}
    </>
  ))
  .add('compositions', () => (
    <>
      <Text kind={TextKind.h1}>{oneOf(heading)}</Text>
      <Text>{oneOf(text)}</Text>
      <br />
      <Text>{oneOf(heading)}</Text>
      <Text kind={TextKind.xxs}>{oneOf(text)}</Text>
    </>
  ))
  .add('inline', () => (
    <>
      <Text>
        <Text>In the middle of a </Text>
        <Text deco='highlight'>highlighted</Text>
        <Text>{' sentence.\n'}</Text>
      </Text>
      <Text>
        {Array(20).map(e => (
          <Text>word</Text>
        ))}
        {Array(20).map(e => (
          <>
            <Text>one</Text>
            <Text>word</Text>
          </>
        ))}
        {Array(20).map(e => (
          <Text>a word</Text>
        ))}
        {Array(20).map(e => (
          <>
            <Text>a</Text>
            <Text> word </Text>
          </>
        ))}
      </Text>
    </>
  ))
