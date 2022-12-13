/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { IField } from './Field'
import { IObj, Obj, ObjectJson } from './Obj'

export type PieceJson = ObjectJson & { fieldId: number; id: number }
export interface IPiece extends IObj {
  field: IField
  id: number
  x: number
  y: number
}

export class Piece extends Obj implements IPiece {
  static zero = new Piece()

  public toHash = () => this._field.toHash()

  public toJson = (): PieceJson => ({
    ...super.toJson(),
    fieldId: this._field.id,
    id: this._id,
  })

  public fromJson = (json?: PieceJson) => new Piece(json.id)

  public toString = () => super.toString() + this._field.toString()

  private _id: number

  private _field: IField

  constructor(id?: number, field?: Field) {
    super()
    this._id = id ?? Obj.getId()
    this._field = field ?? Field.zero
  }

  get id() {
    return this._id
  }

  get field() {
    return this._field
  }

  get x() {
    return this._field.x
  }

  get y() {
    return this._field.y
  }
}
