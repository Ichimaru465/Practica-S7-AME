import { categories } from '../data/characters'

export function SearchPanel({
  search,
  setSearch,
  selectedElement,
  setSelectedElement,
  searchInputRef,
  onClear,
}) {
  return (
    <section className="search-panel" id="search">
      <div>
        <span className="section-label">Explorador</span>
        <h3>Busca y filtra personajes</h3>
      </div>

      <div className="search-box">
        <span className="search-icon" aria-hidden="true">
          🔍
        </span>
        <input
          ref={searchInputRef}
          type="search"
          placeholder="Nombre, rol o región..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Buscar personajes"
        />
        <button type="button" onClick={onClear}>
          Limpiar
        </button>
      </div>

      <div className="filter-scroll">
        <div className="filter-list" role="group" aria-label="Filtrar por elemento">
          {categories.map((element) => (
            <button
              key={element}
              type="button"
              className={selectedElement === element ? 'filter active' : 'filter'}
              onClick={() => setSelectedElement(element)}
              aria-pressed={selectedElement === element}
            >
              {element}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
