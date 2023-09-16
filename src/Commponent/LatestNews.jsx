import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import News1 from "./../assets/img/Sensex.jpg";
import "./../css/elements-css/news.css";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setNews, storeNews } from "../state/action";
import { BASE_API_URL } from "../helpers/apiHelper";

const LatestNews = () => {

  const shortMonthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const mainFilePath = BASE_API_URL+"/api/news-images/"

  const arrayOfNews = useSelector((state) => state.newsList);
  const dispatch = useDispatch();

  const fetchNews = () => {
    axios
      .get(`http://localhost:3200/api/news-master`)
      .then((res) => {
        dispatch(storeNews(res.data.data));
        console.log(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("news master done");
      });
  };

  function handleClick(item){
    dispatch(setNews(item));
}


  useEffect(() => {
    fetchNews();
  }, []);




  return (
    <div>
      {/* news-section */}
      <section className="news-section sec-pad">
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title">Latest News</span>
            <h2>
              Get More Update For <br />
              Tread
              
            </h2>
          </div>
          <div className="row clearfix">
           
                
                {arrayOfNews && arrayOfNews.length > 0 ? (
              arrayOfNews.map((item) => (
                <React.Fragment>
 <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div
                className="news-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >

                <div className="inner-box">

                  <div className="image-box">
                    <figure className="image">
                      <Link to="/news">
                        <img src={mainFilePath+item.imagePath} alt="img" onClick={()=>{handleClick(item)}} />
                      </Link>
                    </figure>
                    <h2>
                      {item.date.split("T")[0].split("-")[2]}<span>{shortMonthNames[parseInt(item.date.split("T")[0].split("-")[2], 10)]}</span>
                    </h2>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <Link to="/news" onClick={()=>{handleClick(item)}}>
                        {item.newsTitle}
                      </Link>
                    </h3>
                    <p>
                     {item.description}
                    </p>
                    <ul className="post-info">
                      <li>
                        <i className="icon-21" />
                        <Link to="/news" onClick={()=>{handleClick(item)}}>{item.date.split("T")[0]}</Link>
                      </li>
                    </ul>
                  </div>
                  </div>

                  
              </div>
            </div>
                </React.Fragment>
                  
                ))) : (
                  <div>loading plese wait ...</div>
                )}

           
          </div>
        </div>
        <div className="more-btn ">
          <Link to="/news" className="theme-btn-one">
            See More
          </Link>
        </div>
      </section>
      {/* news-section end */}
    </div>
  );
};

export default LatestNews;
