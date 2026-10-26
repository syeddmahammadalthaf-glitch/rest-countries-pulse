import { useState, useEffect, useCallback } from 'react';
import { fetchAllCountries } from '../services/countriesApi';
import { FALLBACK_COUNTRIES } from '../data/fallbackCountries';

export function useFetchCountries() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFallback, setIsFallback] = useState(false);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchAllCountries();
      setData(result);
      setIsFallback(false);
    } catch (err) {
      console.warn('Live API fetch encountered an issue, initializing verified fallback cache:', err);
      // Fallback to verified local cache so application remains fully operational
      setData(FALLBACK_COUNTRIES);
      setIsFallback(true);
      setError(err.message || 'Failed to fetch live REST API data.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    countries: data,
    loading,
    error,
    isFallback,
    retry: loadData
  };
}
