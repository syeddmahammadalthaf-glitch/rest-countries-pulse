import React from 'react';

export default function EmptyState({ searchTerm, regionFilter, onReset }) {
  return (
    <div className="empty-state glass">
      <div className="empty-icon">🌍</div>
      <h3 className="empty-title">No countries match your parameters</h3>
      <p className="empty-subtitle">
        No sovereign nations matched &ldquo;<strong>{searchTerm || regionFilter}</strong>&rdquo;. Try searching for another capital, official country code, or clear active region filters.
      </p>
      <button onClick={onReset} className="btn-primary">
        Reset Search & Filters
      </button>
    </div>
  );
}
