import React from "react";
import { Link } from "react-router-dom";
import FormFooterSignup from "../Forms/FormFooterSignup";
import effybuy_logo_with_name from '../../assets/images/icon/New_effybuy_logo_with_name.webp'
import Chatbot from "./Chatbot";
const socialContent = [
  {
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/company/effybuy",
  },
  {
    icon: "fa-twitter",
    link: "https://twitter.com/Effybuy1",
  },
  {
    icon: "fa-youtube",
    link: "https://www.youtube.com/channel/UCRgvZs5Vc5Ij378mOSgF8Bw",
  },
  {
    icon: "fa-facebook",
    link: "https://www.facebook.com/bizgamai",
  },
  {
    icon: "fa-instagram",
    link: "https://www.instagram.com/effybuysocial/",
  },
];

export default function FooterContent() {
    return (
        <div className="row ">
          <Chatbot/>
        <div
          className="col-xl-3 col-lg-2 mb-40"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="logo">
            <a href="index.html">
              <img src={effybuy_logo_with_name} style={{"width":"180px"}} alt="logo" />
            </a>
          </div>
        </div>
  
        <div
          className="col-lg-2 col-md-6 mb-40"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <h5 className="title">Links</h5>
          <ul className="footer-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
              
            </li>
            <li>
              <a href="mailto:hr@bizgam.com">
                  <div className="footer_sub_second">
                          Career
                  </div>
              </a>
            </li>
          </ul>
          <ul className="social-icon d-flex pt-15">
          {socialContent.map((val, i) => (
            <li key={i}>
              <a href={val.link} target="_blank" rel="noreferrer" style={{"fontSize":"22px","marginRight":"10px"}}>
                <i className={`fab ${val.icon}`}></i>
              </a>
            </li>
          ))}
        </ul>
        </div>
  
        <div
          className="col-lg-3 col-md-6 mb-40"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="150"
        >
          <h5 className="title">Legal</h5>
          <ul className="footer-list">
            <li>
              <Link to="/TermsAndConditions" target="_blank" rel="noreferrer">Terms & conditions</Link>
            </li>
            <li>
              <Link to="/privacyPolicy" target="_blank" rel="noreferrer">Privacy policy</Link>
            </li>
          </ul>
        </div>
        <div
          className="col-xl-4 col-lg-5 mb-40"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="newsletter">
            <h5 className="title">Contact us</h5>
            <p>
              <span>support@bizgam.com</span>
              <br/>
              <i className="fas fa-phone-alt fa-sm" style={{"marginRight":"10px"}}></i><i className="fab fa-whatsapp" style={{"marginRight":"10px"}}></i>+91 7538 851 133
              <br/>
            </p>
  
            <FormFooterSignup />
  
            <div className="info">
              We only send interesting and relevant emails.
            </div>
            
          </div>
        </div>
      </div>
    )
}
