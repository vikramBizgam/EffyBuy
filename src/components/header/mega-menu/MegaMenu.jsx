import React from "react";
import { Link } from "react-router-dom";
import effybuy_logo from '../../../assets/images/icon/Logo_icon192.jpg'

// const HomeDropdown = [
//   {
//     img: "home01",
//     routerPath: "/event-organizer",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//   },
//   {
//     img: "home02",
//     routerPath: "/doc-landing",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//   },
//   {
//     img: "home03",
//     routerPath: "/project-management",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//   },
//   {
//     img: "home04",
//     routerPath: "/customer-support",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//   },
//   {
//     img: "home05",
//     routerPath: "/product-landing",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//   },
//   {
//     img: "home06",
//     routerPath: "/product-landing-dark",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//   },
//   {
//     img: "home07",
//     routerPath: "/note-taking-landing",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//   },
//   {
//     img: "home08",
//     routerPath: "/video-editor-landing",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//   },
//   {
//     img: "home10",
//     routerPath: "/appointment-scheduling",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//   },
//   {
//     img: "home11",
//     routerPath: "/mobile-app-landing",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//   },
//   {
//     img: "home09",
//     routerPath: "/coming-soon",
//     inenerText: "",
//     inenerTextWrapClass: "",
//     clasName: `dropdown-item img-box`,
//   },
//   {
//     img: "home12",
//     routerPath: "/doc-signature",
//     inenerText: "Coming Soon",
//     inenerTextWrapClass:
//       "hover d-flex align-items-center justify-content-center",
//     clasName: `img-box`,
//   },
// ];

// const Pricing = [
//   {
//     name: "Customer Support",
//     routerPath: "/pricing-cs",
//   },
//   {
//     name: "Event Organiser",
//     routerPath: "/pricing-eo",
//   },
//   {
//     name: "Project Management",
//     routerPath: "/pricing-pm",
//   },
// ];
// const AboutUs = [
//   {
//     name: "Customer Support",
//     routerPath: "/about-cs",
//   },
//   {
//     name: "Event Organiser",
//     routerPath: "/about-eo",
//   },
//   {
//     name: "Project Management",
//     routerPath: "/about-pm",
//   },
//   {
//     name: "Documentation",
//     routerPath: "/about-doc",
//   },
// ];

// const ContactUS = [
//   {
//     name: "Customer Support",
//     routerPath: "/contact-cs",
//   },
//   {
//     name: "Event Organiser",
//     routerPath: "/contact-eo",
//   },
//   {
//     name: "Project Management",
//     routerPath: "/contact-pm",
//   },
//   {
//     name: "Documentation",
//     routerPath: "/contact-doc",
//   },
// ];
// const Team = [
//   {
//     name: "Team Version 01",
//     routerPath: "/team-1",
//   },
//   {
//     name: "Team Version 02",
//     routerPath: "/team-2",
//   },
//   {
//     name: "Team Version 03",
//     routerPath: "/team-3",
//   },
//   {
//     name: "Team Version 04",
//     routerPath: "/team-4",
//   },
//   {
//     name: "Team Version 05",
//     routerPath: "/team-5",
//   },
//   {
//     name: "Team Version 06",
//     routerPath: "/team-6",
//   },
//   {
//     name: "Team Details",
//     routerPath: "/team-details-v1",
//   },
//   {
//     name: "Team Details Slider",
//     routerPath: "/team-details-v2",
//   },
// ];

