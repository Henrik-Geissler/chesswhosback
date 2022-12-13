/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Provider } from 'react-redux'

import { store } from '../../redux/store'
import { RoundInfo } from '../RoundInfo/RoundInfo'
import { Example } from './Example'

// eslint-disable-next-line toplevel/no-toplevel-side-effect
storiesOf('Dndkit', module).add('lazy', () => (
  <Provider store={store}>
    <RoundInfo />
    <Example />
  </Provider>
))
