import "./Main.css";
import NewsCard from "../NewsCard/NewsCard";
import mockNews from "../../utils/mockNews";

function Main() {
  return (
    <section className="main">
      <h2>Search Results</h2>
      {mockNews.map((article, index) => (
        <NewsCard
          key={index}
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage}
          publishedAt={article.publishedAt}
          source={article.source}
        />
      ))}
    </section>
  );
}

export default Main;
