import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for news..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
