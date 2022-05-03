import React, { Component } from 'react';
import './blog.css'
import { Link } from "react-router-dom";
import Common_challenge_img from './Blog_images/common_challenges.png'
import three_simple_tips from './Blog_images/three_simple_tips.jpg'
import number_one_tool from './Blog_images/number_one_tool.jpg'
// import anup_agarwal from './../../icons/About us/anup_agarwal.jpg'
// import meghna_khatee from './../../icons/About us/meghna_khatee.webp'
import meghna_khatee from './Blog_images/meghna_khatee.webp'
// import unknown from './../../icons/About us/unknown.png'
import unknown from './Blog_images/unknown.png'
// import automate_your_purchase from '../../icons/Webinar/webinar_automate_your.jpg'
import Automate_your_purchase from './Blog_images/Automate_your_purchase.jpg'
import five_tips from './Blog_images/five_tips.jpg'

const BlogContent = [
    {
      img: "media_01",
      iii:three_simple_tips,
      tag: "Blog",
      title: `3 simple tips to unleash your buying power`,
      routePath: "/EffyBuy/resources/blog/blog_one",
      dealyAnimation: "10",
    },
    {
      img: "media_02",
      tag: "Blog",
      iii: Common_challenge_img,
      title: `Common Challenges & Their Solution`,
      routePath: "/EffyBuy/resources/blog/blog_five",
      dealyAnimation: "50",
    },
    {
      img: "media_03",
      tag: "Blog",
      iii: number_one_tool,
      title: `Do You know the No. #1 tool available to increase your profits?`,
      routePath: "/EffyBuy/resources/blog/blog_six",
      dealyAnimation: "100",
    },
    // {
    //   img: "media_04",
    //   tag: "Blog",
    //   iii: Automate_your_purchase,
    //   title: `Automate your purchase process to save 5-10% more `,
    //   routePath: "/EffyBuy/resources/blog/blog_eight",
    //   dealyAnimation: "50",
    // },
    {
      img: "media_05",
      tag: "Blog",
      iii: five_tips,
      title: `Top 5 tips – Increase profits with EffyBuy Tool`,
      routePath: "/EffyBuy/resources/blog/blog_nine",
      dealyAnimation: "100",
    },
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
          {/* /.post-meta */}
        </div>
      ))}
          </div>
          {/* End .row */}
          {/* <div
            className="text-center mt-30 md-mt-10"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="50"
          >
            <a href="#" className="theme-btn-one">
              Show More
            </a>
          </div> */}
        </div>
      </div>
            
            </>

        )
    }
}
