/**
 * Copyright (c) 2022, Henrik Geißler
 */
import type { CSSProperties, FC } from 'react'
import React from 'react'
import { useDrag } from 'react-dnd'

import { ItemTypes } from './ItemTypes'

const knightStyle: CSSProperties = {
  cursor: 'move',
  fontSize: 40,
  fontWeight: 'bold',
}

export const Knight: FC = () => {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      collect: monitor => ({
        isDragging: !!monitor.isDragging(),
      }),
      type: ItemTypes.KNIGHT,
    }),
    []
  )

  return (
    <div
      ref={drag}
      style={{
        ...knightStyle,
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      ♘
    </div>
  )
}
