import { Thunk } from '../../redux/types'
import { incrementTurnCount } from '../Round/round.reducer'
import { ExamplePhase } from './phase.example'
import { setPhase } from './phase.reducer'

/**
 * Copyright (c) 2022, Henrik Geißler
 */
export const nextPhase = () => async (dispatch, getState) => {
  const phases = Object.values(ExamplePhase)
  const lastPhase = getState().phase.phase
  const nextIndex = (phases.indexOf(lastPhase) + 1) % phases.length
  const next = phases[nextIndex]
  if (nextIndex === 0) dispatch(incrementTurnCount())
  dispatch(setPhase(next))
  return dispatch(processPhase[next]())
}
const processPhase: Record<ExamplePhase, Thunk> = {
  EndPhase: () => async (dispatch, _getState) => {
    dispatch(nextPhase())
  },
  OpponentPhase: () => async (dispatch, _getState) => {
    dispatch(nextPhase())
  },
  PlayerPhase: () => async (dispatch, _getState) => {
    // Dispatch(nextPhase())
  },
  StartPhase: () => async (dispatch, _getState) => {
    dispatch(nextPhase())
  },
}
