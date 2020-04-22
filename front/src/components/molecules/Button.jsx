import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../assets/colors';

const variants = {
  'navlink': {
    border: `1px solid ${colors["pale-silver"]}`,
    padding: "42px 100px",
    fontSize: "16px",
    background: colors["secondary"],
    boxSizing: "border-box",
    lineHeight: "0",
    "&:after": {
      top: "calc(50% + 21px)",
      left: "35%",
    }
  },
  'default': {
    border: "none",
    padding: "0",
    fontSize: "20px",
    lineHeight: "29px",
    background: "none",
    fontWeight: "bold",
    "&:after": {
      top: "calc(50% + 15px)",
      left: "0",
    }
  }
};

const StyledButton = styled.button`
  font-style: normal;
  font-family: Circe, sans-serif;
  font-weight: ${props => variants[props.variant].fontWeight};
  border: ${props => variants[props.variant].border};
  padding: ${props => variants[props.variant].padding};
  font-size: ${props => variants[props.variant].fontSize};
  line-height: ${props => variants[props.variant].lineHeight};
  background: ${props => variants[props.variant].background}; 
  color: ${colors['light-black']};
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in-out;
  &:after {
    content: "";
    position: absolute;
    height: 2px;
    background: ${colors["primary"]};
    width: 0;
    bottom: 0px;
    top: ${props => variants[props.variant]["&:after"].top};
    left: ${props => variants[props.variant]["&:after"].left};
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    color: ${colors["primary"]};
  }
  &:hover:after {
    width: 30%; 
  }
`;

const Button = ({children, ...props}) => {
  return(
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
};

Button.displayName = "Button";
Button.defaultProps = {
  variant: "default"
}

Button.ropTypes = {
  variant: PropTypes.oneOf([
    'navlink',
    'default'
  ]),
  children: PropTypes.element.isRequired
};

export default Button;
