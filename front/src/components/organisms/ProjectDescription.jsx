import React from 'react'
import Title from '../atoms/Title'
import PropTypes from 'prop-types';
import Text from '../atoms/Text'
import Button from '../molecules/Button'
import styled from 'styled-components'

// 4Nesting 
const StyledButton = styled(Button)``

const StyledContainer = styled.div`
  max-width: 540px;
`
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  .header-title {
    width: 50%;
  }

  .header-content {
    margin-top: 8px;
    max-width: 250px;
    ${StyledButton} {
      display: inline-block;
      margin-top: 20px;
      margin-bottom: 30px;
    }
  }
`

const StyledPictureContainer = styled.div`
  img {
    width: 100%;
  }
`

const ProjectDescription = ({ title, text, pageLink, picture }) => {
  return (
    <StyledContainer>
      <StyledHeader>
        <div className="header-title">
          <Title size="large">{ title }</Title>
        </div>
        <div className="header-content">
          <Text size="small" weight="light">{text}</Text>
          <StyledButton link={pageLink}>Voir le projet</StyledButton>
        </div>
      </StyledHeader>
      <StyledPictureContainer>
        <img src={picture} alt={title} />
      </StyledPictureContainer>
    </StyledContainer>
  )
}

ProjectDescription.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  pageLink: PropTypes.string,
  picture: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ])
}

export default ProjectDescription
