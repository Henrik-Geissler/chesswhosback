import { Point } from '../../models/geometry/Point'
type Parameters = {
  childSize: Point
  parentSize: Point
}

export const getOffsetThatCentersMeInParent = ({
  childSize,
  parentSize,
}: Parameters): Point =>
  new Point(
    (parentSize.x - childSize.x) * 0.5,
    (parentSize.y - childSize.y) * 0.5
  )
