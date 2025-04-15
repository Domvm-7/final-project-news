import "./Main.css";
import NewsCard from "../NewsCard/NewsCard";

function Main({ articles }) {
  return (
    <section className="main">
      <h2>Search Results</h2>
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <NewsCard
            key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
            publishedAt={article.publishedAt}
            source={article.source}
          />
        ))
      ) : (
        <p>No articles to display. Try a search!</p>
      )}
    </section>
  );
}

export default Main;
