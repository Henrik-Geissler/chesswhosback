/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { oneOf } from '../../utils/rng/rng'
import { PPiece } from '../Piece/PPiece'
import { stone } from './images/stone'
import { stone2 } from './images/stone2'

export class PStone extends PPiece {
  representation = {
    images: [
      {
        classes: ['a', 'b'],
        height: 66,
        src: oneOf([stone, stone2]),
        width: 50,
      },
    ],
  }
}
