import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../assets/colors';
import Text from "../atoms/Text";
import Input from '../atoms/Input';

const StyledFieldContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr;
`;

const Field = ({label, ...props}) => {
  return(
		<StyledFieldContainer>
			<Text>{label}</Text>
			<Input {...props}/>
		</StyledFieldContainer>
  )
};

Field.displayName = "Field";


Field.propTypes = {
  label: PropTypes.string,
};

export default Field;
