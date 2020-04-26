import React from 'react'
import Caption from '../../components/organisms/Caption'

export const CaptionWithText = () => {
  const text = `Hello,  \nJe m’appelle __Christella__ et je suis une UX/UI designer qui travaille actuellement chez Brainsonic à Paris, je suis aussi étudiante en troisième année à HÉTIC.   \n  \n En parallèle, je fais du bénévolat pour l’association Braillenet.\n`
  return (
    <Caption text={text}/>
  )
}
export { Caption }
