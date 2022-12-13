import { EFieldDragState } from '../../components/FieldHalo/EFieldDragState'
import { TRepresentation } from '../../components/PieceRepresentation/TRepresentation'
import { EPieceKind } from '../../types/EPieceKind'
import { TPiece } from '../../types/TPiece'

/**
 * Copyright (c) 2022, Henrik Geißler
 */
export interface IPiece extends TPiece {
  getDragStateFor(piece: TPiece): EFieldDragState
  getGridBitmap(): any
  isDraggable(): boolean
  name: string
  onDrop(piece: TPiece): void
  onEndPhase(): void
  // onEnterBoard(): void
  onEnterField(field: number): void
  onHandleDamage(dmg: any): void
  onHoverEnd(): void
  onHoverStart(piece: TPiece): void
  // onLeaveBoard(): void
  onLeaveField(field: number): void
  onOpponentPhase(): void
  onStartPhase(): void
  representation: TRepresentation
  toString(): string
}
export type PieceProps = TPiece

export class PPiece implements IPiece {
  name: string

  representation: TRepresentation

  $fieldId: number

  $id: number

  $kind: EPieceKind

  x: number

  y: number

  getName = (): string => Object.getPrototypeOf(this).constructor.name

  toString = (): string => `${this.getName()}(${this.x}|${this.y})`

  constructor(piece: PieceProps) {
    this.$fieldId = piece.$fieldId
    this.$id = piece.$id
    this.$kind = piece.$kind
  }

  getDragStateFor(piece: TPiece): EFieldDragState {
    return EFieldDragState.Attack
  }

  getGridBitmap() {
    throw new Error('Method not implemented.')
  }

  isDraggable(): boolean {
    return true
  }

  onDrop(piece: TPiece): void {}

  onEndPhase(): void {}

  onEnterField(field: number): void {}

  onHandleDamage(dmg: any): void {}

  onHoverEnd(): void {}

  onHoverStart(piece: TPiece): void {}

  onLeaveField(field: number): void {}

  onOpponentPhase(): void {}

  onStartPhase(): void {}
}
