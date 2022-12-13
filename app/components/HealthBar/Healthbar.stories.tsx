import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Text } from 'react-native'
import Button from '../../../storybook/stories/Button'
import { HealthBar } from './HealthBar'

storiesOf('HealthBar', module)
  .add('with text', () => <HealthBar />)
  .add('with some emoji', () => <HealthBar>hi</HealthBar>)
