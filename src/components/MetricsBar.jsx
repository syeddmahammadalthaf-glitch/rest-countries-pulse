import React from 'react';

export default function MetricsBar({ totalCountries, filteredCount, activeRegion, totalPopulation }) {
  const formattedPop = new Intl.NumberFormat('en-US').format(totalPopulation);

  return (
    <section className="metrics-grid">
      <div className="metric-card glass">
        <div className="metric-icon metric-icon-cyan">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
            <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
          </svg>
        </div>
        <div className="metric-info">
          <span className="metric-label">Total Countries In API</span>
          <span className="metric-value">{totalCountries}</span>
        </div>
      </div>

      <div className="metric-card glass">
        <div className="metric-icon metric-icon-blue">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
        </div>
        <div className="metric-info">
          <span className="metric-label">Matching Query Filter</span>
          <span className="metric-value">{filteredCount}</span>
        </div>
      </div>

      <div className="metric-card glass">
        <div className="metric-icon metric-icon-purple">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
          </svg>
        </div>
        <div className="metric-info">
          <span className="metric-label">Filtered Population</span>
          <span className="metric-value metric-value-sm">{formattedPop}</span>
        </div>
      </div>

      <div className="metric-card glass">
        <div className="metric-icon metric-icon-emerald">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>
        <div className="metric-info">
          <span className="metric-label">Active Region</span>
          <span className="metric-value">{activeRegion}</span>
        </div>
      </div>
    </section>
  );
}
