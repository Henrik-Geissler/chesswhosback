/**
 * Copyright (c) 2022, Henrik Geißler
 */

import React from 'react'
import styled from 'styled-components'

const Square0 = styled.div`
  height: 49px;
  width: 49px;
`
const Square1 = styled.div`
  background-color: #00000022;
  height: 49px;
  width: 49px;
`

export type SquareProps = {
  isFlipped?: boolean
}

export const Square = ({ isFlipped }: SquareProps) =>
  isFlipped ? <Square0 /> : <Square1 />
