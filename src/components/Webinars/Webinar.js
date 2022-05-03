import React, { Component } from 'react';
import './webinar.css'
import { Link } from "react-router-dom";
import Automate_your_purchase from '../Blogs/Blog_images/Automate_your_purchase.jpg'

const BlogContent = [
    {
      img: "media_04",
      tag: "Webinar",
      iii: Automate_your_purchase,
      title: `Automate your purchase process to save 5-10% more `,
      routePath: "/EffyBuy/resources/webinar/webinar_one",
      dealyAnimation: "50",
    }
]

export default class Blog extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render() {
        return (
            
            <>
            <div className="feature-blog-one blog-page-bg">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="container">
          <div className="row">
          {BlogContent.map((item, i) => (
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          key={i}
          data-aos-delay={item.dealyAnimation}
        >
          <div className="post-meta">
            <img
              src={`${item.iii}`}
              alt="media"
              className="image-meta"
            />
            <div className="tag">{item.tag}</div>
            <h3>
              <Link to={`${item.routePath}`} className="title">
                {item.title}
              </Link>
            </h3>
            <Link
              to={item.routePath}
              className="read-more d-flex justify-content-between align-items-center"
            >
              <span>Read More</span>
              <i className="flaticon-right-arrow"></i>
            </Link>
          </div>
        </div>
      ))}
          </div>
        </div>
      </div>
            
            </>

        )
    }
}
