import React, {Fragment} from 'react';
import Title from '../atoms/Title';
import styled from 'styled-components';
import Text from '../atoms/Text';
import TwitterTimeLine from '../organisms/TwitterTimeline';

const StyledContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 384px;
	grid-column-gap: 32px;
	margin-top: 64px;
`;

const StyledTextBloc = styled.div`
	margin-top: 49px;
	max-width: 695px;
`;

const LAbout = ({text}) => {
	return (
		<>
			<Title size="extra-large">A propos</Title>
			<StyledContainer>
				<div>
					<Title size="small">Experiences</Title>
					<StyledTextBloc>
						<Text size="extra-large">
							{text}
						</Text>
					</StyledTextBloc>
				</div>
				
				<TwitterTimeLine title="Mes derniers tweets" name="christella_kl"/>
			</StyledContainer>
		</>
	)
}

export default LAbout;