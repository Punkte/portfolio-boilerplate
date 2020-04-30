import React, {Fragment} from 'react';
import LCaption from '../components/layouts/LCaption';
import LAbout from '../components/layouts/LAbout';
import useFetch from '../hooks/useFetch'
import { BASE_URI, getResume, getAbout } from '../utils/api'
import styled from 'styled-components';
import colors from '../assets/colors';
import LResume from '../components/layouts/LResume';

const Container = styled.div`
	margin-top: 64px;
	padding: 0 68px 41px;
	border-bottom: 1px solid ${colors["pale-silver"]};
`;

const About = (props) => {
	const [loadingResume, errorResume, resume] = useFetch(BASE_URI + getResume);
	const [loadingAbout, errorAbout, about] = useFetch(BASE_URI + getAbout);

	if(loadingResume || loadingAbout) {
		return <div>loading</div>
	}
	if(errorResume || errorAbout) {
		return <div>error</div>
	}

	return !!resume && !!about && (
		<Container>
			<LAbout text={about.about_text}/>
			<LResume text={resume.story} experience={resume.experiences} education={resume.educations}/>
		</Container>
	)
};

export default About;