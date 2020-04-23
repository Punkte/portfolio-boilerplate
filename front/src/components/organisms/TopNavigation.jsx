import React from 'react'
import PropTypes from 'prop-types'
import Button from '../molecules/Button'
import Logo from '../atoms/Logo'
import Text from '../atoms/Text'
import styled from 'styled-components'


const StyledNavigationButton = styled(Button)`
  max-width: 200px;
  flex-grow: 1;
  line-height: 1;
  border-left: none;
`
const StyledTopNavigationContainer = styled.div`
  display: flex;
  height: 100px;

  ${StyledNavigationButton} {
    &:last-child{
      border-right: none;
    }
  }
`

const StyledNavigationLogoButton = styled(StyledNavigationButton)`
  max-width: 380px;
  &::after {
    display: none;
  }
`

const StyledNavigationVoidButton = styled(StyledNavigationButton)`
  max-width: 515px;
  padding: 0;

  cursor: default;
  border-left: none;
  flex-grow: 2;
  &::after {
    display: none;
  }
`


const TopNavigation = (props) => {
  return (
    <StyledTopNavigationContainer>
      <StyledNavigationLogoButton variant="navlink" after={false}>
        <Logo />
      </StyledNavigationLogoButton>
      <StyledNavigationVoidButton variant="navlink" />
      <StyledNavigationButton variant="navlink">
        <Text size="extra-small">
          À propos
        </Text>
      </StyledNavigationButton>
      <StyledNavigationButton variant="navlink">
        <Text size="extra-small">
          Contact
        </Text>
      </StyledNavigationButton>
    </StyledTopNavigationContainer>
  )
}

TopNavigation.propTypes = {

}

export default TopNavigation

