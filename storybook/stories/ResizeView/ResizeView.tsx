import React, { useLayoutEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useWindowDimensions, View } from 'react-native'
import style from './style'
import { Rnd } from 'react-rnd'
import styled from 'styled-components'
import { getOffsetThatCentersMeInParent } from '../../../app/utils/geometry/ui'
import { Point } from '../../../app/models/geometry/Point'
import { Obj } from '../../../app/models/geometry/Obj'
import { Piece } from '../../../app/models/geometry/Piece'
import { Field } from '../../../app/models/geometry/Field'
const Resize = styled(Rnd)`
  border: 1px dashed gray;
  &:hover {
    box-shadow: 0 0 20px 0px grey;
  }
  &::before,
  &::after {
    content: '';
    width: 0;
    height: 0%;
  }
`
const START_WIDTH = 320
const START_HEIGHT = 200

export const ResizeView = ({ children }) => {
  const { height, width } = useWindowDimensions()
  const parentSize = new Point(width, height)
  const childSize = new Point(START_WIDTH, START_HEIGHT)
  const [size, setSize] = useState(new Point(START_WIDTH, START_HEIGHT))
  return (
    <View style={style.main}>
      <>{size.toString()}</>
      <Resize
        className='B-O-U-N-D-A-R-Y'
        default={{
          ...getOffsetThatCentersMeInParent({
            childSize,
            parentSize,
          }),
          width: START_WIDTH,
          height: START_HEIGHT,
        }}
        onResize={elementRef => {
          const e = elementRef?.toElement?.parentElement?.parentElement
          setSize(new Point(e.offsetWidth, e.offsetHeight))
        }}
      >
        {children}
      </Resize>
    </View>
  )
}
