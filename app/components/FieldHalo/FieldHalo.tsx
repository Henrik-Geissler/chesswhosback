/**
 * Copyright (c) 2022, Henrik Geißler
 */

import React from 'react'

import { EFieldDragState } from './EFieldDragState'

export type FieldHaloProps = {
  dragState?: EFieldDragState
  isHovered?: boolean
}

export const FieldHalo = ({ dragState, isHovered }: FieldHaloProps) => (
  <div className={`dragHalo dragHalo-${dragState} dragHalo-${!!isHovered}`} />
)
