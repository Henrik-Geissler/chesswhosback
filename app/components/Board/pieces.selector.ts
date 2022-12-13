/**
 * Copyright (c) 2022, Henrik Geißler
 */

import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../redux/store'
import { TPPiece } from '../../types/TPiece'
import { points } from '../../utils/fieldMath/fieldMath'

export const selectBoard = createSelector(
  (state: RootState) => state.staticPieces.defaults,
  (state: RootState) => state.staticPieces.$pieces,
  (state: RootState) => state.pieces.board,
  /*
   * TODO derive board from pieces
   * which is itself e memo selector
   * TODO log selector memo efficiency
   */
  (defaults, staticPieces, board) =>
    board.map((e): TPPiece => {
      if (!e) return undefined
      const piece = {
        ...defaults,
        ...e,
        name: e.$kind,
        ...points[e.$fieldId],
        ...staticPieces[e.$kind],
      }
      return {
        ...piece,
        toString: () => `${piece.name}${piece.$id}(${piece.x}|${piece.y})`,
      }
    })
)
