/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Provider } from 'react-redux'

import { store } from '../../redux/store'
import { Drag } from '../Drag/Drag'
import { HandField } from '../HandField/HandField'
import { RoundInfo } from '../RoundInfo/RoundInfo'
import { TodoComponent } from './AsyncTestComponent'
import { Board } from './Board'

// eslint-disable-next-line toplevel/no-toplevel-side-effect
storiesOf('Board', module).add('ok', () => (
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <Drag>
        <Board />
      </Drag>
      <HandField />
    </DndProvider>
    <TodoComponent />
    <RoundInfo />
  </Provider>
))
