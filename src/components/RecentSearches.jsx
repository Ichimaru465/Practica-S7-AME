export function RecentSearches({ searches, onSelectSearch }) {
  return (
    <aside className="recent-card">
      <div className="panel-header">
        <h3>Búsquedas recientes</h3>
        <span aria-hidden="true">⌕</span>
      </div>

      {searches.length === 0 ? (
        <p className="muted">Aún no hay búsquedas recientes.</p>
      ) : (
        <div className="recent-list">
          {searches.map((item, index) => (
            <button
              key={`${item}-${index}`}
              type="button"
              onClick={() => onSelectSearch(item)}
            >
              🔍 {item}
            </button>
          ))}
        </div>
      )}
    </aside>
  )
}
