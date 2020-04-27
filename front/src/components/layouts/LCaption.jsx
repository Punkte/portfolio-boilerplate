import React from 'react'
import Caption from '../molecules/Caption'
import styled from 'styled-components'
import colors from '../../assets/colors'

const StyledCaption = styled(Caption)``

const StyledContainer = styled.div`
  height: calc(100vh - 100px); /* header height */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 64px 82px;

  border-bottom: solid ${colors["ligh-grey"]} 1px;

  .caption {
    max-width: 800px;

    & > div + div {
      margin-top: 32px;
    }
  }
`

const LCaption = ({ text }) => {
  return (
    <StyledContainer>
      <StyledCaption text={text} />
    </StyledContainer>
  )
}

export default LCaption
