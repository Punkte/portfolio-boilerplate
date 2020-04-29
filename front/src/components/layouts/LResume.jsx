import React, {Fragment} from 'react';
import Title from '../atoms/Title';
import styled from 'styled-components';
import Story from '../molecules/Story';
import Experience from '../molecules/Experience';
import { checkPropTypes } from 'prop-types';

const ExperienceContainer = styled.div`
	margin-top: 24px;
`;

const StyledList = styled.div``;

const Layout = styled.div`
	display: grid;
	grid-column-gap: 32px;
	grid-template-columns: 1fr 384px;
	padding: 64px 0;
`;

const StoryContainer = styled.div`
	max-width: 695px;
`;

const LResume = ({text, experience, education,  ...props}) => {
	return (
		<Layout>
			<StoryContainer>
				<Story text={text}/>
			</StoryContainer>
			
			<div>
				<StyledList>
					<Title size="small">Experience</Title>
					{experience.map((xp, index) => {
						return (
							<ExperienceContainer>
								<Experience 
									key={index}
									inProgress={xp.inProgress}
									label={xp.label} 
									start={xp.start} 
									end={xp.end} 
									at={xp.company}
									city={xp.location}
								/>
							</ExperienceContainer>
						)
					})}
				</StyledList>
		
	
				<StyledList>
					<Title size="small">Formations</Title>
					{education.map((xp, index) => {
						return (
							<ExperienceContainer>
								<Experience 
									key={index}
									inProgress={xp.inProgress}
									label={xp.label} 
									start={xp.start} 
									end={xp.end} 
									at={xp.company}
									city={xp.location}
								/>
							</ExperienceContainer>
						)
					})}
				</StyledList>
			</div>
			
			
		</Layout>
	)
}

export default LResume;