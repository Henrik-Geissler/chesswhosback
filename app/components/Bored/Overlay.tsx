/**
 * Copyright (c) 2022, Henrik Geißler
 */
import type { FC } from 'react'
import React from 'react'

export enum OverlayType {
  IllegalMoveHover = 'Illegal',
  LegalMoveHover = 'Legal',
  PossibleMove = 'Possible',
}
export interface OverlayProps {
  type: OverlayType
}

export const Overlay: FC<OverlayProps> = ({ type }) => {
  const color = getOverlayColor(type)
  return (
    <div
      className='overlay'
      role={type}
      style={{
        backgroundColor: color,
        height: '100%',
        left: 0,
        opacity: 0.5,
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 1,
      }}
    />
  )
}
function getOverlayColor(type: OverlayType): string {
  switch (type) {
    case OverlayType.IllegalMoveHover:
      return 'red'
    case OverlayType.LegalMoveHover:
      return 'green'
    case OverlayType.PossibleMove:
      return 'yellow'
  }
}
