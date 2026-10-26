import React from 'react';

export default function Navbar({
  searchTerm,
  setSearchTerm,
  theme,
  toggleTheme,
  isLive,
  loading
}) {
  return (
    <header className="navbar glass">
      <div className="navbar-container">
        <div className="brand">
          <div className="brand-logo">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-title">CountriesPulse</span>
            <span className="brand-tag">REST API v3.1</span>
          </div>
        </div>

        <div className="navbar-search">
          <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search country by name, capital, or code..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            aria-label="Search countries"
          />
          {searchTerm && (
            <button className="clear-search-btn" onClick={() => setSearchTerm('')} title="Clear search">
              ✕
            </button>
          )}
        </div>

        <div className="navbar-actions">
          <div className="api-status-badge" title={isLive ? 'Connected to live REST API' : 'Using cached verified data'}>
            <span className={`status-dot ${loading ? 'loading' : isLive ? 'online' : 'fallback'}`} />
            <span className="status-text">
              {loading ? 'Fetching...' : isLive ? 'API Online' : 'Cached Cache'}
            </span>
          </div>

          <button onClick={toggleTheme} className="btn-icon" title="Toggle Theme" aria-label="Toggle Light/Dark Theme">
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
