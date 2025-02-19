
const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left mt-3 pb-3">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold bg-danger badge fs-4">News.dev</h6>
            <p className='fs-5'>
              Stay updated with the latest news from around the world. Your one-stop destination for all news categories.
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase px-3 py-3 mb-4 font-weight-bold bg-danger badge">Categories</h6>
            <p>
              <a href="#" className="text-white text-decoration-none">Technology</a>
            </p>
            <p>
              <a href="#" className="text-white text-decoration-none">Business</a>
            </p>
            <p>
              <a href="#" className="text-white text-decoration-none">Health</a>
            </p>
            <p>
              <a href="#" className="text-white text-decoration-none">Sports</a>
            </p>
            <p>
              <a href="#" className="text-white text-decoration-none">Entertainment</a>
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase px-4 py-3 mb-4 font-weight-bold bg-danger badge">Contact</h6>
            <p>
              <i className="fas fa-home mr-3">Adress:</i> New York, 1001 St, US
            </p>
            <p>
              <i className="fas fa-envelope mr-3">Email:</i> news.dev@gmail.com
            </p>
            <p>
              <i className="fas fa-phone mr-3">Phone Number:</i> +1 999 900 888
            </p>
          </div>
        </div>
        <hr />
        <div className="row d-flex align-items-center">
          <div className="col-lg-12">
            <p className="text-center text-md-left">© 2025 Copyright:
              <a href="#" className="text-white text-decoration-none ">
                <strong> News.dev</strong>
              </a>
            </p>
          </div>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;