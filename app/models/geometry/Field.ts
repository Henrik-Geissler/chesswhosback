/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { ObjectJson } from './Obj'
import { IPiece, PieceJson } from './Piece'
import { IPoint, Point } from './Point'

export type FieldJson = ObjectJson & {
  pieces: PieceJson[]
}
export interface IField extends IPoint {
  id: number
  pieces: IPiece[]
}
export class Field extends Point implements IField {
  static boardSize: Point

  // TODO save and restore this laso rn ro save and restore
  static zero = new Field()

  private _id: number

  private _pieces: IPiece[]

  constructor(id?: number, x?: number, y?: number, pieces?: IPiece[]) {
    // TODO calc id from x y and vv
    super(x, y)
    this._id = id
    this._pieces = pieces ?? []
  }

  get id() {
    return this._id
  }

  get pieces() {
    return this._pieces
  }
}
