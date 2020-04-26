import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const sizes = {
  'extra-large': `${38}px` ,
  'large': `${22}px` ,
  'medium': `${20}px` ,
  'small': `${18}px` ,
  'extra-small': `${16}px` ,
}

export const weights = {
  'light': 'Circe Thin',
  'regular': 'Circe',
  'bold': 'Circe Bold',
}

const StyledText = styled.span`
  font-size: ${props => sizes[props.size]};
  font-family: ${props => weights[props.weight]}, Arial, Helvetica, sans-serif;
`

const Text = ({children, ...props}) => <StyledText { ...props }>{ children }</StyledText>

Text.displayName = 'Text'
Text.defaultProps = {
  size: 'medium',
  weight: 'regular',
};

Text.propTypes = {
  size: PropTypes.oneOf([
    'extra-large',
    'large',
    'medium',
    'small',
    'extra-small'
  ]),
  weight: PropTypes.oneOf([
    'light',
    'regular',
    'bold',
  ]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number, PropTypes.any]),
};

export default Text
