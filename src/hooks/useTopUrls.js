import { useState, useEffect } from 'react';

export function useTopUrls() {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await fetch(`/short_urls`);
        if (!response.ok) throw new Error('Error fetching top URLs');
        const data = await response.json();
        setUrls(data.urls);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUrls();
  }, []);

  return { urls, loading, error };
};
