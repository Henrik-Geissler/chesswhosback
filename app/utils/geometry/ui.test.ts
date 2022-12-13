import { Point } from '../../models/geometry/Point'
import { getOffsetThatCentersMeInParent } from './ui'
test('getOffsetThatCentersMeInParent', () => {
  expect(
    getOffsetThatCentersMeInParent({
      childSize: new Point(0, 0),
      parentSize: Point.zero,
    }).equals(Point.zero)
  ).toBeTruthy()
})
