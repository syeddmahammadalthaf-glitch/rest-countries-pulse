import React from 'react';

export default function SkeletonGrid({ count = 8 }) {
  return (
    <div className="countries-grid">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="country-card glass skeleton-card">
          <div className="skeleton-box skeleton-flag" />
          <div className="card-content">
            <div className="skeleton-box skeleton-title" />
            <div className="skeleton-box skeleton-subtitle" />
            <div className="skeleton-box skeleton-line" />
            <div className="skeleton-box skeleton-line" />
            <div className="skeleton-box skeleton-btn" />
          </div>
        </div>
      ))}
    </div>
  );
}
