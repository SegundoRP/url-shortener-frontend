// app/javascript/components/ShortUrlResult.jsx
import { BiLinkExternal, BiCopy } from 'react-icons/bi';

const ShortUrlResult = ({ shortUrl, onCopy }) => (
  <div className="alert alert-success d-flex align-items-center justify-content-between">
    <div>
      Shortened URL: <strong>{shortUrl}</strong>
    </div>
    <div>
      <a
        href={shortUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-primary btn-sm me-2"
        title="Open URL"
      >
        <BiLinkExternal />
      </a>
      <button
        aria-label="Copy shortened URL"
        role="button"
        className="btn btn-outline-secondary btn-sm"
        onClick={onCopy}
        title="Copy to clipboard"
      >
        <BiCopy />
      </button>
    </div>
  </div>
);

export default ShortUrlResult;
