import styled from "styled-components";

export const Spacer = styled.div`
  margin-top: ${({size}) => size ? size : '8px'};
`