import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {

    const [articles, setArticles] = useState([]);
    const APIKEY = "4074717afe1f49a2bb1ede488768ef76";
    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${APIKEY}`;
        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
    }, [category]);


  return (
    <div>
        <h2 className="text-center my-4">Latest <span className="badge bg-danger">News</span></h2>
        {articles.map((news,index)=>{
            return <NewsItem key = {index} title = {news.title} description = {news.description} imageUrl = {news.urlToImage} newsUrl = {news.url}/>
        })}
    </div>
  )
}
NewsBoard.propTypes = {
  category: PropTypes.string,
};

export default NewsBoard;