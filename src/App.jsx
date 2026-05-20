import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { CharacterGrid } from './components/CharacterGrid'
import { HeroBanner } from './components/HeroBanner'
import { InfoPanel } from './components/InfoPanel'
import { Navbar } from './components/Navbar'
import { RecentSearches } from './components/RecentSearches'
import { SearchPanel } from './components/SearchPanel'
import { useFetchCharacters } from './hooks/useFetchCharacters'
import { useLocalStorage } from './hooks/useLocalStorage'
import {
  favoritesReducer,
  initialFavoritesState,
} from './reducer/favoritesReducer'

function App() {
  const { data: characters, loading, error } = useFetchCharacters()

  const [search, setSearch] = useState('')
  const [selectedElement, setSelectedElement] = useState('All')
  const [recentSearches, setRecentSearches] = useLocalStorage(
    'recent-searches',
    []
  )

  const [favoritesState, dispatch] = useReducer(
    favoritesReducer,
    initialFavoritesState
  )

  const searchInputRef = useRef(null)

  useEffect(() => {
    searchInputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (search.trim().length < 3) return

    const timer = setTimeout(() => {
      setRecentSearches((currentSearches) => {
        const normalizedSearch = search.trim()
        const withoutRepeated = currentSearches.filter(
          (item) => item.toLowerCase() !== normalizedSearch.toLowerCase()
        )

        return [normalizedSearch, ...withoutRepeated].slice(0, 5)
      })
    }, 700)

    return () => clearTimeout(timer)
  }, [search, setRecentSearches])

  const filteredCharacters = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim()

    return characters.filter((character) => {
      const matchesSearch =
        character.name.toLowerCase().includes(normalizedSearch) ||
        character.role.toLowerCase().includes(normalizedSearch) ||
        character.region.toLowerCase().includes(normalizedSearch)

      const matchesElement =
        selectedElement === 'All' || character.element === selectedElement

      return matchesSearch && matchesElement
    })
  }, [characters, search, selectedElement])

  const featuredCharacter = useMemo(() => {
    return characters.find((character) => character.rarity === 5) || characters[0]
  }, [characters])

  const handleToggleFavorite = useCallback((character) => {
    dispatch({
      type: 'TOGGLE_FAVORITE',
      payload: character,
    })
  }, [])

  const handleClearSearch = useCallback(() => {
    setSearch('')
    setSelectedElement('All')
    searchInputRef.current?.focus()
  }, [])

  const handleSelectRecentSearch = useCallback((value) => {
    setSearch(value)
    searchInputRef.current?.focus()
  }, [])

  return (
    <div className="app-shell">
      <Navbar favoritesCount={favoritesState.favorites.length} />

      <main>
        {loading && (
          <section className="loading-card">
            <div className="loader"></div>
            <p>Cargando archivo astral...</p>
          </section>
        )}

        {error && (
          <section className="error-card">
            <h3>Ocurrió un error</h3>
            <p>{error}</p>
          </section>
        )}

        {!loading && !error && (
          <>
            <HeroBanner featuredCharacter={featuredCharacter} />

            <section className="dashboard-layout">
              <div className="main-column">
                <SearchPanel
                  search={search}
                  setSearch={setSearch}
                  selectedElement={selectedElement}
                  setSelectedElement={setSelectedElement}
                  searchInputRef={searchInputRef}
                  onClear={handleClearSearch}
                />

                <CharacterGrid
                  characters={filteredCharacters}
                  favorites={favoritesState.favorites}
                  onToggleFavorite={handleToggleFavorite}
                />
              </div>

              <div className="side-column">
                <RecentSearches
                  searches={recentSearches}
                  onSelectSearch={handleSelectRecentSearch}
                />

                <InfoPanel
                  totalCharacters={characters.length}
                  favoritesCount={favoritesState.favorites.length}
                  selectedElement={selectedElement}
                />
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  )
}

export default App