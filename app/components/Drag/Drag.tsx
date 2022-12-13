/**
 * Copyright (c) 2022, Henrik Geißler
 */
import type {
  DragCancelEvent,
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
  DragStartEvent,
} from '@dnd-kit/core'
import { DndContext } from '@dnd-kit/core'
import React from 'react'
import { useDispatch } from 'react-redux'

import { cancelDrag, endDrag, overDrag, startDrag } from './drag.thunks'

export const Drag = ({ children }) => {
  const dispatch = useDispatch()
  const onDragStart = (event: DragStartEvent) => {
    console.log('onDragStart', event)
    dispatch(startDrag(event.active.data.current))
  }
  const onDragMove = (event: DragMoveEvent) => {
    // console.log('onDragMove', event)
  }
  const onDragOver = (event: DragOverEvent) => {
    console.log('onDragOver', event)
    dispatch(overDrag(event.over?.id, event.over?.data?.current))
  }
  const onDragEnd = (event: DragEndEvent) => {
    console.log('onDragEnd', event)
    dispatch(endDrag())
  }
  const onDragCancel = (event: DragCancelEvent) => {
    console.log('onDragCancel', event)
    dispatch(cancelDrag())
  }
  return (
    <DndContext
      onDragCancel={onDragCancel}
      onDragEnd={onDragEnd}
      onDragMove={onDragMove}
      onDragOver={onDragOver}
      onDragStart={onDragStart}
    >
      {children}
    </DndContext>
  )
}
