import React from 'react'
import styled from 'styled-components'
export type HealthbarProps = {
  percentage: number
  className: any
}
export const HealthBar = styled(({ className, percentage }: HealthbarProps) => {
  return <div className={className}>--{percentage}++</div>
})`
  color: red !important;
  background-color: blue;
`
