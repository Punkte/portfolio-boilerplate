import React from 'react'
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


const TopNavigation = ({ homeClick, aboutClick, contactClick }) => {
  return (
    <StyledTopNavigationContainer>
      <StyledNavigationLogoButton variant="navlink" after={false} onClick={homeClick}>
        <Logo />
      </StyledNavigationLogoButton>
      <StyledNavigationVoidButton variant="navlink" />
      <StyledNavLink onClick={aboutClick}>À propos</StyledNavLink>
      <StyledNavLink onClick={contactClick}>Contact</StyledNavLink>
    </StyledTopNavigationContainer>
  )
}

export default TopNavigation

