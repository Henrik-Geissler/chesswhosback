/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { createSlice } from '@reduxjs/toolkit'

import { stone } from '../../pieces/Stone/images/stone'
import { stone2 } from '../../pieces/Stone/images/stone2'
import { EPieceKind } from '../../types/EPieceKind'
import { TPiece, TPPiece } from '../../types/TPiece'
import { oneOf } from '../../utils/rng/rng'
import { EFieldDragState } from '../FieldHalo/EFieldDragState'

const initialState: {
  $pieces: Record<EPieceKind, Partial<TPPiece>>
  defaults: Omit<TPPiece, keyof TPiece | 'name' | 'x' | 'y'>
} = {
  $pieces: {
    Chest: undefined,
    Key: undefined,
    NULL: undefined,
  },
  defaults: {
    dragState: EFieldDragState.Attack,
    representation: {
      images: [
        {
          classes: ['a', 'b'],
          height: 66,
          src: oneOf([stone, stone2]),
          width: 50,
        },
      ],
    },
  },
}

export const staticPiecesSlice = createSlice({
  initialState,
  name: 'staticPieces',
  reducers: {
    clear: _state => initialState,
    setStaticPiece: (
      state,
      { payload }: { payload: Record<EPieceKind, Partial<TPPiece>> }
    ) => {
      state.$pieces = { ...state.$pieces, ...payload }
    },
  },
})

export const { clear, setStaticPiece } = staticPiecesSlice.actions

export default staticPiecesSlice.reducer
