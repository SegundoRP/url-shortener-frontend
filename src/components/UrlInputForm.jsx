const UrlInputForm = ({ inputUrl, setInputUrl, onSubmit, loading }) => (
  <form onSubmit={onSubmit}>
    <div className="mb-3">
      <label htmlFor="urlInput" className="form-label d-block text-start">Enter a URL</label>
      <div className="mt-3 text-start d-flex gap-2">
        <input
          id="urlInput"
          type="text"
          className="form-control"
          placeholder="https://example.com"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
        />

        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? 'Shortening...' : 'Shorten'}
        </button>
      </div>
    </div>
  </form>
);

export default UrlInputForm;
