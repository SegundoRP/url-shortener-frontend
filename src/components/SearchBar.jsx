const SearchBar = ({ query, onChange }) => (
  <div className="form-group mt-3">
    <input
      type="text"
      placeholder="Search by full URL or short code..."
      className="form-control mb-3"
      value={query}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default SearchBar;
