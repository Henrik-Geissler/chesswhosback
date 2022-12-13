/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { createSlice } from '@reduxjs/toolkit'

import { EMPTY_GRID } from './Gridkeeper.constants'
import { Grid } from './types/Grid'
import { GridKind } from './types/GridKind'

const initialState: Record<keyof typeof GridKind, Grid> = {
  SolidObstacle: EMPTY_GRID,
  Water: EMPTY_GRID,
}

export const gridSlice = createSlice({
  initialState,

  name: 'grid',

  reducers: {
    clear: _state => initialState,
    setGrid: (state, { payload }) => {
      state[payload.gridKind] = payload.grid
    },
  },
})

export const { clear, setGrid } = gridSlice.actions

export default gridSlice.reducer

// TODO grifkeeperlike board but grids not reactive
