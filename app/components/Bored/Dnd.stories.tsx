/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Provider } from 'react-redux'

import { store } from '../../redux/store'
import { RoundInfo } from '../RoundInfo/RoundInfo'
import { TouchApp } from './Touchapp'
import { TutorialApp } from './TutorialApp'

// eslint-disable-next-line toplevel/no-toplevel-side-effect
storiesOf('Dndold', module)
  .add('html5', () => (
    <Provider store={store}>
      <RoundInfo />
      <TutorialApp />
    </Provider>
  ))
  .add('touch', () => <TouchApp />)
