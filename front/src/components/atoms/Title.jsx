import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../assets/colors'

const titleTypes = {
  'extra-large':  { size: `${54}px`, color: colors.black },
  'large':        { size: `${44}px`, color: colors['light-black'] },
  'medium':       { size: `${38}px`, color: colors.primary },
  'small':        { size: `${34}px`, color: colors.black },
}

const StyledTitle = styled.span`
  display: block;

  font-size: ${props => titleTypes[props.size].size};
  color: ${props => titleTypes[props.size].color};
  font-family: 'Serial-Bold', Arial, Helvetica, sans-serif;
  ${props => {
    if(props.size === 'extra-large') {
      return /* css */ `
        position: relative;
        padding-left: 32px;
        &:before {
          content: '';
          position: absolute;
          left: 2px; bottom: 14px;
          width: 27px;
          height: 3px;
          background: ${colors.primary}
        }
      `/* css */
    }
  }}
`

const Title = ({children, ...props}) => <StyledTitle { ...props }>{ children }</StyledTitle>

Title.displayName = 'Title'
Title.defaultProps = {
  size: 'extra-large'
};

Title.propTypes = {
  size: PropTypes.oneOf([
    'extra-large',
    'large',
    'medium',
    'small',
  ]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.number, PropTypes.any]),
  withBar: PropTypes.bool
};

export default Title
