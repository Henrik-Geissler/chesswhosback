/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable sort-keys */
/**
 * Copyright (c) 2022, Henrik Geißler
 */
export type ExamplePhase =
  | 'StartPhase'
  | 'PlayerPhase'
  | 'OpponentPhase'
  | 'EndPhase'

export const ExamplePhase = {
  StartPhase: 'StartPhase' as ExamplePhase,
  PlayerPhase: 'PlayerPhase' as ExamplePhase,
  OpponentPhase: 'OpponentPhase' as ExamplePhase,
  EndPhase: 'EndPhase' as ExamplePhase,
}
