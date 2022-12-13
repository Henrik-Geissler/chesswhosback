/**
 * Copyright (c) 2022, Henrik Geißler
 */

import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { render } from 'react-dom'

import Example from './example'

const App = () => (
    <div className='App'>
      <DndProvider backend={HTML5Backend}>
        <Example />
      </DndProvider>
    </div>
  ),
  rootElement = document.getElementById('root')
render(<App />, rootElement)
