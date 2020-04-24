import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../atoms/Logo'
import styled from 'styled-components'
import NavLink from '../molecules/NavLink'

const StyledNavLink = styled(NavLink)``

const StyledTopNavigationContainer = styled.div`
  display: flex;
  height: 100px;

  ${StyledNavLink} {
    &:last-child{
      border-right: none;
    }
  }
`

const StyledNavigationLogoButton = styled(NavLink)`
  max-width: 380px;
  &::after {
    display: none;
  }
`

const StyledNavigationVoidButton = styled(NavLink)`
  max-width: 100%;
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
      <StyledNavLink>À propos</StyledNavLink>
      <StyledNavLink>Contact</StyledNavLink>
    </StyledTopNavigationContainer>
  )
}

TopNavigation.propTypes = {

}

export default TopNavigation

