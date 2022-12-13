/**
 * Copyright (c) 2022, Henrik Geißler
 */
import type { FC, ReactNode } from 'react'
import React from 'react'
import { useDrop } from 'react-dnd'

import type { Game } from './Game'
import { ItemTypes } from './ItemTypes'
import { Overlay, OverlayType } from './Overlay'
import { Square } from './Square'

export interface BoardSquareProps {
  children?: ReactNode
  game: Game
  x: number
  y: number
}

export const BoardSquare: FC<BoardSquareProps> = ({
  children,
  game,
  x,
  y,
}: BoardSquareProps) => {
  const [{ canDrop, isOver }, drop] = useDrop(
      () => ({
        accept: ItemTypes.KNIGHT,
        canDrop: () => game.canMoveKnight(x, y),
        collect: monitor => ({
          canDrop: !!monitor.canDrop(),
          isOver: !!monitor.isOver(),
        }),
        drop: () => game.moveKnight(x, y),
      }),
      [game]
    ),
    black = (x + y) % 2 === 1

  return (
    <div
      ref={drop}
      data-testid={`(${x},${y})`}
      role='Space'
      style={{
        height: '100%',
        position: 'relative',
        width: '100%',
      }}
    >
      <Square black={black}>{children}</Square>
      {isOver && !canDrop && <Overlay type={OverlayType.IllegalMoveHover} />}
      {!isOver && canDrop && <Overlay type={OverlayType.PossibleMove} />}
      {isOver && canDrop && <Overlay type={OverlayType.LegalMoveHover} />}
    </div>
  )
}
