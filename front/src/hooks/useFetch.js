import { useState, useEffect } from 'react'

/**
 * Fetch an api
 * @param {String} endpoint
 * @param {Object} options passed in the fetch method
 */
const useFetch = (endpoint, options) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [response, setResponse] = useState(null)
  useEffect(() => {
    (async () => {
      setLoading(true)
      try {
        const req = await fetch(endpoint, options)
        const res = await req.json()
        setResponse(res)
        setLoading(false)
      } catch(error) {
        setResponse(error)
        setError(error)
        setLoading(false)
      }
    })()
  }, [])
  return [loading, error, response]
}

export default useFetch
