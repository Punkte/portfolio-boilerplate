import React from 'react'
import ProjectDescription from '../organisms/ProjectDescription'
import { BASE_URI } from '../../utils/api'
import Title from '../atoms/Title'
import styled from 'styled-components';
import colors from '../../assets/colors';

const WorkList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TitleContainer = styled.div`
  margin-top: 106px;
  padding: 0 64px;
`;

const WorkItem = styled.div`
  width: 50%;
  padding: 64px;
  border-left: ${props => props.isLeft ? 'none' : '1px solid' + colors["pale-silver"]};
  margin-top: ${props => props.isLeft ? "0" : "150px"};
  
`;

const LWorks = ({works}) => {

  let isOdd = (index) => {
    if((index + 1) % 2 == 0){
      return false;
    }else{
      return true;
    }
  }

  return !!works && (
    <>
      <TitleContainer>
        <Title size="extra-large">Travaux</Title>
      </TitleContainer>
      <WorkList>
        { works.map((w, key) => {
            return (
              <WorkItem isLeft={isOdd(key)} key={key}>
                <ProjectDescription
                  title={w.title}
                  text={w.description}
                  pageLink={w._id}
                  picture={BASE_URI + w.cover.url}
                />
              </WorkItem>
            ) 
          })
        }
      </WorkList>
    </>
  )
}

export default LWorks
