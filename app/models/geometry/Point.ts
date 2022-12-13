/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { IObj, Obj, ObjectJson } from './Obj'

export type PointJson = ObjectJson & {
  x: number
  y: number
}
export interface IPoint extends IObj {
  x: number
  y: number
}

export class Point extends Obj implements IPoint {
  static zero = new Point(0, 0)

  public toHash = () => `${this._x}-${this._y}`

  public toJson = (): PointJson => ({
    ...super.toJson(),
    x: this._x,
    y: this._y,
  })

  public fromJson = (json?: PointJson) => new Point(json.x, json.y)

  public toString = () => `(${this._x}|${this._y})`

  public distance = (other: Point) =>
    Math.hypot(other.x - this._x, other.y - this._y)

  private _x: number

  private _y: number

  constructor(x?: number, y?: number) {
    super()
    this._x = x ?? 0
    this._y = y ?? 0
  }

  get x() {
    return this._x
  }

  get y() {
    return this._y
  }

  get width() {
    return this._x
  }

  get height() {
    return this._y
  }
}
