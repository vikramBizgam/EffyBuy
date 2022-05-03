import React, { Component } from 'react';
// import './webinar.css'
import { Link } from "react-router-dom";
import Automate_your_purchase from '../Blogs/Blog_images/Automate_your_purchase.jpg'
import { Popup } from 'react-magnific-popup';
import ModalVideo from 'react-modal-video'
import video_01 from './images/A_powerful_purchase_automation_tool_for_Sourcing.png'
import video_02 from './images/Bridging_the_Gap.png'
import video_03 from './images/create_an_auction.png'
import video_04 from './images/Grow_your_business.png'




const BlogContent = [
    {
      img: "media_04",
      tag: "Video",
      iii: video_04,
      title: `Grow your business with Smartest tools`,
      dealyAnimation: "50",
      videoId:"4dXFzPdbOh4",
    }
]



export default class Blog extends Component {
    constructor () {
        super()
        this.state = {
            color:"#101621",
          modalVideos:[
              {
                isOpen:false,
                videoId:'4dXFzPdbOh4',
                iii: video_04,
                title: `Grow your business with Smartest tools`,
                img: "media_04",
                tag: "Video",
                dealyAnimation: "10",
                color:"#101621",
              },
              {
                isOpen:false,
                videoId:'vAa6bPE6umI',
                iii: video_03,
                title: `Create an Auction`,
                img: "media_04",
                tag: "Video",
                dealyAnimation: "100",
                color:"#101621",
              },
              {
                isOpen:false,
                videoId:'5-h6tBqDH9s',
                iii: video_01,
                title: `An automation tool for Sourcing, RFQ & Negotiation`,
                img: "media_04",
                tag: "Video",
                dealyAnimation: "200",
                color:"#101621",
              },
              {
                isOpen:false,
                videoId:'D7gN398eEp4',
                iii: video_02,
                title: `Bridging the Gap between Purchase and logistics process`,
                img: "media_04",
                tag: "Video",
                dealyAnimation: "300",
                color:"#101621",
              },
          ]
        }
        this.openModal = this.openModal.bind(this)
      }

    componentDidMount(){
        window.scrollTo(0, 0)
    }

    openModal (index) {
        const { modalVideos } = this.state;
        modalVideos[index].isOpen = true;

        this.setState({
            modalVideos,
        }); 
      }

    ChangeColorEnter (index) {
        const { modalVideos } = this.state;
        modalVideos[index].color = 'red';

        this.setState({
            modalVideos,
        }); 
      }
    ChangeColorLeave (index) {
        const { modalVideos } = this.state;
        modalVideos[index].color = "#101621";

        this.setState({
            modalVideos,
        }); 
      }

      closeModal (index) {
        const { modalVideos } = this.state;
        modalVideos[index].isOpen = false;

        this.setState({
            modalVideos,
        }); 
      }

    
    render() {
        return (
            
            <>
            <div className="feature-blog-one blog-page-bg">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="container">
        {this.state.modalVideos.map((item, index) => (
            <ModalVideo channel='youtube' isOpen={item.isOpen} videoId={item.videoId} onClose={() => this.closeModal(index)} />
            ))}

          <div className="row">
          {this.state.modalVideos.map((item, index) => (
              
            <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            key={index}
            data-aos-delay={item.dealyAnimation}
            onClick={()=>this.openModal(index)}
            
            >
          <div className="post-meta" style={{"paddingBottom":"20px","cursor":"pointer"}}
            onMouseEnter={()=>{this.ChangeColorEnter(index)}}
            onMouseLeave={()=>{this.ChangeColorLeave(index)}}
          >
            <img
              src={`${item.iii}`}
              alt="media"
              className="image-meta"
            />
            <div className="tag">{item.tag}</div>
            <h5 style={{"color":`${item.color}`}}>
              {/* <Link to={`${item.routePath}`} className="title"> */}
                {item.title}
              {/* </Link> */}
            </h5>
            
          </div>
        </div> 
        // </Popup>
        
      ))}
        
          </div>
        </div>


        


      </div>
            
            </>

        )
    }
}