// const Miscellaneous = [
//   {
//     name: "Terms & Condition",
//     routerPath: "terms-conditions",
//   },
//   {
//     name: "Login",
//     routerPath: "/login",
//   },
//   {
//     name: "Signup",
//     routerPath: "/signup",
//   },
// ];
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
    routerPath: "/EffyBuy",
    // routerPath: "/EffyBuy/resources/ebooks",
    class:"fas fa-poll-h",
    desc:"Get insightful updates about auto procurement with EffyBuy",
  },
  {
    name: "WHITEPAPER",
    routerPath: "/EffyBuy",
    // routerPath: "/EffyBuy/resources/white_papers",
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
// const Docs = [
//   {
//     name: "Full Width",
//     routerPath: "/doc-full-width",
//   },
//   {
//     name: "Full Width Banner",
//     routerPath: "/doc-full-width-banner",
//   },
//   {
//     name: "Doc Box",
//     routerPath: "doc-box",
//   },
//   {
//     name: "Doc Box With Banner",
//     routerPath: "/doc-box-with-banner",
//   },
// ];

const MegaMenu = () => {
  return (
    <ul className="navbar-nav">
      {/* <li className="nav-item dropdown position-static active">
        <a className="nav-link dropdown-toggle" href="/#" data-toggle="dropdown">
          Home
        </a>
        <div className="dropdown-menu">
          <ul className="mega-menu d-flex justify-content-between">
            {HomeDropdown.map((val, i) => (
              <li key={i}>
                <Link to={val.routerPath} className={val.clasName}>
                  <img src={`images/menu/${val.img}.png`} alt="home-demo" />
                  <div className={val.inenerTextWrapClass}>
                    <div className="font-rubik">{val.inenerText}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li> */}
      {/* End li */}

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/#" data-toggle="dropdown">
          Products
        </a>
        <ul className="dropdown-menu">
          {/* <li className="dropdown-submenu dropdown">
            <a
              href="/#"
              className="dropdown-item dropdown-toggle"
              data-toggle="dropdown"
            >
              Pricing
            </a>
            <ul className="dropdown-menu">
              {Pricing.map((val, i) => (
                <li key={i}>
                  <Link to={val.routerPath} className="dropdown-item">
                    {val.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="dropdown-submenu dropdown">
            <a
              href="/#"
              className="dropdown-item dropdown-toggle"
              data-toggle="dropdown"
            >
              About Us
            </a>
            <ul className="dropdown-menu">
              {AboutUs.map((val, i) => (
                <li key={i}>
                  <Link to={val.routerPath} className="dropdown-item">
                    {val.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="dropdown-submenu dropdown">
            <a
              href="/#"
              className="dropdown-item dropdown-toggle"
              data-toggle="dropdown"
            >
              Contact Us
            </a>
            <ul className="dropdown-menu">
              {ContactUS.map((val, i) => (
                <li key={i}>
                  <Link to={val.routerPath} className="dropdown-item">
                    {val.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="dropdown-submenu dropdown">
            <a
              href="/#"
              className="dropdown-item dropdown-toggle"
              data-toggle="dropdown"
            >
              Team
            </a>
            <ul className="dropdown-menu">
              {Team.map((val, i) => (
                <li key={i}>
                  <Link to={val.routerPath} className="dropdown-item">
                    {val.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li> */}
          <li>
            <Link className="dropdown-item" to="/EffyBuy/rfq">
              {" "}
              <i className="far fa-sticky-note" style={{"marginRight":"10px"}}></i>
              RFP | RFQ
              <div style={{"fontSize":"10px","margin":"-10px 0 0px 30px","paddingBottom":"10px","lineHeight":"normal"}}>Learn about automated requests for<br/>quotation and proposals</div>
            </Link>
          </li>
          {/* <li>
            <Link className="dropdown-item" to="/EffyBuy">
              {" "}
              <i className="fas fa-hammer" style={{"marginRight":"10px"}}></i>
              QUICK AUCTION
              <div style={{"fontSize":"10px","margin":"-10px 0 0px 30px","paddingBottom":"10px","lineHeight":"normal"}}>Faster method to launch an auction<br/>without any set up</div>
            </Link>
          </li> */}
          <li>
            <Link className="dropdown-item" to="/EffyBuy/reverseAuction">
              {" "}
              <i className="fas fa-undo" style={{"marginRight":"10px"}}></i>
              REVERSE AUCTION
              <div style={{"fontSize":"10px","margin":"-10px 0 0px 30px","paddingBottom":"10px","lineHeight":"normal"}}>Get real-time bidding with suppliers<br/>online with our tool</div>
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/EffyBuy/EffySell">
              {" "}
              <i className="fas fa-redo" style={{"marginRight":"10px"}}></i>
              EFFYSELL
              <div style={{"fontSize":"10px","margin":"-10px 0 0px 30px","paddingBottom":"10px","lineHeight":"normal"}}>Create auction for selling items at<br/>best price with EffyBuy</div>
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/EffyBuy/Logistics">
              {" "}
              <i className="fas fa-shipping-fast" style={{"marginRight":"10px"}}></i>
              LOGISTICS
              <div style={{"fontSize":"10px","margin":"-10px 0 0px 30px","paddingBottom":"10px","lineHeight":"normal"}}>Choose your best freight forwarder<br/>at ease with ultimate savings </div>
            </Link>
          </li>
        </ul>
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}

      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/#" data-toggle="dropdown">
          Feature
        </a>

        <ul className="dropdown-menu">
          <li className="dropdown-submenu dropdown">
            <a
              href="/#"
              className="dropdown-item dropdown-toggle"
              data-toggle="dropdown"
            >
              Miscellaneous
            </a>
            <ul className="dropdown-menu">
              {Miscellaneous.map((val, i) => (
                <li key={i}>
                  <Link to={val.routerPath} className="dropdown-item">
                    {val.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/solution-management" className="dropdown-item">
              Solution (Management)
            </Link>
          </li>
          <li>
            <Link to="/product-customer-support" className="dropdown-item">
              Product (Customer Support)
            </Link>
          </li>
          <li>
            <Link to="/features-customer-support" className="dropdown-item">
              Features (Customer Support)
            </Link>
          </li>
        </ul>
      </li> */}
      {/* End li */}

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/#" data-toggle="dropdown">
          Resources
        </a>
        <ul className="dropdown-menu">
          {Resources.map((val, i) => (
            <li key={i}>
              <Link to={val.routerPath} className="dropdown-item">
                <i className={val.class} style={{"marginRight":"10px"}}></i>
                {val.name}
                {/* <div style={{"fontSize":"10px","margin":"-10px 0 0px 30px","paddingBottom":"5px","lineHeight":"normal"}}>{val.desc}</div> */}
              </Link>
            </li>
          ))}
        </ul>
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/#" data-toggle="dropdown">
          Pricing
        </a>
        <ul className="dropdown-menu">
          {/* {Docs.map((val, i) => (
            <li key={i}>
              <Link to={val.routerPath} className="dropdown-item">
                {val.name}
              </Link>
            </li>
          ))} */}
          <li>
            {/* <Link className="dropdown-item" to="/EffyBuy/pricing/effybuy">
              {" "}
              <div style={{"display":"inline-block"}}>
                  <img src={effybuy_logo} alt="effybuy_logo" style={{"width":"15px","marginRight":"10px"}}/>
              </div>
              EFFYBUY
              <div style={{"fontSize":"10px","margin":"-10px 0 0px 30px","paddingBottom":"5px","lineHeight":"normal"}}>Take a look at effybuy pricing</div>

            </Link> */}
            <Link className="dropdown-item" to="/EffyBuy/pricing/effybuy">
              {" "}
              {/* <i className="far fa-sticky-note" style={{"marginRight":"10px"}}></i> */}
              <i className="fas fa-money-check-alt" style={{"marginRight":"10px"}}></i>
              EFFYBUY
              {/* <div style={{"fontSize":"10px","margin":"-10px 0 0px 30px","paddingBottom":"10px","lineHeight":"normal"}}>Learn about automated requests for<br/>quotation and proposals</div> */}
            </Link>
          </li>
        </ul>
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}
    </ul>
  );
  // End navbar nav mega menu main
};

export default MegaMenu;
