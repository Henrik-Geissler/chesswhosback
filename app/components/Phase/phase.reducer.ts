/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { createSlice } from '@reduxjs/toolkit'

import { ExamplePhase } from './phase.example'

const initialState = {
  phase: Object.values(ExamplePhase)[0],
}

export const phaseSlice = createSlice({
  initialState,

  name: 'phase',

  reducers: {
    clear: _state => initialState,
    nextPhase: state => {
      const phases = Object.values(ExamplePhase)
      state.phase = phases[(phases.indexOf(state.phase) + 1) % phases.length]
    },
    setPhase: (state, { payload }) => {
      state.phase = payload
    },
  },
})

export const { clear, setPhase } = phaseSlice.actions

export const selectTurnCount = state => state.phase.turnCount

export default phaseSlice.reducer
