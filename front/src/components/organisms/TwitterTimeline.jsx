import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Title from '../atoms/Title';
import styled from 'styled-components';
import { TwitterTimelineEmbed } from 'react-twitter-embed';


const StyledTimelineContainer = styled.div`
  width: 384px;
  text-align: right;
`;

const StyledTimeline = styled.div`
  margin-top: 49px;
`;

const TwitterTimeline = ({title, name}) => {


  return(
    <StyledTimelineContainer>
      <Title size="small">
        {title}
      </Title>
      <StyledTimeline>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName={name}
          options={{height: 400}}
        />
      </StyledTimeline>
    </StyledTimelineContainer>
  )
}

TwitterTimeline.displayName = "TwitterTimeline";

TwitterTimeline.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
}

export default TwitterTimeline;

