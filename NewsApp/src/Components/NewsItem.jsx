import PropTypes from 'prop-types';
import img from '../assets/NEWS.jpg';

const NewsItem = ({ title, description, imageUrl, newsUrl }) => {
    return (
        <div className="card bg-dark text-light mb-5 my-5 d-inline-block mx-3 px-2 py-2" style={{ maxWidth: "366px" }}>
            <img src={imageUrl ? imageUrl : img} style={{ height: "230px", width: "350px" }} className="card-img-top" alt="News" />
            <div className="card-body ">
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text">{description ? description.slice(0, 90) : "No description available."}</p>
                <a href={newsUrl} className="btn btn-danger" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
        </div>
    );
}

NewsItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    newsUrl: PropTypes.string
};

export default NewsItem;
