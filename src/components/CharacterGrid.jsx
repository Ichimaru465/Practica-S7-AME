import { CharacterCard } from './CharacterCard'

export function CharacterGrid({ characters, favorites, onToggleFavorite }) {
  if (characters.length === 0) {
    return (
      <div className="empty-state">
        <h3>No se encontraron personajes</h3>
        <p className="muted">Prueba con otro nombre, región o elemento.</p>
      </div>
    )
  }

  return (
    <section aria-label="Lista de personajes">
      <div className="grid-header">
        <h3>Archivo astral</h3>
        <span>
          {characters.length} {characters.length === 1 ? 'resultado' : 'resultados'}
        </span>
      </div>

      <div className="character-grid">
        {characters.map((character) => {
          const isFavorite = favorites.some((item) => item.id === character.id)

          return (
            <CharacterCard
              key={character.id}
              character={character}
              isFavorite={isFavorite}
              onToggleFavorite={onToggleFavorite}
            />
          )
        })}
      </div>
    </section>
  )
}
