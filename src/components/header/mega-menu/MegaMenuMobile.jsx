import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import effybuy_logo_with_name from '../../../assets/images/icon/effybuy_logo_with_name.png'
import close_icon from '../../../assets/images/icon/close-w.svg'

import {
  ProSidebar,
  SidebarHeader,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";

const HomeMobileMenu = [
  {
    name: "Event Organiser",
    routerPath: "/event-organizer",
  },
  {
    name: "Project Management",
    routerPath: "/project-management",
  },
  {
    name: "Customer Support",
    routerPath: "/customer-support",
  },
  {
    name: "Doc landing",
    routerPath: "/doc-landing",
  },
  {
    name: "Product landing",
    routerPath: "/product-landing",
  },
  {
    name: "Product landing Dark",
    routerPath: "/product-landing-dark",
  },
  {
    name: "Note Taking App landing",
    routerPath: "/note-taking-landing",
  },
  {
    name: "Video Editor Landing",
    routerPath: "/video-editor-landing",
  },
  {
    name: "Appointment Scheduling",
    routerPath: "/appointment-scheduling",
  },
  {
    name: "Mobile App",
    routerPath: "/mobile-app-landing",
  },
  {
    name: "Coming Soon",
    routerPath: "/coming-soon",
  },
];

const Pricing = [
  {
    name: "Customer Support",
    routerPath: "/pricing-cs",
  },
  {
    name: "Event Organiser",
    routerPath: "/pricing-eo",
  },
  {
    name: "Project Management",
    routerPath: "/pricing-pm",
  },
];
const AboutUs = [
  {
    name: "Customer Support",
    routerPath: "/about-cs",
  },
  {
    name: "Event Organiser",
    routerPath: "/about-eo",
  },
  {
    name: "Project Management",
    routerPath: "/about-pm",
  },
  {
    name: "Documentation",
    routerPath: "/about-doc",
  },
];
const ContactUs = [
  {
    name: "Custom Support",
    routerPath: "/contact-cs",
  },
  {
    name: "Event Organizer",
    routerPath: "/contact-eo",
  },
  {
    name: "Project Management",
    routerPath: "/contact-pm",
  },
  {
    name: "Documentation",
    routerPath: "/contact-doc",
  },
];
const Team = [
  {
    name: "Team Version 01",
    routerPath: "/team-1",
  },
  {
    name: "Team Version 02",
    routerPath: "/team-2",
  },
  {
    name: "Team Version 03",
    routerPath: "/team-3",
  },
  {
    name: "Team Version 04",
    routerPath: "/team-4",
  },
  {
    name: "Team Version 05",
    routerPath: "/team-5",
  },
  {
    name: "Team Version 06",
    routerPath: "/team-6",
  },
  {
    name: "Team Details",
    routerPath: "/team-details-v1",
  },
  {
    name: "Team Details Slider",
    routerPath: "/team-details-v2",
  },
];
const Miscellaneous = [
  {
    name: "Terms & Condition)",
    routerPath: "terms-conditions",
  },
  {
    name: "Login",
    routerPath: "/login",
  },
  {
    name: "Signup",
    routerPath: "/signup",
  },
];
const Resources = [
  {
    name: "BLOGS",
    routerPath: "/EffyBuy/resources/blogs",
    class:"fas fa-blog",
    desc:"Keep yourself updated with all things marketing"
  },
  {
    name: "SUCCESS STORIES",
    routerPath: "/EffyBuy",
    // routerPath: "/EffyBuy/resources/success_stories",
    class:"fas fa-trophy",
    desc:"Seek how EffyBuy helps brands to evaluate customer experience",
  },
  {
    name: "PPT",
    routerPath: "/EffyBuy/resources/ppts",
    class:"fas fa-laptop-code",
    desc:"Get to know more about EffyBuy products through our presentations",
  },
  {
    name: "CASE STUDIES",
    routerPath: "/EffyBuy/resources/caseStudy",
    class:"fas fa-laptop-code",
    desc:"Take a look at what customers feel about our offerings",
  },
  {
    name: "E-BOOKS",
    routerPath: "/EffyBuy/resources/ebooks",
    class:"fas fa-poll-h",
    desc:"Get insightful updates about auto procurement with EffyBuy",
  },
  {
    name: "WHITEPAPER",
    routerPath: "/EffyBuy/resources/white_papers",
    class:"far fa-newspaper",
    desc:"Deep dive knowledge about EffyBuy offerings and its merits",
  },
  {
    name: "WEBINARS",
    routerPath: "/Effybuy/resources/webinars",
    // routerPath: "/EffyBuy/resources/wb",
    class:"fas fa-laptop",
    desc:"Highly engaging and personal way to connect with our experts",
  },
  {
    name: "VIDEOS",
    routerPath: "/Effybuy/resources/videos",
    // routerPath: "/EffyBuy/resources/videos",
    class:"fas fa-video",
    desc:"Create the most out of EffyBuy with our step-by-step videos",
  },
  {
    name: "GUIDES",
    routerPath: "/EffyBuy",
    // routerPath: "/EffyBuy/resources/guides",
    class:"fas fa-map-signs",
    desc:"Lessons to kickstart and grow your multi-channel marketing"
  },
];
const Docs = [
  {
    name: "Full Width",
    routerPath: "/doc-full-width",
  },
  {
    name: "Full Width Banner",
    routerPath: "/doc-full-width-banner",
  },
  {
    name: "Doc Box",
    routerPath: "doc-box",
  },
  {
    name: "Doc Box With Banner",
    routerPath: "/doc-box-with-banner",
  },
];

const MegaMenuMobile = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="mega-menu-wrapper">
      <div className="mob-header multi-mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Header */}

      <ProSidebar
        className={click ? "mega-mobile-menu menu-open" : "mega-mobile-menu"}
      >
        <SidebarHeader>
          <div className="logo position-static">
            <Link to="/" onClick={handleClick}>
              <img src={effybuy_logo_with_name} alt="home-demo" />
            </Link>
          </div>
          {/* <div className="fix-icon text-dark" onClick={handleClick}>
            <img src={close_icon} alt="icon" />
          </div> */}
          {/* Mobile Menu close icon */}

          {/* End logo */}
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            {/* <SubMenu title="Home">
              {HomeMobileMenu.map((val, i) => (
                <MenuItem key={i}>
                  <Link to={val.routerPath}>{val.name}</Link>
                </MenuItem>
              ))}
            </SubMenu> */}
            {/* End Home SubMenu */}

            <SubMenu title="Products">
              {/* <SubMenu title="Pricing" className="plus alt">
                {Pricing.map((val, i) => (
                  <MenuItem key={i}>
                    <Link to={val.routerPath}>{val.name}</Link>
                  </MenuItem>
                ))}
              </SubMenu> */}

              {/* <SubMenu title="About Us" className="plus alt">
                {AboutUs.map((val, i) => (
                  <MenuItem key={i}>
                    <Link to={val.routerPath}>{val.name}</Link>
                  </MenuItem>
                ))}
              </SubMenu> */}
              {/* End About SubMenu */}

              {/* <SubMenu title="Contact Us" className="plus alt">
                {ContactUs.map((val, i) => (
                  <MenuItem key={i}>
                    <Link to={val.routerPath}>{val.name}</Link>
                  </MenuItem>
                ))}
              </SubMenu> */}
              {/* End Contact Us SubMenu */}

              {/* <SubMenu title="Team" className="plus alt">
                {Team.map((val, i) => (
                  <MenuItem key={i}>
                    <Link to={val.routerPath}>{val.name}</Link>
                  </MenuItem>
                ))}
              </SubMenu> */}
              {/* End Team SubMenu */}
              <MenuItem>
                {" "}
                <i className="far fa-sticky-note" style={{"marginRight":"10px"}}></i>
                <Link to="/EffyBuy/rfq" onClick={handleClick}>RFP | RFQ</Link>
                <div style={{"fontSize":"12px","margin":"0px 0 0px 25px","paddingBottom":"10px","lineHeight":"normal"}}>Learn about automated requests for<br/>quotation and proposals</div>

              </MenuItem>
              {/* <MenuItem>
                {" "}
                <i className="fas fa-hammer" style={{"marginRight":"10px"}}></i>
                <Link to="/EffyBuy">QUICK AUCTION</Link>
                <div style={{"fontSize":"12px","margin":"0px 0 0px 25px","paddingBottom":"10px","lineHeight":"normal"}}>Faster method to launch an auction<br/>without any set up</div>
              </MenuItem> */}
              <MenuItem>
                {" "}
                <i className="fas fa-undo" style={{"marginRight":"10px"}}></i>
                <Link to="/EffyBuy/reverseAuction" onClick={handleClick}>REVERSE AUCTION</Link>
                <div style={{"fontSize":"12px","margin":"0px 0 0px 25px","paddingBottom":"10px","lineHeight":"normal"}}>Get real-time bidding with suppliers<br/>online with our tool</div>
              </MenuItem>
              <MenuItem>
                {" "}
                <i className="fas fa-redo" style={{"marginRight":"10px"}}></i>
                <Link to="/EffyBuy/EffySell" onClick={handleClick}>EFFYSELL</Link>
                <div style={{"fontSize":"12px","margin":"0px 0 0px 25px","paddingBottom":"10px","lineHeight":"normal"}}>Create auction for selling items at<br/>best price with EffyBuy</div>
              </MenuItem>
              <MenuItem>
                {" "}
                <i className="fas fa-shipping-fast" style={{"marginRight":"10px"}}></i>
                <Link to="/EffyBuy/Logistics" onClick={handleClick}>LOGISTICS</Link>
                <div style={{"fontSize":"12px","margin":"0px 0 0px 25px","paddingBottom":"10px","lineHeight":"normal"}}>Choose your best freight forwarder<br/>at ease with ultimate savings </div>
              </MenuItem>
            </SubMenu>
            {/* End Pages SubMenu */}

            {/* <SubMenu title="Features">
              <SubMenu title="Miscellaneous" className="plus alt">
                {Miscellaneous.map((val, i) => (
                  <MenuItem key={i}>
                    <Link to={val.routerPath}>{val.name}</Link>
                  </MenuItem>
                ))}
              </SubMenu>

              <MenuItem>
                {" "}
                <Link to="/solution-management" className="dropdown-item">
                  Solution (Management)
                </Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <Link to="/product-customer-support" className="dropdown-item">
                  Product (Customer Support)
                </Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <Link to="/features-customer-support" className="dropdown-item">
                  Features (Customer Support)
                </Link>
              </MenuItem>
            </SubMenu> */}
            {/* End Feautres SubMenu */}

            <SubMenu title="Resources">
              {Resources.map((val, i) => (
                <MenuItem key={i}>
                  <i className={val.class} style={{"marginRight":"10px"}}></i>
                  <Link to={val.routerPath} onClick={handleClick}>{val.name}</Link>
                </MenuItem>
              ))}
            </SubMenu>
            {/* End Blogs SubMenu */}

            <SubMenu title="Pricing">
              {/* {Resources.map((val, i) => ( */}
                <MenuItem >
                  <i className="fas fa-money-check-alt" style={{"marginRight":"10px"}}></i>
                  <Link to="/EffyBuy/pricing/effybuy" onClick={handleClick}>EFFYBUY</Link>
                </MenuItem>
              {/* ))} */}
            </SubMenu>

            {/* End Pricing SubMenu */}
            <MenuItem>
              <a href="https://www.effybuy.com/bizgam20/apps/baf.php">Login</a>
            </MenuItem>
            <MenuItem>
              <ul className="right-button-group d-flex align-items-center justify-content-center">
                      <li>
                        <a href="https://www.effybuy.com/bizgam20/apps/baf.php/B_OS_BAF_USER_REGISTER/EDIT" className="signUp-action" onClick={()=>{window.lintrk('track', { conversion_id: 7514468 });}}>
                          Sign Up
                        </a>
                      </li>
              </ul>
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default MegaMenuMobile;
