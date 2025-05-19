import { API_BASE_URL } from '@/config'

export async function createShortUrl(fullUrl) {
  const response = await fetch(`${API_BASE_URL}/short_urls`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ full_url: fullUrl }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors?.join(', ') || 'URL could not be shortened. Server returned an error.');
  }

  return data;
}
