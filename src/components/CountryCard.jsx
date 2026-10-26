import React from 'react';

export default function CountryCard({ country, onSelect }) {
  const commonName = country.name?.common || 'Unknown Nation';
  const capital = Array.isArray(country.capital) ? country.capital[0] : country.capital || 'N/A';
  const population = new Intl.NumberFormat('en-US').format(country.population || 0);
  const flagUrl = country.flags?.png || country.flags?.svg || '';

  return (
    <article className="country-card glass" onClick={() => onSelect(country)}>
      <div className="card-flag-wrapper">
        {flagUrl ? (
          <img
            src={flagUrl}
            alt={country.flags?.alt || `Flag of ${commonName}`}
            className="card-flag-img"
            loading="lazy"
          />
        ) : (
          <div className="flag-placeholder">🌐</div>
        )}
        <span className="card-code-pill">{country.cca3}</span>
      </div>

      <div className="card-content">
        <h3 className="card-title" title={commonName}>
          {commonName}
        </h3>
        <p className="card-official-name" title={country.name?.official}>
          {country.name?.official || commonName}
        </p>

        <div className="card-stats">
          <div className="card-stat-row">
            <span className="stat-key">Population:</span>
            <span className="stat-val font-mono">{population}</span>
          </div>
          <div className="card-stat-row">
            <span className="stat-key">Region:</span>
            <span className="stat-val region-badge">{country.region}</span>
          </div>
          <div className="card-stat-row">
            <span className="stat-key">Capital:</span>
            <span className="stat-val">{capital}</span>
          </div>
        </div>

        <button className="card-cta-btn" onClick={(e) => { e.stopPropagation(); onSelect(country); }}>
          <span>Inspect Analytics</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </article>
  );
}
