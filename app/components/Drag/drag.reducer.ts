/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { createSlice } from '@reduxjs/toolkit'

import { TPiece } from '../../types/TPiece'
import { BOARD_LENGTH } from '../Board/Board.constants'
import { EFieldDragState } from '../FieldHalo/EFieldDragState'

const initialState: {
  dragMap?: EFieldDragState[]
  inHand?: TPiece
  inHandField?: number
  underHand?: TPiece
  underHandField?: number
} = {
  dragMap: Array(BOARD_LENGTH).fill(undefined),
}

export const dragSlice = createSlice({
  initialState,

  name: 'drag',
  reducers: {
    clear: _state => initialState,
    clearHand: state => {
      state.inHand = undefined
      state.underHand = undefined
      state.underHandField = undefined
      state.inHandField = undefined
      state.dragMap = Array(BOARD_LENGTH).fill(undefined)
    },
    setDragMap: (state, { payload }: { payload: EFieldDragState[] }) => {
      state.dragMap = payload
    },
    setHand: (
      state,
      { payload }: { payload: { field: number; piece: TPiece } }
    ) => {
      state.inHand =
        payload?.piece?.$kind === undefined ? undefined : payload.piece
      state.inHandField = payload?.field
    },
    setUnderHand: (
      state,
      { payload }: { payload: { field: number; piece: TPiece } }
    ) => {
      state.underHand =
        payload?.piece?.$kind === undefined ? undefined : payload.piece
      state.underHandField = payload?.field
    },
  },
})

export const { clear, clearHand, setDragMap, setHand, setUnderHand } =
  dragSlice.actions

export const selectHand = state => ({
  inHand: state.drag.inHand,
  underHand: state.drag.underHand,
})
export const selectHandFields = state => ({
  dragMap: state.drag.dragMap,
  inHandField: state.drag.inHandField,
  underHandField: state.drag.underHandField,
})

export default dragSlice.reducer
