/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { createSlice } from '@reduxjs/toolkit'

import { oneOf } from '../../utils/rng/rng'

const initialState = {
  idCount: 0, // TODO start at lowest valid number
  initialSetup: {
    boardColor: oneOf(['darkkhaki', 'darkseagreen', 'burlywood', 'lightgray']),
  },
  turnCount: 1,
}

export const roundSlice = createSlice({
  initialState,

  name: 'round',

  reducers: {
    clear: _state => initialState,
    incrementIdCount: state => {
      state.idCount++
    },
    incrementTurnCount: state => {
      state.turnCount++
    },
    setInitialSetup: (state, { payload }) => {
      state.initialSetup = payload
    },
  },
})

export const { clear, incrementIdCount, incrementTurnCount, setInitialSetup } =
  roundSlice.actions

export const selectTurnCount = state => state.round.turnCount
export const selectIdCount = state => state.round.idCount
export const selectBoardColor = state => state.round.initialSetup.boardColor

export default roundSlice.reducer
