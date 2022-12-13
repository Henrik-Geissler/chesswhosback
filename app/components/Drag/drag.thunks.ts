/**
 * Copyright (c) 2022, Henrik Geißler
 */

import { TPiece } from '../../types/TPiece'
import { distance } from '../../utils/fieldMath/fieldMath'
import { drop } from '../Board/pieces.thunks'
import { EFieldDragState } from '../FieldHalo/EFieldDragState'
import { clearHand, setDragMap, setHand, setUnderHand } from './drag.reducer'

export const calcDragMap = () => async (dispatch, getState) => {
  const inHand = getState().drag.inHandField
  // TODO invoke piece hover function
  const dragMap = getState().pieces.board.map((e, i) =>
    e
      ? EFieldDragState.Attack
      : distance(i, inHand) < 2.5
      ? EFieldDragState.Normal
      : EFieldDragState.No
  )
  dragMap[inHand] = EFieldDragState.Origin
  dispatch(setDragMap(dragMap))
}
export const cancelDrag = () => async dispatch => {
  dispatch(clearHand())
}
export const endDrag = () => async dispatch => {
  await dispatch(drop())
  dispatch(clearHand())
}
export const startDragByField = fieldId => async (dispatch, getState) => {
  // TODO invoke piece pop function
  const piece = { field: fieldId, piece: getState().drag.board[fieldId] }
  dispatch(setHand(piece))
}
export const startDrag = (piece?: TPiece) => async dispatch => {
  // TODO invoke piece pop function
  const handPiece = { field: piece?.$fieldId, piece }
  await dispatch(setHand(handPiece))
  dispatch(calcDragMap())
}
export const overDrag = (field?: number, piece?: TPiece) => async dispatch => {
  const underHandPiece = { field, piece }
  dispatch(setUnderHand(underHandPiece))
}
