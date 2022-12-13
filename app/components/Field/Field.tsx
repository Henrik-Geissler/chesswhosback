/**
 * Copyright (c) 2022, Henrik Geißler
 */
import React from 'react'
import styled from 'styled-components'

import { TPPiece } from '../../types/TPiece'
import { Draggable } from '../dndkit/Draggable'
import { Droppable } from '../dndkit/Droppable'
import { EFieldDragState } from '../FieldHalo/EFieldDragState'
import { PieceRepresentation } from '../PieceRepresentation/PieceRepresentation'
import { Stack } from '../Stack/Stack'

export type FieldProps = {
  className: string
  dragState?: EFieldDragState
  id: number
  isHovered?: boolean
  piece: TPPiece
}
const FieldStack = styled(Stack)`
  height: 49px;
  width: 49px;
  z-index: 1000;
`

export const Field = ({
  className,
  dragState,
  id,
  isHovered,
  piece,
}: FieldProps) => {
  console.log('renderField', id, piece, className)
  return (
    <FieldStack>
      <>{`${piece ?? ''}`}</>
      <Droppable id={id} piece={piece}>
        {!!piece && (
          <Draggable piece={piece}>
            <PieceRepresentation representation={piece.representation} />
          </Draggable>
        )}
      </Droppable>
    </FieldStack>
  )
}
