import React from 'react'
import Caption from '../molecules/Caption'
import styled from 'styled-components'
import colors from '../../assets/colors'
import Text from '../atoms/Text'

const StyledCaption = styled(Caption)``
const StyledText = styled(Text)

const StyledContainer = styled.div`
  height: calc(100vh - 100px); /* header height */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 64px 82px;

  border-bottom: solid ${colors["ligh-grey"]} 1px;

  ${StyledCaption} {
    max-width: 800px;

    & ${StyledText}:not(:first-child) {
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
