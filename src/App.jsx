import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import MetricsBar from './components/MetricsBar';
import FilterControls from './components/FilterControls';
import CountryCard from './components/CountryCard';
import CountryModal from './components/CountryModal';
import SkeletonGrid from './components/SkeletonGrid';
import ErrorAlert from './components/ErrorAlert';
import EmptyState from './components/EmptyState';
import { useFetchCountries } from './hooks/useFetchCountries';
import './App.css';

const THEME_KEY = 'countriespulse_theme_v1';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || 'dark');
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('All');
  const [sortBy, setSortBy] = useState('pop-desc');
  const [selectedCountry, setSelectedCountry] = useState(null);

  const { countries, loading, error, isFallback, retry } = useFetchCountries();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Filter pipeline
  const filteredCountries = useMemo(() => {
    return countries.filter((c) => {
      // Search match
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const commonMatch = (c.name?.common || '').toLowerCase().includes(query);
        const officialMatch = (c.name?.official || '').toLowerCase().includes(query);
        const cca3Match = (c.cca3 || '').toLowerCase().includes(query);
        const capitalMatch = Array.isArray(c.capital)
          ? c.capital.some((cap) => cap.toLowerCase().includes(query))
          : false;

        if (!commonMatch && !officialMatch && !cca3Match && !capitalMatch) {
          return false;
        }
      }

      // Region filter
      if (regionFilter !== 'All' && c.region !== regionFilter) {
        return false;
      }

      return true;
    });
  }, [countries, searchTerm, regionFilter]);

  // Sorting pipeline
  const sortedCountries = useMemo(() => {
    const list = [...filteredCountries];
    return list.sort((a, b) => {
      if (sortBy === 'pop-desc') return (b.population || 0) - (a.population || 0);
      if (sortBy === 'pop-asc') return (a.population || 0) - (b.population || 0);
      if (sortBy === 'name-asc') return (a.name?.common || '').localeCompare(b.name?.common || '');
      if (sortBy === 'name-desc') return (b.name?.common || '').localeCompare(a.name?.common || '');
      return 0;
    });
  }, [filteredCountries, sortBy]);

  // Aggregate metrics
  const totalPopulation = useMemo(() => {
    return filteredCountries.reduce((sum, c) => sum + (c.population || 0), 0);
  }, [filteredCountries]);

  const handleSelectBorder = (cca3) => {
    const target = countries.find((c) => c.cca3 === cca3);
    if (target) {
      setSelectedCountry(target);
    }
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setRegionFilter('All');
    setSortBy('pop-desc');
  };

  return (
    <div className="app-layout">
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        theme={theme}
        toggleTheme={toggleTheme}
        isLive={!isFallback && !error}
        loading={loading}
      />

      <main className="content-container">
        <header className="hero-header">
          <div className="hero-text">
            <h1 className="hero-title">Global Demographic & Economic Pulse</h1>
            <p className="hero-subtitle">
              Interactive REST API dashboard streaming real-time geopolitical metrics across 250+ sovereign territories.
            </p>
          </div>
        </header>

        {error && (
          <ErrorAlert
            message={error}
            onRetry={retry}
            isFallbackActive={isFallback}
          />
        )}

        <MetricsBar
          totalCountries={countries.length}
          filteredCount={sortedCountries.length}
          activeRegion={regionFilter}
          totalPopulation={totalPopulation}
        />

        <FilterControls
          regionFilter={regionFilter}
          setRegionFilter={setRegionFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          itemCount={sortedCountries.length}
        />

        {loading ? (
          <SkeletonGrid count={8} />
        ) : sortedCountries.length === 0 ? (
          <EmptyState
            searchTerm={searchTerm}
            regionFilter={regionFilter}
            onReset={handleResetFilters}
          />
        ) : (
          <div className="countries-grid">
            {sortedCountries.map((c) => (
              <CountryCard
                key={c.cca3 || c.name?.common}
                country={c}
                onSelect={(country) => setSelectedCountry(country)}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="footer glass">
        <div className="footer-content">
          <p>
            Architected with React.js & REST API Integration • Built by{' '}
            <strong>Mahammad Althaf</strong> (<code>syeddmahammadalthaf-glitch</code>)
          </p>
          <a
            href="https://github.com/syeddmahammadalthaf-glitch/rest-countries-pulse"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Inspect Source Code on GitHub →
          </a>
        </div>
      </footer>

      {selectedCountry && (
        <CountryModal
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
          onSelectBorder={handleSelectBorder}
        />
      )}
    </div>
  );
}
