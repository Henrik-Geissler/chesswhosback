/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { DndContext } from '@dnd-kit/core'
import React, { useState } from 'react'

import { Draggable } from './Draggable'
import { Droppable } from './Droppable'

export const Example = () => {
  const [parent, setParent] = useState(null)
  const draggable = <Draggable id='draggable'>Go ahead, drag me.</Draggable>
  function handleDragEnd({ over }) {
    setParent(over ? over.id : null)
  }
  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!parent ? draggable : null}
      <Droppable id='droppable'>
        {parent === 'droppable' ? draggable : 'Drop here'}
      </Droppable>
    </DndContext>
  )
}
