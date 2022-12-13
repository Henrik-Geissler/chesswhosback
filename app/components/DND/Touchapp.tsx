/**
 * Copyright (c) 2022, Henrik Geißler
 */
import type { CSSProperties, FC } from 'react'
import React, { useMemo } from 'react'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'

import { Board } from './Board'
import { Game } from './Game'

export interface ChessboardTutorialAppState {
  knightPosition: [number, number]
}
const containerStyle: CSSProperties = {
  border: '1px solid gray',
  height: 500,
  width: 500,
}

/**
 * The Chessboard Tutorial Application
 */
export const TouchApp: FC = () => {
  const game = useMemo(() => new Game(), [])

  return (
    <div className='App'>
      <DndProvider backend={TouchBackend}>
        <div style={containerStyle}>
          <Board game={game} />
        </div>
      </DndProvider>
    </div>
  )
}
