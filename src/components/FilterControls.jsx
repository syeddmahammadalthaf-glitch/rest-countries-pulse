import React from 'react';

const REGIONS = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Antarctic'];

export default function FilterControls({
  regionFilter,
  setRegionFilter,
  sortBy,
  setSortBy,
  itemCount
}) {
  return (
    <div className="filter-controls-bar glass">
      <div className="region-pills" role="tablist">
        {REGIONS.map((region) => (
          <button
            key={region}
            role="tab"
            aria-selected={regionFilter === region}
            className={`region-pill ${regionFilter === region ? 'active' : ''}`}
            onClick={() => setRegionFilter(region)}
          >
            {region}
          </button>
        ))}
      </div>

      <div className="sort-group">
        <label htmlFor="sort-select" className="sort-label">
          Sort Metrics:
        </label>
        <select
          id="sort-select"
          className="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="pop-desc">Population (Highest First)</option>
          <option value="pop-asc">Population (Lowest First)</option>
          <option value="name-asc">Country Name (A to Z)</option>
          <option value="name-desc">Country Name (Z to A)</option>
        </select>

        <span className="count-tag">
          {itemCount} {itemCount === 1 ? 'nation' : 'nations'}
        </span>
      </div>
    </div>
  );
}
