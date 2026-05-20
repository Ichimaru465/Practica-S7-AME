import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

export function Navbar({ favoritesCount }) {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="brand">
          <div className="brand-icon" aria-hidden="true">
            ✦
          </div>
          <div>
            <h1>Astral Archive</h1>
            <span>React Hooks SPA</span>
          </div>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      <div className={`navbar-menu ${menuOpen ? 'is-open' : ''}`}>
        <nav className="nav-links" onClick={closeMenu}>
          <a href="#home">Inicio</a>
          <a href="#search">Buscar</a>
          <a href="#favorites">Favoritos</a>
        </nav>

        <div className="nav-actions">
          <button type="button" className="ghost-btn" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Oscuro' : '☀️ Claro'}
          </button>

          <button type="button" className="login-btn">
            ♥ Favoritos ({favoritesCount})
          </button>
        </div>
      </div>
    </header>
  )
}
