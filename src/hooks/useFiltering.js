import { useMemo } from 'react';

export function useFiltering(data, query) {
  const filteredData = useMemo(() => {
    if (!query) return data;

    const lowerQuery = query.toLowerCase();
    return data.filter((item) =>
      item.full_url.toLowerCase().includes(lowerQuery) ||
      item.short_code.toLowerCase().includes(lowerQuery)
    );
  }, [data, query]);

  return filteredData;
}
