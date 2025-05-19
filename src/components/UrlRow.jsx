import { useCallback } from 'react';
import { copyToClipboard } from '@/utils/url';
import { API_BASE_URL } from '@/config'

const UrlRow = ({ url }) => {
  const CopyClipboard = useCallback(async () => {
    await copyToClipboard(`${API_BASE_URL}/${url.short_code}`);
  }, [url.short_code]);

  return (
    <tr className='text-center'>
      <td>{url.id}</td>
      <td style={{ maxWidth: '250px' }}>
        <span className="d-inline-block text-truncate" style={{ maxWidth: '100%' }} title={url.full_url}>
          {url.full_url}
        </span>
      </td>
      <td>
        <a href={`${API_BASE_URL}/${url.short_code}`} target="_blank" rel="noopener noreferrer">
          {url.short_code}
        </a>
        <button
          className="btn btn-sm btn-outline-secondary ms-2"
          onClick={CopyClipboard}
        >
          Copy
        </button>
      </td>
      <td>{url.click_count}</td>
    </tr>
  );
};

export default UrlRow;
