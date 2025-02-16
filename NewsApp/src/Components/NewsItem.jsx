
import PropTypes from 'prop-types';
import img from '../assets/NEWS.jpg';
const NewsItem = ({title,description,imageUrl,newsUrl} ) => {
  return (
 
    <div className="card bg-dark text-light mb-5 my-5 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={imageUrl?imageUrl:img} style={{height:"200px", width:"330px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News from around the world. Stay informed with the latest updates on technology, sports, and more."}</p>
    <a href={newsUrl} className="btn btn-primary">Read More</a>
  </div>
</div>

  )
}

NewsItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  newsUrl: PropTypes.string
};

export default NewsItem;
