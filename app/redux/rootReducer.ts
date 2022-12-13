/**
 * Copyright (c) 2022, Henrik Geißler
 */

import { combineReducers } from '@reduxjs/toolkit'

import piecesReducer from '../components/Board/pieces.reducer'
import staticPiecesReducer from '../components/Board/staticPieces.reducer'
import counterReducer from '../components/Counter/counter.reducer'
import dragReducer from '../components/Drag/drag.reducer'
import gridReducer from '../components/Gridkeeper/grid.reducer'
import phaseReducer from '../components/Phase/phase.reducer'
import roundReducer from '../components/Round/round.reducer'

const rootReducer = combineReducers({
  count: counterReducer,
  drag: dragReducer,
  grid: gridReducer,
  phase: phaseReducer,
  pieces: piecesReducer,
  round: roundReducer,
  staticPieces: staticPiecesReducer,
})

export default rootReducer
