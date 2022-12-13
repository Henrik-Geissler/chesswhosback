import React from 'react'
import { Button } from 'react-native'
import { useDispatch } from 'react-redux'

import { PStone } from '../../pieces/Stone/PStone'
import { EPieceKind } from '../../types/EPieceKind'
import { range } from '../../utils/array/range'
import { oneOf } from '../../utils/rng/rng'
import { getId } from '../Round/round.thunks'
import { BOARD_LENGTH } from './Board.constants'
import { flushPieces, setPiece } from './pieces.reducer'
import { drop } from './pieces.thunks'

/**
 * Copyright (c) 2022, Henrik Geißler
 */
export const TodoComponent = () => {
  const dispatch = useDispatch()
  const onFetchClicked = () => {
    // Calls the thunk action creator, and passes the thunk function to dispatch
    dispatch(drop(5))
  }
  const getId2 = async () => {
    for (let index = 0; index < 100; index++) {
      const a = await dispatch(getId())
      console.log(a)
    }
  }
  const newPiece = async id => {
    const p = new PStone({
      $fieldId: oneOf(range(BOARD_LENGTH)),
      $id: id,
      $kind: oneOf(Object.values(EPieceKind)),
    })
    dispatch(setPiece(p))
    dispatch(flushPieces())
  }
  return (
    <>
      <Button onPress={() => onFetchClicked()} title='drop' />
      <Button
        onPress={async () => newPiece(await dispatch(getId()))}
        title='new'
      />
    </>
  )
}
