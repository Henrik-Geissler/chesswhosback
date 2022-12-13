/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { ObjName } from './types/ObjName'

export type ObjectJson = Record<string, any> & { name: ObjName }
export interface IObj {
  /*
   * Dont override!
   */
  copy: () => Obj
  /*
   * Dont override!
   */
  equals: (other: Obj) => boolean
  /*
   * Dont override!
   */
  equalsAndTypeCheck: (other: Obj) => boolean
  /*
   * FromJson a new Obj from a Json
   */
  fromJson: (json?: ObjectJson) => Obj
  /*
   * Dont override!
   */
  gen: () => Obj
  /*
   * The Name is the Kins of the Obj
   */
  getName: () => ObjName
  /*
   * The Hash is the setting of the Obj. same hash Objs are equal but its not the same Obj
   */
  toHash: () => undefined | number | string
  /*
   * A saveable Notation to fromJson the Obj from
   */
  toJson: () => ObjectJson
  /*
   * A short description of the Object and its State
   */
  toString: () => string
}
export class Obj implements IObj {
  // Static
  static fromJson = (json: ObjectJson) => '' // ObjLiteral[json.name].fromJson(json)

  static idCounter = 0

  static getId = () => Obj.idCounter++

  static zero = new Obj()

  // To override
  public toString = (): string => this.getName()

  public toHash = (): undefined | number | string => undefined

  public toJson = () => ({ name: this.getName() })

  public fromJson = (_json?: ObjectJson) => new Obj()

  // Do not override
  public getName = (): ObjName => Object.getPrototypeOf(this).constructor.name

  public equals = (other: Obj) => other.toHash() === this.toHash()

  public equalsAndTypeCheck = (other: Obj) =>
    other.getName() === this.getName() && this.equals(other)

  public copy = () => this.fromJson(this.toJson())

  // Generic dupe recursavely remove ids and target
  public gen = () => this.fromJson()
}
