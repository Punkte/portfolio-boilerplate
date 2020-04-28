import React from 'react'
import LCaption from '../components/layouts/LCaption'
import useFetch from '../hooks/useFetch'
import { BASE_URI, getCaption, getWorks } from '../utils/api'
import LWorks from '../components/layouts/LWorks'

const Home = () => {
  const [loadingCaption, errorCaption, caption] = useFetch(BASE_URI + getCaption)
  const [loadingWorks, errorWorks, works] = useFetch(BASE_URI + getWorks)
  if(loadingCaption || loadingWorks) {
    return <div>loading</div>
  }
  if(errorCaption || errorWorks) {
    return <div>error</div>
  }
  return !!caption && !!works && (
    <>
      <LCaption text={caption.content} />
      <LWorks works={works} />
    </>
  )
}

export default Home
