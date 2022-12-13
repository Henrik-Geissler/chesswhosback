/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { PPiece } from '../PPiece'

export const getName = (piece: PPiece): ObjName =>
  Object.getPrototypeOf(piece).constructor.name
