/**
 * Copyright (c) 2022, Henrik Geißler
 */
import type { CSSProperties, FC } from 'react'
import React from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'

import { ItemTypes } from './ItemTypes'
import { knightImage } from './knightImage'

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
    <>
      <DragPreviewImage connect={preview} src={knightImage} />
      <div
        ref={drag}
        style={{
          ...knightStyle,
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        ♘
      </div>
    </>
  )
}
