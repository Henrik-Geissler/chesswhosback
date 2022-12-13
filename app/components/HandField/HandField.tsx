/**
 * Copyright (c) 2022, Henrik Geißler
 */
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { BoardLayer } from '../BoardLayer/BoardLayer'
import { selectHand } from '../Drag/drag.reducer'
import { Field } from '../Field/Field'
import { Square } from '../Square/Square'
import { Stack } from '../Stack/Stack'

export type BoardProps = {
  children: any
  className: string
  height: number
  width: number
}

export const HandField = styled(({ children, className }: BoardProps) => {
  const { inHand, underHand } = useSelector(selectHand)
  return (
    <Stack className={className}>
      <BoardLayer>
        <Square />
        <Square flipped />
      </BoardLayer>
      <BoardLayer>
        <Field id={-1} piece={inHand} />
        <Field id={-2} piece={underHand} />
      </BoardLayer>
    </Stack>
  )
})`
  background-color: darkkhaki;
  color: darkolivegreen;
  height: 49px;
  width: 98px;
`
