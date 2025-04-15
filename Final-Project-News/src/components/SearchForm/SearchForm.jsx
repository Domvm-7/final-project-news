import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search-form">
      <input type="text" placeholder="Search for news..." />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
