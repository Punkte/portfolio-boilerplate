import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const sizes = {
  'extra-large': `${38}px` ,
  'large': `${22}px` ,
  'medium': `${20}px` ,
  'small': `${18}px` ,
  'extra-small': `${16}px` ,
}

const StyledText = styled.span`
  font-size: ${props => sizes[props.size]};
  font-family: 'Circe', Arial, Helvetica, sans-serif;
`

const Text = ({children, ...props}) => <StyledText { ...props }>{ children }</StyledText>

Text.displayName = 'Text'
Text.defaultProps = {
  size: 'medium'
};

Text.propTypes = {
  size: PropTypes.oneOf([
    'extra-large',
    'large',
    'medium',
    'small',
    'extra-small'
  ]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

export default Text
