/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { EFieldDragState } from './EFieldDragState'
import { FieldHalo } from './FieldHalo'

// eslint-disable-next-line toplevel/no-toplevel-side-effect
storiesOf('Halo', module).add('all', () => (
  <>
    {[...Object.values(EFieldDragState), undefined].map(e => (
      <React.Fragment key={e}>
        {[true, false].map(t => (
          <React.Fragment key={`${t}`}>
            {`${t ? 'isHovered=true' : 'isHovered=false'} ${e}`}
            <br />
            <FieldHalo dragState={e} isHovered={t} />
            <br />
            <br />
          </React.Fragment>
        ))}
      </React.Fragment>
    ))}
  </>
))
