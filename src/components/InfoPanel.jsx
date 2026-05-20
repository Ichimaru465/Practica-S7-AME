export function InfoPanel({ totalCharacters, favoritesCount, selectedElement }) {
  return (
    <aside className="info-panel">
      <div className="info-card">
        <div className="info-icon" aria-hidden="true">
          ✦
        </div>
        <div>
          <h4>Personajes</h4>
          <p>{totalCharacters} en el archivo</p>
        </div>
      </div>

      <div className="info-card">
        <div className="info-icon" aria-hidden="true">
          ◈
        </div>
        <div>
          <h4>Filtro activo</h4>
          <p>Elemento: {selectedElement}</p>
        </div>
      </div>

      <div className="info-card" id="favorites">
        <div className="info-icon" aria-hidden="true">
          ♥
        </div>
        <div>
          <h4>Favoritos</h4>
          <p>{favoritesCount} guardados</p>
        </div>
      </div>
    </aside>
  )
}
