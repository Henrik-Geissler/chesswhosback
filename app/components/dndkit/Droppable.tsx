/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { useDroppable } from '@dnd-kit/core'
import React from 'react'

export const Droppable = props => {
  const { isOver, setNodeRef } = useDroppable({
    data: props.piece,
    id: props.id,
  })
  const style = {
    alignItems: 'end',
    border: 'none',
    display: 'flex',
    height: '49px',
    justifyContent: 'center',
    width: '49px',
    // opacity: isOver ? 1 : 0.5,
  }

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  )
}
