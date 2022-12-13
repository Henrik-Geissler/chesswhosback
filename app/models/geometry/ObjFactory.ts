/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { Field } from './Field'
import { Obj } from './Obj'
import { Piece } from './Piece'
import { Point } from './Point'
import { ObjName } from './types/ObjName'

export const objLiteral: Record<ObjName, Obj> = {
  Field: Field.zero,
  Piece: Piece.zero,
  Point: Point.zero,
}
