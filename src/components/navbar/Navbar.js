import React from "react";
import { Link } from "react-router-dom";

const HomeDropdown = [
  {
    img: "home01",
    routerPath: "/event-organizer",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
  },
  {
    img: "home02",
    routerPath: "/doc-landing",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
  },
  {
    img: "home03",
    routerPath: "/project-management",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
  },
  {
    img: "home04",
    routerPath: "/customer-support",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
  },
  {
    img: "home05",
    routerPath: "/product-landing",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
  },
  {
    img: "home06",
    routerPath: "/product-landing-dark",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
  },
  {
    img: "home07",
    routerPath: "/note-taking-landing",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
  },
  {
    img: "home08",
    routerPath: "/video-editor-landing",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
  },
  {
    img: "home10",
    routerPath: "/appointment-scheduling",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
  },
  {
    img: "home11",
    routerPath: "/mobile-app-landing",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
  },
  {
    img: "home09",
    routerPath: "/coming-soon",
    inenerText: "",
    inenerTextWrapClass: "",
    clasName: `dropdown-item img-box`,
  },
  {
    img: "home12",
    routerPath: "/doc-signature",
    inenerText: "Coming Soon",
    inenerTextWrapClass:
      "hover d-flex align-items-center justify-content-center",
    clasName: `img-box`,
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

const ContactUS = [
  {
    name: "Customer Support",
    routerPath: "/contact-cs",
  },
  {
    name: "Event Organiser",
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
    name: "Terms & Condition",
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
const Blogs = [
  {
    name: "Blog Version 01",
    routerPath: "/blog-v1",
  },
  {
    name: "Blog Version 02",
    routerPath: "blog-v2",
  },
  {
    name: "Blog Version 03",
    routerPath: "blog-v3",
  },
  {
    name: "Blog Version 04",
    routerPath: "blog-v4",
  },
  {
    name: "Blog Version 05",
    routerPath: "blog-v5",
  },
  {
    name: "Blog Details",
    routerPath: "blog-details",
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

const MegaMenu = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item dropdown position-static active">
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
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/#" data-toggle="dropdown">
          Pages
        </a>
        <ul className="dropdown-menu">
          <li className="dropdown-submenu dropdown">
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
          </li>
          <li>
            <Link className="dropdown-item" to="/faq">
              {" "}
              FAQ
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/faq-details">
              {" "}
              Faq Details
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/404">
              {" "}
              404
            </Link>
          </li>
        </ul>
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}

      <li className="nav-item dropdown">
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
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/#" data-toggle="dropdown">
          Blogs
        </a>
        <ul className="dropdown-menu">
          {Blogs.map((val, i) => (
            <li key={i}>
              <Link to={val.routerPath} className="dropdown-item">
                {val.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/#" data-toggle="dropdown">
          Docs
        </a>
        <ul className="dropdown-menu">
          {Docs.map((val, i) => (
            <li key={i}>
              <Link to={val.routerPath} className="dropdown-item">
                {val.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* /.dropdown-menu */}
      </li>
      {/* End li */}
    </ul>
  );
  // End navbar nav mega menu main
};

export default MegaMenu;
