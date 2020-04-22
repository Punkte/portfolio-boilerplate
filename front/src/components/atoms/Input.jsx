import React, { useRef } from 'react'
import styled from 'styled-components'
import colors from '../../assets/colors'

const StyledInputBox = styled.div`
  position: relative;
  display: inline-block;
  cursor: text;
`
const StyledBar = styled.span`
  position: relative;
  display: block;
  margin-top: 8px;
  height: 1px;
  width: 100%;

  background-color: ${colors["ligh-grey"]};
  color: ${colors["ligh-grey"]};

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${colors.black};
    transition: transform .2s ease;
    transform-origin: left;
    transform: scaleX(0);
  }
`
const StyledInput = styled.input`
  display: block;
  width: 100%;
  font-family: 'Circe', Arial, Helvetica, sans-serif;
  font-size: 20px;
  border: none;
  outline: none;
  &:focus {
    color: ${colors.black};
    & + ${StyledBar} {
      &::before {
        transform: scaleX(1);
      }
    }
  }
`

const Input = (props) => {
  const inputEl = useRef(null);
  const focusInput = () => {
    inputEl.current.focus()
  }
  return (
    <StyledInputBox onClick={focusInput}>
      <StyledInput ref={inputEl} {...props}/>
      <StyledBar />
    </StyledInputBox>
  )
}

export default Input
