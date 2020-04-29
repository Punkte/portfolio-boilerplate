import React from 'react';
import styled from 'styled-components';
import Text from '../atoms/Text';
import moment from "moment";
import colors from '../../assets/colors';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 332px;
  position: relative;
  grid-column-gap: 24px;
`;

const StyledDate = styled.p`
  text-align: center;
`;

const Separator = styled.hr`
  position: absolute;
  width: 11px;
  border: 1px solid ${colors['primary']};
  top: 8px;
  left: calc(50% - 20px);
`;

const Experience = ({ start, end, label, location, at, city, showMonths, inProgress }) => {
  
  const renderDate = () => {
    if(showMonths === true){
      return (
        `${moment(start).format('MMMM YYYY')}  ${inProgress === false && moment(end).format('MMMM YYYY')}`
      )
    }else{
      return(
        `${moment(start).format('YYYY')} - ${moment(end).format('YYYY')}`
      )
    }
  }


  return (
    <Container>
      <StyledDate>
        {renderDate()}
      </StyledDate>
      <Separator/>
      <div>
        <Text size="small" weight="regular">{label}</Text> <br/>
        <Text size="small" weight="light">@{at}</Text> <br/>
        <Text size="small" weight="light">{city}</Text>
      </div>

    </Container>
  )
};

Experience.propTypes = {

};

export default Experience;