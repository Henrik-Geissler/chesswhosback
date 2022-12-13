/**
 * Copyright (c) 2022, Henrik Geißler
 */

import React from 'react'

import { TRepresentation } from './TRepresentation'

export type PieceRepresentationProps = {
  representation?: TRepresentation
}

export const PieceRepresentation = ({
  representation,
}: PieceRepresentationProps) => (
  <>
    {representation?.images?.map(e => (
      <img
        key={`${e.src}${e.classes.join(' ')}`}
        alt=''
        className={e.classes.join(' ')}
        src={e.src}
        style={{ height: e.height, width: e.width }}
      />
    ))}
  </>
)
