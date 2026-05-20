import { useEffect, useState } from 'react'
import { characters } from '../data/characters'

export function useFetchCharacters() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchCharacters() {
      try {
        setLoading(true)

        await new Promise((resolve, reject) => {
          const timeout = setTimeout(resolve, 120)

          controller.signal.addEventListener('abort', () => {
            clearTimeout(timeout)
            reject(new DOMException('Solicitud cancelada', 'AbortError'))
          })
        })

        if (!controller.signal.aborted) {
          setData(characters)
        }
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError('No se pudieron cargar los personajes')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchCharacters()

    return () => {
      controller.abort()
    }
  }, [])

  return { data, loading, error }
}