/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Provider } from 'react-redux'

import { store } from '../../redux/store'
import { Counter } from './Counter'

// eslint-disable-next-line toplevel/no-toplevel-side-effect
storiesOf('redux', module).add('counter', () => (
  <Provider store={store}>
    <Counter />
  </Provider>
))
