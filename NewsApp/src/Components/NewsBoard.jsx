import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const APIKEY = "4074717afe1f49a2bb1ede488768ef76";

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${APIKEY}`;
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
      {articles.map((article, index) => (
        <NewsItem
          key={index}
          title={article.title}
          description={article.description}
          imageUrl={article.urlToImage}
          newsUrl={article.url}
        />
      ))}
    </div>
    </div>
  );
};

export default NewsBoard;

NewsBoard.propTypes = {
  category: PropTypes.string.isRequired,
};