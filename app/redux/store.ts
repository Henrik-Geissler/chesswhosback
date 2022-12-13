/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { piecesSlice } from '../components/Board/pieces.reducer'
import { staticPiecesSlice } from '../components/Board/staticPieces.reducer'
import { counterSlice } from '../components/Counter/counter.reducer'
import { dragSlice } from '../components/Drag/drag.reducer'
import { gridSlice } from '../components/Gridkeeper/grid.reducer'
import { phaseSlice } from '../components/Phase/phase.reducer'
import { roundSlice } from '../components/Round/round.reducer'
import rootReducer from './rootReducer'

const allSlices = (r => r.keys().map(r))(
  require.context('..', true, /\.reducer\.ts?$/)
)
console.log(allSlices, 'allSlices')
// TODO use combinereducers

export const store = configureStore({
  devTools: {
    // TODO disable in prod
    actionCreators: {
      ...counterSlice.actions,
      ...roundSlice.actions,
      ...phaseSlice.actions,
      ...gridSlice.actions,
      ...piecesSlice.actions,
      ...dragSlice.actions,
      ...staticPiecesSlice.actions,
    },
  },
  middleware: [thunk],
  reducer: rootReducer,
})
export type RootState = ReturnType<typeof rootReducer>
