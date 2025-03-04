import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NewsItem from "./NewsItem";

const API_KEY = "4074717afe1f49a2bb1ede488768ef76";  

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&category=${category}&language=en`;

        let response = await fetch(url);
        let data = await response.json();

        if (data.articles) {
          setArticles(data.articles);
        } else {
          setArticles([]); // Əgər `articles` boş gəlirsə, boş array yaz
        }
      } catch (error) {
        console.error("Error fetching the news articles:", error);
        setArticles([]); // Xəta olduqda boş array yaz ki, səhv verməsin
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div>
      <h1 className="text-center my-4 news">
        <span className='badge bg-danger text-light'>News</span>
      </h1>
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
