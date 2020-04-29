import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Text from '../atoms/Text'

const StyledNavigationButton = styled(Button)`
  max-width: 200px;
  flex-grow: 1;
  line-height: 1;
  border-left: none;
`;

const NavLink = ({children, ...props}) => {
  return (
    <StyledNavigationButton variant="navlink" { ...props }>
      <Text size="extra-small">{children}</Text>
    </StyledNavigationButton>
  );
}

export default NavLink;