import React from "react";
import { Link } from "react-router-dom";


const Resources = [
  {
    name: "BLOGS",
    routerPath: "/blogs",
    class:"fas fa-blog",
    desc:"Keep yourself updated with all things marketing"
  },
  {
    name: "SUCCESS STORIES",
    routerPath: "/",
    // routerPath: "/EffyBuy/resources/success_stories",
    class:"fas fa-trophy",
    desc:"Seek how EffyBuy helps brands to evaluate customer experience",
  },
  {
    name: "PPT",
    routerPath: "/ppts",
    class:"fas fa-laptop-code",
    desc:"Get to know more about EffyBuy products through our presentations",
  },
  {
    name: "CASE STUDIES",
    routerPath: "/casestudy",
    class:"fas fa-laptop-code",
    desc:"Take a look at what customers feel about our offerings",
  },
  {
    name: "E-BOOKS",
    routerPath: "/",
    // routerPath: "/EffyBuy/resources/ebooks",
    class:"fas fa-poll-h",
    desc:"Get insightful updates about auto procurement with EffyBuy",
  },
  {
    name: "WHITEPAPER",
    routerPath: "/",
    // routerPath: "/EffyBuy/resources/white_papers",
    class:"far fa-newspaper",
    desc:"Deep dive knowledge about EffyBuy offerings and its merits",
  },
  {
    name: "WEBINARS",
    routerPath: "/webinars",
    // routerPath: "/EffyBuy/resources/wb",
    class:"fas fa-laptop",
    desc:"Highly engaging and personal way to connect with our experts",
  },
  {
    name: "VIDEOS",
    routerPath: "/videos",
    // routerPath: "/EffyBuy/resources/videos",
    class:"fas fa-video",
    desc:"Create the most out of EffyBuy with our step-by-step videos",
  },
  {
    name: "GUIDES",
    routerPath: "/",
    // routerPath: "/EffyBuy/resources/guides",
    class:"fas fa-map-signs",
    desc:"Lessons to kickstart and grow your multi-channel marketing"
  },
];


const MegaMenu = () => {
  return (
    <ul className="navbar-nav">


      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/#" data-toggle="dropdown">
          Products
        </a>
        <ul className="dropdown-menu">
          
          <li>
            <Link className="dropdown-item" to="/rfp-rfq-software">
              {" "}
              <i className="far fa-sticky-note" style={{"marginRight":"10px"}}></i>
              RFP | RFQ
              <div style={{"fontSize":"10px","margin":"-10px 0 0px 30px","paddingBottom":"10px","lineHeight":"normal"}}>Learn about automated requests for<br/>quotation and proposals</div>
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/reverse-auction-software">
              {" "}
              <i className="fas fa-undo" style={{"marginRight":"10px"}}></i>
              REVERSE AUCTION
              <div style={{"fontSize":"10px","margin":"-10px 0 0px 30px","paddingBottom":"10px","lineHeight":"normal"}}>Get real-time bidding with suppliers<br/>online with our tool</div>
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/EffySell">
              {" "}
              <i className="fas fa-redo" style={{"marginRight":"10px"}}></i>
              EFFYSELL
              <div style={{"fontSize":"10px","margin":"-10px 0 0px 30px","paddingBottom":"10px","lineHeight":"normal"}}>Create auction for selling items at<br/>best price with EffyBuy</div>
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/freight-forwarder-software">
              {" "}
              <i className="fas fa-shipping-fast" style={{"marginRight":"10px"}}></i>
              LOGISTICS
              <div style={{"fontSize":"10px","margin":"-10px 0 0px 30px","paddingBottom":"10px","lineHeight":"normal"}}>Choose your best freight forwarder<br/>at ease with ultimate savings </div>
            </Link>
          </li>
        </ul>
      </li>

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
              </Link>
            </li>
          ))}
        </ul>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/#" data-toggle="dropdown">
          Pricing
        </a>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="/pricing">
              {" "}
              <i className="fas fa-money-check-alt" style={{"marginRight":"10px"}}></i>
              EFFYBUY
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default MegaMenu;
