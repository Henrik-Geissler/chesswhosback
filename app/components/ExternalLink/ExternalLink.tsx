import { Link } from '@react-navigation/native'
import React from 'react'
import styled from 'styled-components/native'

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`
export const ExternalLink = () => (
  <StyledLink to={''}>Styled, exciting Link</StyledLink>
)
