import React from 'react'
import useFetch from '../hooks/useFetch'
import { getContact, BASE_URI } from '../utils/api'
import LContact from '../components/layouts/LContact'

const Contact = () => {
  const [loading, error, contactContent] = useFetch(BASE_URI + getContact)
  if(loading) {
    return <div>loading</div>
  }
  if(error) {
    return <div>error</div>
  }
  return contactContent && (
    <div>
      <LContact 
        text={contactContent.content}
        lngLat={[contactContent.longitude, contactContent.latitude]}
      />
    </div>
  )
}

export default Contact
