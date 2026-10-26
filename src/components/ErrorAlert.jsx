import React from 'react';

export default function ErrorAlert({ message, onRetry, isFallbackActive }) {
  return (
    <div className="error-alert glass" role="alert">
      <div className="error-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>

      <div className="error-content">
        <h4 className="error-title">REST API Connectivity Notice</h4>
        <p className="error-desc">
          {message || 'Unable to establish direct real-time socket with external REST API.'}
          {isFallbackActive && (
            <span> We have seamlessly mounted verified offline backup data so you can continue testing without interruption.</span>
          )}
        </p>
      </div>

      <button onClick={onRetry} className="btn-retry">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 11-.57-8.38l5.67-5.67" />
        </svg>
        <span>Retry Connection</span>
      </button>
    </div>
  );
}
