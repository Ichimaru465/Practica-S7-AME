export function CharacterCard({ character, isFavorite, onToggleFavorite }) {
  return (
    <article className={`character-card ${isFavorite ? 'is-favorite' : ''}`}>
      <div className="character-image">
        <img src={character.image} alt={character.name} loading="lazy" />
        <span className="element-badge" data-element={character.element}>
          {character.element}
        </span>
      </div>

      <div className="character-body">
        <div className="character-header">
          <div>
            <h4>{character.name}</h4>
            <p className="role">{character.role}</p>
          </div>
          <span className="stars" aria-label={`Rareza ${character.rarity}`}>
            {'★'.repeat(character.rarity)}
          </span>
        </div>

        <p className="description">{character.description}</p>

        <div className="card-footer">
          <span className="region">{character.region}</span>
          <button
            type="button"
            className={isFavorite ? 'is-favorite' : ''}
            onClick={() => onToggleFavorite(character)}
            aria-pressed={isFavorite}
          >
            {isFavorite ? '♥ Guardado' : '♡ Favorito'}
          </button>
        </div>
      </div>
    </article>
  )
}
