import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Text } from 'react-native'
import Button from '../../../storybook/stories/Button'
import HealthBar from '../HealthBar/HealthBar'
import { ExternalLink } from './ExternalLink'

storiesOf('ExternalLink', module).add('with text', () => <ExternalLink />)
