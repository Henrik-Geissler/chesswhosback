/**
 * Copyright (c) 2022, Henrik Geißler
 */
export type TPoint = {
  x: number
  y: number
}
export interface IPoint {
  x: number
  y: number
}

export class Point implements IPoint {
  static zero = new Point(0, 0)

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
