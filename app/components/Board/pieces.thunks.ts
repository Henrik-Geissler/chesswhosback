import { TPiece } from '../../types/TPiece'
import { setHand } from '../Drag/drag.reducer'
import { nextPhase } from '../Phase/phases.thunks'
import { clearField, flushPieces, setPiece } from './pieces.reducer'

/**
 * Copyright (c) 2022, Henrik Geißler
 */

export const movePiece =
  (piece: TPiece, fieldId) => async (dispatch, getState) => {
    await dispatch(clearField(piece.$fieldId))
    // TODO clone piece
    await dispatch(setPiece({ ...piece, $fieldId: fieldId }))
    return dispatch(flushPieces())
  }
export const drop = () => async (dispatch, getState) => {
  const { inHand, underHand, underHandField } = getState().drag
  if (!inHand) return
  if (inHand === underHand) return
  await dispatch(movePiece(inHand, underHandField))
  dispatch(nextPhase())
}
export const pop = fieldId => async (dispatch, getState) => {
  dispatch(setHand(getState().pieces.board[fieldId]))
}
