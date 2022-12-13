/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { createSlice } from '@reduxjs/toolkit'

import { TPiece } from '../../types/TPiece'
import { BOARD_LENGTH, BOARD_WIDTH } from './Board.constants'

const initialState: {
  $pieces: TPiece[]
  board: Array<TPiece | undefined>
  width: number
} = {
  $pieces: [],
  board: Array(BOARD_LENGTH).fill(undefined),
  width: BOARD_WIDTH,
}

export const piecesSlice = createSlice({
  initialState,
  name: 'pieces',
  reducers: {
    clear: _state => initialState,
    clearField: (state, { payload }: { payload: number }) => {
      state.board[payload] = undefined
    },
    flushPieces: state => {
      state.$pieces = state.board.filter(e => e !== undefined)
    },
    setPiece: (state, { payload }: { payload: TPiece }) => {
      if (payload?.$fieldId === undefined) return
      state.board[payload.$fieldId] =
        payload?.$kind === undefined ? undefined : payload
    },
  },
})

export const { clear, clearField, flushPieces, setPiece } = piecesSlice.actions

export default piecesSlice.reducer
