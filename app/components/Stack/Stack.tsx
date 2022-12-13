/**
 * Copyright (c) 2022, Henrik Geißler
 */

import React from 'react'
import styled from 'styled-components'

const StackBox = styled.div`
  display: grid;
`
const StackElement = styled.div`
  grid-column: 1;
  grid-row: 1;
`

export const Stack = ({ children, className }) => (
  <StackBox className={className}>
    {children.map((e, i) => (
      <StackElement key={`${i}${e}`}>{e}</StackElement>
    ))}
  </StackBox>
)
