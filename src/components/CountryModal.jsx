import React, { useEffect } from 'react';

export default function CountryModal({ country, onClose, onSelectBorder }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!country) return null;

  const commonName = country.name?.common || 'Country';
  const officialName = country.name?.official || commonName;
  const capital = Array.isArray(country.capital) ? country.capital.join(', ') : country.capital || 'N/A';
  const population = new Intl.NumberFormat('en-US').format(country.population || 0);

  // Extract currencies
  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((c) => `${c.name} (${c.symbol || 'N/A'})`)
        .join(', ')
    : 'N/A';

  // Extract languages
  const languages = country.languages
    ? Object.values(country.languages).join(', ')
    : 'N/A';

  const mapUrl = country.maps?.googleMaps || country.maps?.openStreetMaps || '';

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="country-modal-title">
      <div className="modal-content country-modal-box glass" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <h2 id="country-modal-title" className="modal-title">
              {commonName}
            </h2>
            <span className="modal-cca3">{country.cca3}</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close details">
            ✕
          </button>
        </div>

        <div className="country-modal-body">
          <div className="modal-flag-hero">
            <img
              src={country.flags?.svg || country.flags?.png}
              alt={country.flags?.alt || `Flag of ${commonName}`}
              className="modal-flag-img"
            />
          </div>

          <div className="country-details-grid">
            <div className="detail-item">
              <span className="detail-label">Official Title:</span>
              <span className="detail-value">{officialName}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Capital City:</span>
              <span className="detail-value">{capital}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Population:</span>
              <span className="detail-value font-mono">{population}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Region / Subregion:</span>
              <span className="detail-value">
                {country.region} {country.subregion ? `(${country.subregion})` : ''}
              </span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Official Currencies:</span>
              <span className="detail-value">{currencies}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">Spoken Languages:</span>
              <span className="detail-value">{languages}</span>
            </div>
          </div>

          {Array.isArray(country.borders) && country.borders.length > 0 && (
            <div className="borders-section">
              <h4 className="borders-title">Land Border Codes:</h4>
              <div className="border-tags">
                {country.borders.map((borderCode) => (
                  <button
                    key={borderCode}
                    className="border-code-tag"
                    onClick={() => onSelectBorder?.(borderCode)}
                    title={`View border country ${borderCode}`}
                  >
                    {borderCode}
                  </button>
                ))}
              </div>
            </div>
          )}

          {mapUrl && (
            <div className="modal-actions-bar">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                  <line x1="8" y1="2" x2="8" y2="18" />
                  <line x1="16" y1="6" x2="16" y2="22" />
                </svg>
                <span>Explore on Google Maps</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
