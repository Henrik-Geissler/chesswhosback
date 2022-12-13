/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { PStone } from '../../pieces/Stone/PStone'
import { EPieceKind } from '../../types/EPieceKind'
import { range } from '../../utils/array/range'
import { oneOf } from '../../utils/rng/rng'
import { BOARD_LENGTH } from '../Board/Board.constants'
import { PieceRepresentation } from './PieceRepresentation'

// eslint-disable-next-line toplevel/no-toplevel-side-effect
storiesOf('Piece', module).add('all', () => (
  <>
    {[
      new PStone({
        $fieldId: oneOf(range(BOARD_LENGTH)),
        $id: 0,
        $kind: oneOf(Object.values(EPieceKind)),
      }),
    ].map(e => (
      <React.Fragment key={`${e}`}>
        {[true, false].map(t => (
          <React.Fragment key={`${t}`}>
            {`${t ? 'isHovered=true' : 'isHovered=false'} ${e}`}
            <br />
            <PieceRepresentation representation={e.representation} />
            <br />
            <br />
          </React.Fragment>
        ))}
      </React.Fragment>
    ))}
  </>
))
