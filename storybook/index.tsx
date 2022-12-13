/**
 * Copyright (c) 2022, Henrik Geißler
 */
// If you use expo remove this line
import './rn-addons'

import { withKnobs } from '@storybook/addon-knobs'
import {
  addDecorator,
  configure,
  getStorybookUI,
} from '@storybook/react-native'
import React from 'react'
import { AppRegistry } from 'react-native'

import { ResizeView } from './stories/ResizeView/ResizeView'

// Enables knobs for all stories
addDecorator(withKnobs)
addDecorator(getStory => <ResizeView>{getStory()}</ResizeView>)
/*
 * Import stories
 */
configure(() => {
  ;(r => r.keys().map(r))(require.context('../app', true, /\.stories\.tsx?$/))
}, module)
/*
 * Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
 * To find allowed options for getStorybookUI
 */
const StorybookUIRoot = getStorybookUI({})
/*
 * If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
 * If you use Expo you should remove this line.
 */
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot)

export default StorybookUIRoot
