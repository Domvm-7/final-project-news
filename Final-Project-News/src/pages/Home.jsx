import SearchForm from "../components/SearchForm/SearchForm";
import Main from "../components/Main/Main";
import About from "../components/About/About";

function Home({ onSearch, articles }) {
  return (
    <>
      <SearchForm onSearch={onSearch} />
      <Main articles={articles} />
      <About />
    </>
  );
}

export default Home;
