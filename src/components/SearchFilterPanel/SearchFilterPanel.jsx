const SearchFilterPanel =({ headers = [], onFilterChange }) => {
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedColumns, setSelectedColumns] = useState(headers.map(h => h.key));

  const handleSearchDebounced = useMemo(
    () =>
      debounce((value) => {
        setDebouncedSearch(value);
        onFilterChange(value, selectedColumns);
      }, 300),
    [selectedColumns, onFilterChange]
  );

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    handleSearchDebounced(e.target.value);
  };

  const handleColumnToggle = (key) => {
    const updatedColumns = selectedColumns.includes(key)
      ? selectedColumns.filter((k) => k !== key)
      : [...selectedColumns, key];

    setSelectedColumns(updatedColumns);
    onFilterChange(debouncedSearch, updatedColumns);
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search..."
        value={searchInput}
        onChange={handleSearchChange}
        style={{ maxWidth: '300px' }}
      />

      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="columnFilterDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter Columns
        </button>
        <ul className="dropdown-menu p-2" aria-labelledby="columnFilterDropdown">
          {headers.map((header) => (
            <li key={header.key}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`col-${header.key}`}
                  checked={selectedColumns.includes(header.key)}
                  onChange={() => handleColumnToggle(header.key)}
                />
                <label className="form-check-label" htmlFor={`col-${header.key}`}>
                  {header.label}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchFilterPanel;