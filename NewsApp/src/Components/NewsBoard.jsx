import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const APIKEY = "4074717afe1f49a2bb1ede488768ef76";

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${APIKEY}`;
        let response = await fetch(url);
        let data = await response.json();

        if (data.status !== "ok") {
          throw new Error(data.message || "Failed to fetch news"); 
        }

        setArticles(data.articles);
        setError(null); 
      } catch (error) {
        console.error("Error fetching the news articles:", error);
        setError(error.message); 
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div>
      <h1 className="text-center my-4">
        <span className='badge bg-danger text-light'>News</span>
      </h1>

      {error ? (
        <div className="text-center text-danger fs-4">
          ❌ {error} (Try again later)
        </div>
      ) : (
        <div className="news-board">
          {articles.length > 0 ? (
            articles.map((article, index) => (
              <NewsItem
                key={index}
                title={article.title}
                description={article.description}
                imageUrl={article.urlToImage}
                newsUrl={article.url}
              />
            ))
          ) : (
            <p className="text-center fs-5 text-white">No news available...</p>
          )}
        </div>
      )}
    </div>
  );
};

NewsBoard.propTypes = {
  category: PropTypes.string.isRequired,
};

export default NewsBoard;
