/**
 * Copyright (c) 2022, Henrik Geißler
 */
import type { CSSProperties, FC } from 'react'
import React, { useEffect, useState } from 'react'

import { BoardSquare } from './BoardSquare'
import type { Game, Position } from './Game'
import { Piece } from './Piece'

export interface BoardProps {
  game: Game
}
/** Styling properties applied to the board element */
const boardStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
    width: '100%',
  },
  /** Styling properties applied to each square element */
  squareStyle: CSSProperties = { height: '12.5%', width: '12.5%' }

/**
 * The chessboard component
 * @param props The react props
 */
export const Board: FC<BoardProps> = ({ game }) => {
  const [[knightX, knightY], setKnightPos] = useState<Position>(
    game.knightPosition
  )
  useEffect(() => game.observe(setKnightPos))
  function renderSquare(i: number) {
    const x = i % 8,
      y = Math.floor(i / 8)

    return (
      <div key={i} style={squareStyle}>
        <BoardSquare game={game} x={x} y={y}>
          <Piece isKnight={x === knightX && y === knightY} />
        </BoardSquare>
      </div>
    )
  }
  const squares = []
  for (let i = 0; i < 64; i += 1) squares.push(renderSquare(i))

  return <div style={boardStyle}>{squares}</div>
}
