import React, { Component } from 'react';
import './webinar.css'
import { Link } from "react-router-dom";
import Automate_your_purchase from '../Blogs/Blog_images/Automate_your_purchase.jpg'
import DocumentMeta from 'react-document-meta';

const BlogContent = [
    {
      img: "media_04",
      tag: "Webinar",
      iii: Automate_your_purchase,
      title: `Automate your purchase process to save 5-10% more `,
      routePath: "/webinars/webinar_one",
      dealyAnimation: "50",
      altTag:"Automate your Purchase Process to save more"
    }
]

export default class Blog extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render() {
      const meta = {
        title: 'Webinars - Effybuy',
        description: "Effybuy's webinars Provided additional Information about Automate RFP Process.",
        meta: {
          charset: 'utf-8',
          // name: {
          //   keywords: 'react,meta,document,html,tags'
          // }
        }
      };
            
        return (
          <DocumentMeta {...meta}>
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
              alt={item.altTag}
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
        </DocumentMeta>

        )
    }
}
