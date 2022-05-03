import React from 'react'
import { Link } from "react-router-dom";
import arrow from '../../assets/images/icon/93.svg'
import Get_on_boarding_less from '../../assets/images/media/Get_on_boarding_less.svg'
import affordable_price from '../../assets/images/media/affordable_price_new.svg'
import transparency from '../../assets/images/media/transparency.svg'
import automate from '../../assets/images/media/automate.svg'


export default function ForthPannel() {
    return (
        <div className="fancy-feature-sixteen pt-200 md-pt-100" id="features">
        <div className="container" style={{"overflow":"hidden"}}>
          <div className="block-style-eighteen">
            <div className="row align-items-center">
              <div
                className="col-lg-6 order-lg-first"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  {/* <h6>App Integration</h6> */}
                  <h3 className="title">
                    {/* Connect with <span>software.</span> */}
                        Instantly <span>automate</span> all your purchases
                  </h3>
                  <p>
                    With 2 purchase options, RFQ and Reverse Auction, 
                    all your purchasing activities can be automated.
                  </p>
                  <Link
                    to="/EffyBuy/rfq"
                    className="d-flex align-items-center learn-more"
                  >
                    <span>Learn more about RFQ</span>
                    <img src={arrow} alt="screen" />
                  </Link>
                  <Link
                    to="/EffyBuy/reverseAuction"
                    className="d-flex align-items-center learn-more"
                  >
                    <span>Learn more about Reverse Auction</span>
                    <img src={arrow} alt="screen" />
                  </Link>
                </div>
                {/*  /.text-wrapper */}
              </div>
              <div
                className="col-lg-6 order-lg-last"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div
                  className="
                    
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                >
                  <div
                    className="
                      round-bg
                      big_g
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                    style={{ width: "400px", height: "400px" }}
                  >
                      <img src={automate} alt="logo" />
                  </div>
                  {/* <div
                    className="
                      round-bg
                      d-flex
                      align-items-center
                      justify-content-center
                      shapes
                      logo-one
                    "
                    style={{ width: "65px", height: "65px" }}
                  >
                    <img src="images/logo/logo-27.png" alt="logo" />
                  </div> */}
                  {/* <div
                    className="
                      round-bg
                      d-flex
                      align-items-center
                      justify-content-center
                      shapes
                      logo-two
                    "
                    style={{ width: "105px", height: "105px" }}
                  >
                    <img src="images/logo/logo-28.png" alt="logo" />
                  </div> */}
                  {/* <div
                    className="
                      round-bg
                      d-flex
                      align-items-center
                      justify-content-center
                      shapes
                      logo-three
                    "
                    style={{ width: "81px", height: "81px" }}
                  >
                    <img src="images/logo/logo-29.png" alt="logo" />
                  </div> */}
                  {/* <div
                    className="
                      round-bg
                      d-flex
                      align-items-center
                      justify-content-center
                      shapes
                      logo-four
                    "
                    style={{ width: "148px", height: "148px" }}
                  >
                    <img src="images/logo/logo-30.png" alt="logo" />
                  </div> */}
                  {/* <div
                    className="
                      round-bg
                      d-flex
                      align-items-center
                      justify-content-center
                      shapes
                      logo-five
                    "
                    style={{ width: "148px", height: "148px" }}
                  >
                    <img src="images/logo/logo-31.png" alt="logo" />
                  </div> */}
                  {/* <img
                    src="images/shape/170.svg"
                    alt=""
                    className="shapes shape-one"
                  /> */}
                </div>
              </div>
            </div>
          </div>
          {/* /.block-style-eighteen */}

          <div className="block-style-eighteen mt-200 pt-50 md-mt-80">
            <div className="row align-items-center">
              <div
                className="col-lg-6 order-lg-last"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  {/* <h6>Scanning & Doc</h6> */}
                  <h3 className="title">
                    {/* Web doc <br />
                    file <span>Scanning.</span> */}
                    Get on-boarded in <br/>less than <span>10 minutes</span>
                  </h3>
                  <p>
                    EffyBuy is extremely easy to sign-up and use. You can set 
                    it up on your own in less than half an hour, or if you need any help, 
                    you can always set it up with the help of our customer 
                    support team via an online meeting. 
                  </p>
                  {/* <Link
                    to="/product-customer-support"
                    className="d-flex align-items-center learn-more"
                  >
                    <span>Learn More</span>
                    <img src="images/icon/93.svg" alt="screen" />
                  </Link> */}
                </div>
                {/* /.text-wrapper */}
              </div>
              <div
                className="col-lg-6 order-lg-first"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                
                {/* <div className="screen-holder-two">
                  <img src={Get_on_boarding_less} style={{"widows":"100%"}} alt="screen" />
                  <img
                    src={Get_on_boarding_less}
                    alt=""
                    className="shapes screen-one"
                  />
                </div> */}
                <div
                    className="
                      round-bg
                      big_g
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                    // style={{ width: "303px", height: "303px" }}
                    style={{"textAlign":"center"}}
                  >
                      <img src={Get_on_boarding_less} style={{ "width": "400px","height":"400px" }} alt="logo" />
                  </div>
                
              </div>
            </div>
          </div>
          {/* /.block-style-eighteen */}

          <div className="block-style-eighteen mt-200 pt-50 md-mt-80">
            <div className="row align-items-center">
              <div
                className="col-lg-6 order-lg-first"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  {/* <h6>Note & Docs</h6> */}
                  <h3 className="title">
                    {/* <span>Clipper</span> & Rich notes */}
                    <span>Affordable</span> pricing
                  </h3>
                  <p>
                    You don't have to break the bank with our very affordable pricing. 
                    We have created special pricing for businesses that are extremely affordable. 
                    We guarantee you'll get your money back in savings within 1 week of usage. 
                  </p>
                  {/* <Link
                    to="/product-customer-support"
                    className="d-flex align-items-center learn-more"
                  >
                    <span>Learn More</span>
                    <img src="images/icon/93.svg" alt="screen" />
                  </Link> */}
                </div>
                {/* /.text-wrapper */}
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div
                  className="
                    order-lg-last
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                  style={{"textAlign":"center"}}
                >
                    <img src={affordable_price} style={{ "width": "400px","height":"400px"}} alt="screen" />
                </div>
              </div>
            </div>
          </div>

          <div className="block-style-eighteen mt-200 pt-50 md-mt-80">
            <div className="row align-items-center">
              <div
                className="col-lg-6 order-lg-last"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  {/* <h6>Scanning & Doc</h6> */}
                  <h3 className="title">
                    {/* Web doc <br />
                    file <span>Scanning.</span> */}
                    Promoting radical <span>transparency</span> in the purchase process
                  </h3>
                  <p>
                    Usually, all quotes and negotiations are not verifiable or usable for data analytics. 
                    Now with EffyBuy capture every details of all quotes received by automating the RFQ process. 
                    Get clean data for reports & analytics through our smart dashboard.
                  </p>
                  {/* <Link
                    to="/product-customer-support"
                    className="d-flex align-items-center learn-more"
                  >
                    <span>Learn More</span>
                    <img src="images/icon/93.svg" alt="screen" />
                  </Link> */}
                </div>
                {/* /.text-wrapper */}
              </div>
              {/* <div
                className="col-lg-6 order-lg-first"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="screen-holder-two">
                  <img src={transparency} alt="screen" />
                  <img
                    src={transparency}
                    alt=""
                    className="shapes screen-one"
                  />
                </div>
              </div> */}
              <div
                  className="
                  col-lg-6 order-lg-first"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  style={{"textAlign":"center"}}
                >
                    <img src={transparency} style={{ "width": "400px","height":"400px" }} alt="screen" />
                </div>
            </div>
          </div>
          {/* /.block-style-eighteen */}
        </div>
      </div>
    )
}
