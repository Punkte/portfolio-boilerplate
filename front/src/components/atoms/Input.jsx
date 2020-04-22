import React, { useRef } from 'react'
import styled from 'styled-components'
import colors from '../../assets/colors'

const StyledInputBox = styled.div`
  position: relative;
  display: inline-block;
  cursor: text;
`
const StyledBar = styled.span`
  display: inline-block;
  height: 2px;
  width: 100%;

  background-color: ${colors["ligh-grey"]};
  color: ${colors["ligh-grey"]};
`
const StyledInput = styled.input`
  font-family: 'Circe', Arial, Helvetica, sans-serif;
  border: none;
  outline: none;
  &:focus {
    color: ${colors.black}
    & + ${StyledBar} {
      background-color: ${colors.black};
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
