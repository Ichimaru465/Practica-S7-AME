export function HeroBanner({ featuredCharacter }) {
  if (!featuredCharacter) return null

  return (
    <section className="hero" id="home">
      <div className="hero-layout">
        <div className="hero-media">
          <div className="hero-card">
            <img
              src={featuredCharacter.image}
              alt={featuredCharacter.name}
              width={640}
              height={800}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>

        <div className="hero-content">
          <span className="eyebrow">Personaje destacado</span>
          <p className="hero-role">{featuredCharacter.role}</p>
          <h2>{featuredCharacter.name}</h2>
          <p className="hero-description">{featuredCharacter.description}</p>

          <div className="hero-tags">
            <span>{featuredCharacter.element}</span>
            <span>{featuredCharacter.region}</span>
            <span className="rarity-tag">
              {'★'.repeat(featuredCharacter.rarity)}
            </span>
          </div>

          <button type="button" className="primary-btn">
            Ver archivo
          </button>
        </div>
      </div>
    </section>
  )
}
