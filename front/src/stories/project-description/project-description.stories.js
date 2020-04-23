import React from 'react'
import ProjectDescription from "../../components/organisms/ProjectDescription";
import ProjectPicture from './picture.png'

export const SNCFProjectDescription = () => {
  return (
    <ProjectDescription
      title="SNCF Inoui"
      text=" Web-app responsive et social game permettant aux agents de se former sur l’ensemble des applications client SNCF"
      pageLink="#"
      picture={ProjectPicture}
    />
  )
}