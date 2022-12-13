/**
 * Copyright (c) 2022, Henrik Geißler
 */
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { BoardLayer } from '../BoardLayer/BoardLayer'
import { selectHandFields } from '../Drag/drag.reducer'
import { Field } from '../Field/Field'
import { FieldHalo } from '../FieldHalo/FieldHalo'
import { selectBoardColor } from '../Round/round.reducer'
import { Square } from '../Square/Square'
import { Stack } from '../Stack/Stack'
import { selectBoard } from './pieces.selector'

export type BoardProps = {
  children: any
  className: string
  height: number
  width: number
}
const BoardStack = styled(Stack)`
  background-color: ${props => props.color};
  color: #00000055;
  height: 245px;
  width: 441px;
`

export const Board = styled(({ children, className }: BoardProps) => {
  const dataSource = useSelector(selectBoard)
  const { dragMap, underHandField } = useSelector(selectHandFields)
  // If this gets slow because field rendering is expensive, we need to implement useCallback here
  const color = useSelector(selectBoardColor)
  console.log('render', dataSource)
  return (
    <BoardStack color={color}>
      <BoardLayer noWrap>
        {dataSource.map((e, i) => (
          <Square key={i} isFlipped={i % 2 === 0} />
        ))}
      </BoardLayer>
      <BoardLayer noWrap>
        {dragMap?.map((e, i) => (
          <FieldHalo
            key={`${e}${i} ${i}` === underHandField}
            dragState={e}
            isHovered={i === underHandField}
          />
        ))}
      </BoardLayer>
      <BoardLayer noWrap>
        {dataSource.map((e, i) => (
          <Field
            key={e ?? `u${i}`}
            dragState={dragMap?.[i]}
            id={i}
            isHovered={i === underHandField}
            piece={e}
          />
        ))}
      </BoardLayer>
    </BoardStack>
  )
})``
