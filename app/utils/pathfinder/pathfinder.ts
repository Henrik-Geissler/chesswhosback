/**
 * Copyright (c) 2022, Henrik Geißler
 */
import PF from 'pathfinding'

import { Grid } from '../../components/Gridkeeper/types/Grid'

export const getPathFromMatrix = (matrix: Grid) => {
  const grid = new PF.Grid(matrix)
  const finder = new PF.AStarFinder()
  /*
   *   DiagonalMovement:true
   * dontCrossCorners: true,
   *  heuristic: PF.Heuristic.chebyshev
   */
  return finder.findPath(0, 0, 3, 3, grid)
}
