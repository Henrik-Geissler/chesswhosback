/**
 * Copyright (c) 2022, Henrik Geißler
 */

import React from 'react'
import styled from 'styled-components'

const BoardLayerBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`
const BoardLayerElement = styled.div`
  height: 49px;
  width: 49px;
`

export const BoardLayer = ({ children, noWrap }) => {
  const Wrapper = noWrap ? React.Fragment : BoardLayerElement
  return (
    <BoardLayerBox>
      {children?.map((e, i) => (
        <Wrapper key={`${i}${e}`}>{e}</Wrapper>
      ))}
    </BoardLayerBox>
  )
}
