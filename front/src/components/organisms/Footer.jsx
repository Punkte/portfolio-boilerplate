import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../atoms/Logo';
import styled from 'styled-components';
import colors from '../../assets/colors';
import Text from '../atoms/Text';

const StyledFooterContainer = styled.div`
  padding: 80px 130px;
  border: 1px solid ${colors['pale-silver']};
  background: ${colors['secondary']};
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-column-gap: 12px;
`;

const StyledContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors['black']};
  &:visited {
    color: ${colors['black']};
  }
`;

const StyledSocialContainer = styled.div``;

const StyledLink = styled.a`
  margin-left: 12px;
  text-decoration: none;
`;

const Footer = ({email, phone, links}) => {
  return(
    <StyledFooterContainer>
      <Logo/>
      <StyledContactContainer>
        <Text>{email}</Text>
        <Text>{phone}</Text>
      </StyledContactContainer>
      <StyledSocialContainer>
        {
          links && links.map(({label, href}, key) =>
            (<StyledLink key={key} href={href}><Text>{label}</Text></StyledLink>)
          )
        }
      </StyledSocialContainer>
    </StyledFooterContainer>
  )
}

Footer.displayName = "Footer";

Footer.propTypes = {
  phone: PropTypes.string,
  email: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string
  }))
}


export default Footer;