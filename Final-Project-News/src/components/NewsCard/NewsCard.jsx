import "./NewsCard.css";

function NewsCard({
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  source,
}) {
  return (
    <a
      className="news-card"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="news-card__image" src={urlToImage} alt={title} />
      <div className="news-card__content">
        <p className="news-card__date">
          {new Date(publishedAt).toLocaleDateString()}
        </p>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__description">{description}</p>
        <p className="news-card__source">{source.name}</p>
      </div>
    </a>
  );
}

export default NewsCard;
