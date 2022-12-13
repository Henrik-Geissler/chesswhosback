/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import React from 'react'

export const Draggable = props => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    data: props.piece,
    id: props.piece.$id,
  })
  const style = {
    backgroundColor: 'transparent',
    border: 'none',
    margin: 0,
    padding: 0,
    paddingBottom: '10px',
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  }

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </button>
  )
}
