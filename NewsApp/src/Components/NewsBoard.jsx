import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NewsItem from "./NewsItem";

const API_KEY = "7b88991b1570a9615380bdc87011d329";  // Buraya öz API açarını qoy

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let url = `https://gnews.io/api/v4/top-headlines?token=${API_KEY}&lang=en&category=${category}`;
        let response = await fetch(url);
        let data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching the news articles:", error);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div>
      <h1 className="text-center my-4"><span className='badge bg-danger text-light'>News</span></h1>
      <div className="news-board">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsItem
              key={index}
              title={article.title}
              description={article.description}
              imageUrl={article.image}
              newsUrl={article.url}
            />
          ))
        ) : (
          <p className="text-center">No news available.</p>
        )}
      </div>
    </div>
  );
};

NewsBoard.propTypes = {
  category: PropTypes.string.isRequired,
};

export default NewsBoard;
