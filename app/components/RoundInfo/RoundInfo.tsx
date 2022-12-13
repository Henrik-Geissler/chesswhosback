/**
 * Copyright (c) 2022, Henrik Geißler
 */
import { useStore } from '../../redux/useStore'

export type RoundInfoProps = {
  className?: any
}
export const RoundInfo = ({ className }: RoundInfoProps) => {
  const a = useStore(state => state)
  console.log(a)
  return `${a.round.turnCount}${a.phase.phase}${a.round.idCount}`
}
