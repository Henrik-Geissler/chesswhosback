/**
 * Copyright (c) 2022, Henrik Geißler
 */
export type EFieldDragState = 'No' | 'Normal' | 'Attack' | 'Origin'

// eslint-disable-next-line no-redeclare
export const EFieldDragState = {
  Attack: 'Attack' as EFieldDragState,
  No: 'No' as EFieldDragState,
  Normal: 'Normal' as EFieldDragState,
  Origin: 'Origin' as EFieldDragState,
}
