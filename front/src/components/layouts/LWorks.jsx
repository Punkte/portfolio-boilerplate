import React from 'react'
import ProjectDescription from '../organisms/ProjectDescription'
import { BASE_URI } from '../../utils/api'
import Title from '../atoms/Title'

const LWorks = ({works}) => {
  return !!works && (
    <>
    <Title size="extra-large">Travaux</Title>
    { works.map(w => (
      <ProjectDescription
        title={w.title}
        text={w.description}
        pageLink={w._id}
        picture={BASE_URI + w.cover.url}
      />
    )) }
    </>
  )
}

export default LWorks
