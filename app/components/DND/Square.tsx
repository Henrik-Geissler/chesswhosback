/**
 * Copyright (c) 2022, Henrik Geißler
 */
import type { FC, ReactNode } from 'react'
import React from 'react'

export interface SquareProps {
  black: boolean
  children?: ReactNode
}
const squareStyle = {
  height: '100%',
  width: '100%',
}

export const Square: FC<SquareProps> = ({ black, children }) => {
  const backgroundColor = black ? 'black' : 'white',
    color = black ? 'white' : 'black'
  return (
    <div
      style={{
        ...squareStyle,
        backgroundColor,
        color,
      }}
    >
      {children}
    </div>
  )
}
