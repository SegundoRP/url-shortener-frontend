import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { isValidUrl, copyToClipboard } from '@/utils/url';
import { createShortUrl } from '@/services/shortUrlService';
import UrlInputForm from '@components/UrlInputForm'
import ShortUrlResult from '@components/ShortUrlResult'
import { API_BASE_URL } from '@/config'

const UrlForm = () => {
  const [inputUrl, setInputUrl] = useState('');
  const [shortUrl, setShortUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setShortUrl(null);

    if (!inputUrl.trim()) {
      setError('Please enter a URL to shorten.');
      return;
    }

    if (!isValidUrl(inputUrl)) {
      setError('The URL you entered seems invalid. Please check the format (e.g., https://example.com).');
      return;
    }

    setLoading(true);
    try {
      const data = await createShortUrl(inputUrl);
      setShortUrl(`${API_BASE_URL}/${data.short_code}`);
      setInputUrl('');
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const CopyClipboard = useCallback(async () => {
    await copyToClipboard(shortUrl);
  }, [shortUrl]);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-end">
        <Link to="/" className="btn btn-primary">
          Go to Top URLs
        </Link>
      </div>

      <h2 className="my-5">Shorten a URL</h2>

      <UrlInputForm
        inputUrl={inputUrl}
        setInputUrl={setInputUrl}
        onSubmit={handleSubmit}
        loading={loading}
      />

      <div aria-live="polite">
        {error && <small className="d-block text-start text-danger">{error}</small>}
        {shortUrl && (
          <ShortUrlResult shortUrl={shortUrl} onCopy={CopyClipboard} />
        )}
      </div>
    </div>
  );
};

export default UrlForm;
