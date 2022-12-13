import { EFieldDragState } from '../components/FieldHalo/EFieldDragState'
import { TRepresentation } from '../components/PieceRepresentation/TRepresentation'
import { EPieceKind } from './EPieceKind'

/**
 * Copyright (c) 2022, Henrik Geißler
 */
export type TPiece = {
  $data?: Record<string, number | boolean | string | undefined>
  $fieldId: number
  $id: number
  $kind: EPieceKind
}
export type TPPiece = TPiece & {
  data?: Record<string, number | boolean | string | undefined>
  dragState: EFieldDragState
  name: string
  representation: TRepresentation
  toString: () => string
  x: number
  y: number
}
