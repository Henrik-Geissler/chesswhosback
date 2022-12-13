import { incrementIdCount } from './round.reducer'

/**
 * Copyright (c) 2022, Henrik Geißler
 */
export const getId = () => async (dispatch, getState) => {
  await dispatch(incrementIdCount())
  return getState().round.idCount
}
