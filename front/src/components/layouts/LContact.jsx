import React from 'react'
import ContactForm from '../organisms/ContactForm'
import TextBlock from '../molecules/TextBlock'
import Text from '../atoms/Text'
import styled from 'styled-components'
import Map from '../atoms/Map'

const paragraph = ({children}) => <Text weight="light" size="extra-large">{children}</Text>

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 64px;
`

const StyledColumn = styled.div`
`

const StyledTextBlock = styled(TextBlock)`
  max-width: 400px;
  h1 {
    margin-top: 0
  }
`

const LContact = ({ text, lngLat }) => {
  return (
    <>
      <StyledContainer>
        <StyledColumn>
          <StyledTextBlock
            text={text} 
            renderers={{ paragraph }}
          />
        </StyledColumn>
        <StyledColumn>
          <ContactForm title="Envoyez votre demande" />
        </StyledColumn>
      </StyledContainer>
      <Map lngLat={lngLat}/>
    </>
  )
}

export default LContact
