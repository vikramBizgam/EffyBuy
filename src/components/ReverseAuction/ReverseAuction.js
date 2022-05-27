import React,{ Component } from "react";
import { Link } from "react-router-dom";
// import useDocumentTitle from '../useDocumentTitle.js';
// import Header from "../../components/header/Header";
// import FaqClassic from "../../components/faq/FaqClassicTwo";
// import SocialTwo from "../../components/social/SocialTwo";
// import CounterOne from "../../components/counter/CounterOne";
// import CallToActionFour from "../../components/call-to-action/CallToActionFour";
// import Footer from "../../components/footer/Footer";
// import CopyRight from "../../components/footer/CopyRight";
// import FormEvent from '../Forms/FormEvent.js'
import imggg from '../../assets/images/assets/New_rfq-02_.jpg'
// import imggg from '../../assets/images/assets/feature-img-01.png'
import imggg1 from '../../assets/images/assets/Reverse_Auctionn.png'
// import imggg1 from '../../assets/images/assets/feature-img-01-01.png'
import imggg2 from '../../assets/images/assets/Quick_Auction.png'
// import imggg2 from '../../assets/images/assets/feature-img-05.png'
import imggg3 from '../../assets/images/assets/Reverse_Auction_02.png'
import imggg4 from '../../assets/images/assets/Monitor_Analyze.png'
import imggg5 from '../../assets/images/assets/Reports_.png'
import rfq_banner from '../../assets/images/assets/RFQ_BANNER-01-01.png'
import mov_icon_1 from '../../assets/images/assets/Auction-09.png'
import mov_compare_1 from '../../assets/images/assets/Compare-09.png'
import mov_hand_1 from '../../assets/images/assets/funnel-09.png'
import mov_logi_1 from '../../assets/images/assets/logistics-09.png'
import mov_proc_1 from '../../assets/images/assets/Procurement-09.png'
import bgimg from '../../assets/images/shape/1.svg'
import dotshape from '../../assets/images/shape/2.svg'
import _3_min_setup from '../../assets/images/icon/3mins_setup.svg'
import _10mins_setup from '../../assets/images/icon/10mins_setup.svg'
import Reverse_Auction from '../../assets/images/icon/Reverse_Auction.svg'
import report_icon from '../../assets/images/icon/reports.svg'
import great_underline from '../../assets/images/shape/line-shape-1.svg'
import create_icon from '../../assets/images/icon/03.svg'
import quick_auction from '../../assets/images/icon/quick_auction.svg'
import analysee_icon from '../../assets/images/icon/01.svg'
import report_icon_ from '../../assets/images/icon/02.svg'
// import onee from '../../assets/images/shape/ils-01.1.png'
// import twoo from '../../assets/images/shape/ils-01.1.png'
// import great_underline from '../../assets/images/shape/ils-01.1.png'
import key_cap_icon from '../../assets/images/shape/194.svg'
import down_arrow from '../../assets/images/shape/200.svg'
import mov_icon_one from '../../assets/images/shape/195.svg'
import mov_icon_two from '../../assets/images/shape/196.svg'
import mov_icon_three from '../../assets/images/shape/197.svg'
import mov_icon_four from '../../assets/images/shape/198.svg'
import mov_icon_five from '../../assets/images/shape/199.svg'
import real_time_icon from '../../assets/images/icon/124.svg'
import single_integrated_icon from '../../assets/images/icon/125.svg'
import reports_icon from '../../assets/images/icon/126.svg'
import total_icon from '../../assets/images/icon/127.svg'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from "react-accessible-accordion";

  import { PopupButton, CalendlyEventListener } from "react-calendly";
  import { Modal, Button } from "react-bootstrap";
  
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import emailjs from '@emailjs/browser';




  
  const FaqContent = [
    {
      title: "How to see a Demo of the tool?",
      desc: `we would be happy to demonstrate EffyBuy through a web-conference at your convenience. The demo is a one hour session. To schedule your personal session, please contact sales@bizgam.com.`,
      expand: "a",
    },
    {
      title: "What are the type of Payments accepted?",
      desc: `We accept payment via Visa, MasterCard, American Express and PayPal. We also accept payment via bank transfer or check transfer for yearly subscriptions. For more details, please contact sales@bizgam.com.`,
      expand: "b",
    },
    {
      title: "Are we bound to Contracts?",
      desc: `You are not bound by any contracts or commitments. EffyBuy is a pay-as-you-go service (monthly or yearly), so you can make changes to your plan as and when required.`,
      expand: "c",
    },
    {
      title: "Can we switch Plans?",
      desc: `Of course you can! Log in to bizgam, click the Upgrade link on the Home page, and follow the steps on the Subscription page to switch to a new plan.`,
      expand: "d",
    },
    {
      title: "Is my data secure?",
      desc: `We’re fervent about keeping your data safe and secure. Our facilities feature stringent 24/7/365 security with video monitoring, biometric access, and advanced fire, flood, and theft monitoring systems. Our network security system employs the latest encryption and intrusion detection and prevention technologies.`,
      expand: "e",
    },
    {
      title: "Do you have Queries?",
      desc: `You can connect with us instantly through live chat (24x5) or by writing to us at sales@bizgam.com.`,
      expand: "f",
    },
  ];
  // export default class Rfq extends Component {
  //   render(){

  //   }
  // }

  const FeatureContent = [
    {
      icon: _3_min_setup,
      title: "3 Mins setup",
      subTitle: `Online video meetings image Online Video Meetings SimplyBook`,
      bgColor: "#FF4A8B",
    },
    {
      icon: _10mins_setup,
      title: "10 Mins go live",
      subTitle: `Add video meeting links to your appointments with the Zoom Ror Teleport integrations.`,
      bgColor: "#6D49FF",
    },
    {
      icon: Reverse_Auction,
      title: "Reverse Auctions",
      subTitle: `Customize your virtual office with personalized page URLs, logos, colors and more.`,
      bgColor: "#FFB951",
    },
    {
      icon: report_icon,
      title: "Automated Analytic reports",
      subTitle: `Customize your virtual office with personalized page URLs, logos, colors and more.`,
      bgColor: "#fd6a5e",
    },
  ];

export default class ReverseAuction extends Component {
  state={
    show1:false,
    show2:false,
    success:false,
    email:"",
    name: "",
    number1:"",
    number2:"",
    number3:"",
}

  componentDidMount(){
      window.scrollTo(0, 0)
      document.title="Reverse Auction"
  }

  handleSubmit = (event,url) => {
    event.preventDefault();
    var callback = function () {
      if (typeof(url) != 'undefined') {
        // window.location = url;
      }
    };
    window.lintrk('track', { conversion_id: 7514444 });
    window.gtag('event', 'conversion', {
        'send_to': 'AW-304854293/KcwlCLPJ4akDEJXqrpEB',
        'event_callback': callback
    });
    return false;
  };

  handleSubmitPopup = (e) => {
    e.preventDefault();
        emailjs.sendForm('service_h28clne', 'template_vrxq1v7', e.target, '_SkP_OebRj5Q-nHBw')
        this.setState({
          show1:false,
          show2:false,
          success:false,
        })
        alert(`we will get back to you soon`)
  };

  infoChange(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}

  handleShow1 = () => {
    this.setState({
        show1:true
    })
};
handleClose1 = () => {
    this.setState({
        show1:false
    })
};

  handleShow2 = () => {
    this.setState({
        show2:true
    })
};
handleClose2 = () => {
    this.setState({
        show2:false
    })
};

  render(){
  return (<>
<div className="main-page-wrapper">
<div className="hero-banner-two">
<div className="container">
        <div className="row align-items-start justify-content-between">
          <div className="col-lg-7 order-lg-last">
            <div className="illustration-holder">
              <img
                src={imggg1}
                alt="shape"
                className="illustration_01"
                onClick={this.handleShow1}
              />
              
              {/* <img
                src="images/assets/ils-01.1.png"
                alt="shape"
                className="shapes shape-one"
              />
              <img
                src="images/assets/ils-01.2.png"
                alt="shape"
                className="shapes shape-two"
              />
              <img
                src="images/assets/ils-01.3.png"
                alt="shape"
                className="shapes shape-three"
              /> */}
              <Modal
                  show={this.state.show1}
                  onHide={this.handleClose1}
                  backdrop="static"
                  keyboard={false}
              >
                  <Modal.Header closeButton style={{"backgroundColor":"#ffeaa0","borderBottom":"0px"}}>
                  <Modal.Title style={{"color":"black"}}>EffyBuy</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="vvvs" style={{"color":"black"}}>
                      <div className="demo_case_study_modal_form">
                              <div style={{"display":"flex", "justifyContent":"space-evenly", "flexWrap":"wrap"}}>
                              <div className="form-group">
                                  <button type="submit" className="download_popup_button" style={{"width":"120px"}} ><a href="https://calendly.com/bizgamsupport/effybuy" target='_blank'  rel="noreferrer">Set Up Demo</a></button>
                              </div>
                              <div className="form-group">
                                  <button type="submit" className="download_popup_button" style={{"width":"80px"}} ><a href="https://www.effybuy.com/bizgam20/apps/baf.php/B_OS_BAF_USER_REGISTER/EDIT" target='_blank'  rel="noreferrer">Sign Up</a></button>
                              </div>
                              <div className="form-group">
                                  <button type="submit" className="download_popup_button" style={{"width":"100px"}} onClick={this.handleShow2}>Call Back</button>
                              </div>
                              
                              </div>
                          {/* </form> */}
                      </div>
                  </Modal.Body>
              </Modal>

              <Modal
                  show={this.state.show2}
                  onHide={this.handleClose2}
                  backdrop="static"
                  keyboard={false}
              >
                  <Modal.Header closeButton style={{"backgroundColor":"#ffeaa0","borderBottom":"0px"}}>
                  <Modal.Title style={{"color":"black"}}>EffyBuy</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="vvvs" style={{"color":"black"}}>
                     
                      <div className="demo_case_study_modal_form">
                          <form data-toggle="validator" onSubmit={(e)=>{this.handleSubmitPopup(e)}}>
                              <div className="form-group">
                                  <input type="text" data-minlength="4" className="form-control" id="inputName"
                                      data-error="Please enter atleast 4 words" placeholder="Name"
                                      required name="name" value={this.state.name} onChange={(e)=>{this.infoChange(e)}}/>
                                  <div className="help-block with-errors"></div>
                              </div>
                              <div className="form-group mt-3">
                                  <input type="email" className="form-control" id="inputEmail" data-error="Please enter correct email address" 
                                      pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email"
                                        required name="email" value={this.state.email} onChange={(e)=>{this.infoChange(e)}}/>
                                  <div className="help-block with-errors"></div>
                              </div>
                              <div className="form-group mt-3" style={{"display":"none"}}>
                                  <input type="text" value="Call back request" 
                                        required name="subject"/>
                                  <div className="help-block with-errors"></div>
                              </div>
                              <div className="form-group mt-3" style={{"display":"none"}}>
                                  <input type="text" value="nmx1enffx_ykm5qi61@parser.zohocrm.in" 
                                        required name="email_cc"/>
                                  <div className="help-block with-errors"></div>
                              </div>
                              {/* <div className="form-group mt-3">
                                  <input type="number" className="form-control" id="inputNumber" data-error="Please enter your mobile number" 
                                       placeholder="Mobile number"
                                        required name="number1" value={this.state.number1} onChange={(e)=>{this.infoChange(e)}}/>
                                  <div className="help-block with-errors"></div>
                              </div> */}

                              {/* <div className="form-group mt-3"> */}
                              <PhoneInput
                              
                              inputProps={{
                                name: 'phone',
                                required: true,
                              }}
                              inputStyle={{
                                width:'100%',
                                height:'38px'
                              }}
                                country={'in'}
                                value={this.state.number2}
                                required
                                onChange={number2 => this.setState({ number2 })}
                              />
                                  {/* <input type="number" className="form-control" id="inputNumber" data-error="Please enter your mobile number" 
                                       placeholder="Mobile number"
                                        required name="number" value={this.state.number} onChange={(e)=>{this.infoChange(e)}}/>
                                  <div className="help-block with-errors"></div> */}
                              {/* </div> */}

                              <div className="form-group mt-3">
                                  <input type="text" className="form-control" id="inputCompanyName" data-error="Please enter company name" 
                                      placeholder="Company Name" required name="companyName"/>
                                  <div className="help-block with-errors"></div>
                              </div>
                              <br/>

                              <div className="form-group">
                                  <button type="submit" className="download_popup_button">Request a Callback</button>
                              </div>
                          </form>
                      </div>
                  </Modal.Body>
              </Modal>

            </div>
          </div>

          <div className="col-xl-5 col-lg-6 order-lg-first">
            <div className="hero-text-wrapper md-mt-50">
              <h1>
              
                <span>
                A Prominent 
                  <img
                    src={great_underline}
                    alt="shape1"
                    className="cs-screen"
                  />
                </span>
                Reverse Auction process for your Strategic Sourcing.

              </h1>
              <p className="sub-text">
                Effybuy saves your valuable time & gets you better price with 
                ultimate transparency in your procurement process.
              </p>
              <form onClick={(e)=>{this.handleSubmit(e,'https://calendly.com/bizgamsupport/effybuy')}}>
                {/* <input type="email" placeholder="Enter your email" /> */}
                {/* <button>Get Started</button> */}
                <PopupButton
                      url="https://calendly.com/bizgamsupport/effybuy"
                      text="Request Demo"
                      pageSettings={{
                        // backgroundColor: 'ffffff',
                        hideEventTypeDetails: false,
                        hideLandingPageDetails: false,
                        // primaryColor: '008ed9',
                        // textColor: '4d5055',
                      }}
                      styles={{
                        color:"white",
                        // backgroundColor: 'red',
                        border:"none",
                        // fontSize:"25px"
                        }}/>
                        <CalendlyEventListener onEventScheduled={(e)=>{
                    if(e.data.event === "calendly.event_scheduled"){
                      window.open('https://www.effybuy.com/EffyBuy/calendly_conformation');
                    }
                    }}></CalendlyEventListener>
              </form>
              {/* <ul className="list-item d-flex mt-20">
                <li>Live chat</li>
                <li>Ticketing</li>
                <li>14 days free trial</li>
              </ul> */}
            </div>
            {/* /.hero-text-wrapper */}
          </div>
        </div>

        {/* /.row */}

        
      </div>
      </div>

      <div className="row justify-content-center">
        {/* <> */}
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-3 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          key={i}
        >
          <div className="block-style-twentyTwo">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: val.bgColor }}
            >
              <img src={`${val.icon}`} alt="icon" />
            </div>
            <h4>{val.title}</h4>
            {/* <p>{val.subTitle}</p> */}
          </div>
          {/* /.block-style-twentyTwo */}
        </div>
      ))}
    {/* </> */}
          </div>

          <div style={{"textAlign":"center"}}>
            We will handhold your team and make you an expert/practice in<br/>Reverse Auctions at free of cost,
            Anyone can do it !
          </div>

      {/* 
     =============================================
				Fancy Feature One
		============================================== */}
      <div className="fancy-feature-one pb-100 md-pb-80">
        
        {/* /.text-center */}

        {/* 
        =============================================
				Fancy Block Style One
		    ============================================== */}
        <div className="block-style-one" style={{"marginTop":"150px"}}>
        <div className="title-style-one text-center mb-150 md-mb-100">
                <h2>How it works.</h2>
              </div>
          <div className="container">
            <div className="d-lg-flex align-items-center justify-content-between inner-container">
              <div className="block-meta-data text-center">
                <div className="line-dot-containerr">
                  <div className="icon-box">
                    <img src={create_icon} alt="icon" />
                  </div>{" "}
                  {/* /.icon-box */}
                  <p>Quick Create</p>
                </div>
                <div className="hover-content">
                  <span>
                    On One Click, A simple login, add your requirement, supplier list & send RFQs.
                  </span>
                </div>
              </div>{" "}
              {/* /.block-meta-data  */}
              <div className="block-meta-data text-center">
                <div className="line-dot-containerr">
                  <div className="icon-box">
                    <img src={quick_auction} alt="icon" />
                  </div>
                  <p>Monitor</p>
                </div>
                <div className="hover-content">
                  <span>
                  You are one step ahead to create wireframe. Let Automation
                    do it for you. Simplify workflows.
                  </span>
                </div>
              </div>
              {/* /.block-meta-data  */}
              {/* <div className="block-meta-data text-center">
                <div className="line-dot-containerr">
                  <div className="icon-box">
                    <img src={analysee_icon} alt="icon" />
                  </div>
                  <p>Monitor</p>
                </div>
                <div className="hover-content text-center">
                  <span>
                    You are one step ahead to create wireframe. Let Automation
                    do it for you. Simplify workflows.
                  </span>
                </div>
              </div> */}
              {/* /.block-meta-data */}
              <div className="block-meta-data text-center">
                <div className="line-dot-container">
                  <div className="icon-box">
                    <img src={report_icon_} alt="icon" />
                  </div>
                  {/* /.icon-box */}
                  <p>Analyze</p>
                </div>
                <div className="hover-content text-right">
                  <span>
                    Track your purchases history and supplier performances.
                  </span>
                </div>
              </div>
              {/* /.block-meta-data */}
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.block-style-one */}
      </div>
      {/* /.fancy-feature-one */}

      {/* 
     =============================================
				Fancy Feature Two
		============================================== */}
      <div className="fancy-feature-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-9 m-auto">
              <div className="title-style-one text-center mb-150 md-mb-100">
                <h2>Know everything about Reverse Auction.</h2>
              </div>
              {/* /.title-style-one */}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center block-style-two pb-150 md-pb-90">
            
            <div className="col-lg-6 col-md-8 m-auto">
              <div
                className="text-wrapper"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                {/* <h6 className="font-rubik" style={{ color: "#FF5291" }}>
                  COMPARE RFQ
                </h6> */}
                <h3 className="font-gilroy-bold">
                  Quick Auction
                </h3>
                <p>
                  Quick Auction enables the users to create auctions within few minutes of 
                  time with improved efficiency and better prices.
                </p>
                <div className="quote">
                  {/* <blockquote>
                    Helps to improve measurable productivity and financial saving.
                  </blockquote> */}
                  {/* <div className="d-flex align-items-center">
                    <img src="images/media/img_01.png" alt="media1" />
                    <div className="info-meta">
                      <h5>Micle Duke, Product Manager</h5>
                      <span className="font-rubik">Uber Inc.</span>
                    </div>
                  </div> */}
                </div>
                {/* <a href="/#">Learn about flexibility</a> */}
              </div>
              {/*  /.text-wrapper */}
            </div>

            <div className="col-lg-6">
              <div data-aos="fade-left" data-aos-duration="1200">
                <div className="img-holder img-holder-one">
                  <div
                    className="cs-screen progress-line-one"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  ></div>
                  <div
                    className="cs-screen progress-line-two"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                  ></div>
                  <img src={imggg2} alt="feature" />
                  <img
                    src={bgimg}
                    alt="feature"
                    className="cs-screen screen-one"
                  />
                  <img
                    src={dotshape}
                    alt="feature"
                    className="cs-screen dot-shape"
                  />
                  <div className="bubble-one"></div>
                  <div className="bubble-two"></div>
                  <div className="bubble-three"></div>
                  <div className="bubble-four"></div>
                </div>
                {/* /.img-holder */}
              </div>
            </div>
          </div>
          {/* /.block-style-two */}

          <div className="row align-items-center block-style-two pb-150 md-pb-90">

          <div className="col-lg-6 col-md-8 m-auto  ">
              <div
                className="text-wrapper pl-5 pr-5"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                {/* <h6 className="font-rubik" style={{ color: "#AA4CFF" }}>
                  QUICK & FAST
                </h6> */}
                <h3 className="font-gilroy-bold">Create Auction</h3>
                <p>
                    The real benefit that both vendors and companies see, is the reduction in time spent negotiating. 
                    <br/>
                    Reverse Auction helps in reducing the annual cost-of-procurement, narrowing down the true market 
                    value of requested goods and services, and increasing the company’s overall savings  while maintaining an excellent standard of supplier expectations and compliance.

                </p>
                <div className="quote">
                  {/* <blockquote>
                    Save processing time with 80% by online and drive efficiently.  
                  </blockquote> */}
                  {/* <div className="d-flex align-items-center">
                    <img src="images/media/img_01.png" alt="media1" />
                    <div className="info-meta">
                      <h5>Micle Duke, Product Manager</h5>
                      <span className="font-rubik">Uber Inc.</span>
                    </div>
                  </div> */}
                </div>
                {/*  /.quote */}
              </div>
              {/*  /.text-wrapper */}
            </div>

            <div className="col-lg-6 order-lg-first">
              <div data-aos="fade-right" data-aos-duration="1200">
                <div className="img-holder img-holder-two">
                  <img src={imggg3} alt="feature" />
                  {/* <img
                    src="images/assets/feature-img-06-01.png"
                    alt="feature1"
                    className="cs-screen screen-one"
                  /> */}
                  <img
                    src={bgimg}
                    alt="feature2"
                    className="cs-screen screen-two"
                  />
                  <img
                    src={dotshape}
                    alt="feature3"
                    className="cs-screen dot-shape"
                  />
                  <div className="bubble-one"></div>
                  <div className="bubble-two"></div>
                  <div className="bubble-three"></div>
                  <div className="bubble-four"></div>
                </div>
                {/* /.img-holder */}
              </div>
            </div>
            
          </div>
          {/* /.block-style-two */}

          <div className="row align-items-center block-style-two pb-150 md-pb-50">
            
            <div className="col-lg-6">
              <div
                className="text-wrapper"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                {/* <h6 className="font-rubik" style={{ color: "#03DDD5" }}>
                  PROJECT STATUS
                </h6> */}
                <h3 className="font-gilroy-bold">
                  Monitor & Analyze
                </h3>
                <p>
                  Effybuy helps in monitoring the live Auction, Modify the game by changing the Step down price, 
                  extend the bidding time and send live messages  during the Auction.
                  <br/>
                  Automated analysis of the bidding results yields analysis of Spend Information, 
                  Understanding of the Market with Automated Analysis and  gives the analytics into 
                  the Supplier behaviour and help us identify genuine, long-term and sustainable suppliers.
 
                </p>
                <div className="quote">
                  {/* <blockquote>
                    Enable your team to take a smart decision by relaying existing data.
                  </blockquote> */}
                </div>
              </div>
              {/* /.text-wrapper */}
            </div>

            <div className="col-lg-6 col-md-7 m-auto">
              <div data-aos="fade-left" data-aos-duration="1200">
                <div className="img-holder img-holder-two">
                  <img src={imggg4} alt="feature" />
                  {/* <img
                    src="images/assets/feature-img-07-01.png"
                    alt="feature"
                    className="cs-screen screen-one"
                  /> */}
                  <img
                    src={bgimg}
                    alt="feature"
                    className="cs-screen screen-two"
                  />
                  <img
                    src={dotshape}
                    alt="feature"
                    className="cs-screen dot-shape"
                  />
                  <div className="bubble-one"></div>
                  <div className="bubble-two"></div>
                  <div className="bubble-three"></div>
                  <div className="bubble-four"></div>
                </div>
                {/* /.img-holder */}
              </div>
            </div>
          </div>
          {/* /.block-style-two */}

          <div className="row align-items-center block-style-two pb-10 md-pb-90">
            <div className="col-lg-6 col-md-8 m-auto">
              <div data-aos="fade-right" data-aos-duration="1200">
                <div className="img-holder img-holder-one">
                  <div
                    className="cs-screen progress-line-one"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  ></div>
                  <div
                    className="cs-screen progress-line-two"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  ></div>
                  <img src={imggg5} alt="feature" />
                  <img
                    src={bgimg}
                    alt="feature"
                    className="cs-screen screen-one"
                  />
                  <img
                    src={dotshape}
                    alt="feature"
                    className="cs-screen dot-shape"
                  />
                  <div className="bubble-one"></div>
                  <div className="bubble-two"></div>
                  <div className="bubble-three"></div>
                  <div className="bubble-four"></div>
                </div>
                {/* /.img-holder */}
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="text-wrapper"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                {/* <h6 className="font-rubik" style={{ color: "#FF5291" }}>
                  COMPARE RFQ
                </h6> */}
                <h3 className="font-gilroy-bold">
                  Reports
                </h3>
                <p>
                  Effybuy provides Actionable and Analytic Reports which eliminates tedious manual 
                  Documentations and manual errors.
                  <br/>
                  Derives insights that could lead to better decision making across the business, 
                  transforming data into greater process efficiency and more robust financial health.

                </p>
                <div className="quote">
                  {/* <blockquote>
                    Helps to improve measurable productivity and financial saving .
                  </blockquote> */}
                  {/* <div className="d-flex align-items-center">
                    <img src="images/media/img_01.png" alt="media1" />
                    <div className="info-meta">
                      <h5>Micle Duke, Product Manager</h5>
                      <span className="font-rubik">Uber Inc.</span>
                    </div>
                  </div> */}
                </div>
                {/* <a href="/#">Learn about flexibility</a> */}
              </div>
              {/*  /.text-wrapper */}
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-two */}

      {/* 
     =============================================
			Usable Tools Section
		============================================== */}
      {/* <div className="useable-tools-section bg-color mt-140 mb-50 md-mt-80">
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="container">
          <h6 className="font-rubik">Integrates with your tools</h6>
          <h2>
            Deski ties into your existing tools, services, & workflow. Get
            notifications or create a Story with others tools.
          </h2>

          <SocialTwo />
        </div>
      </div> */}
      {/* /.useable-tools-section */}

      {/* 
     =============================================
				Fancy Feature Three
		============================================== */}
      {/* <div className="fancy-feature-three pt-200 md-pt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title-style-one">
                <h6 className="font-rubik">You’re in good company</h6>
                <h2>Join the community by using our apps to grow faster.</h2>
              </div>

              <CounterOne />
            </div>

            <div className="col-lg-6">
              <div className="clients-feedback-classic md-mt-80">
                <div
                  className="feedback-wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="images/media/img_02.png"
                    alt=""
                    className="media-meta"
                  />
                  <p>
                    it’s a great exprience to work with deski. They’r vey humble
                    and expert & the service has been excellent & super.
                  </p>
                  <h6 className="name">Rena Singleton</h6>
                  <span className="font-rubik disg-info">
                    Former Assistant Jamuna Group.
                  </span>
                </div>{" "}
                <div
                  className="feedback-wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="images/media/img_03.png"
                    alt=""
                    className="media-meta"
                  />
                  <p>
                    it’s a great exprience to work with deski. They’r vey humble
                    and expert & the service has been excellent & super.
                  </p>
                  <h6 className="name">Rashed Ka.</h6>
                  <span className="font-rubik disg-info">
                    UI designer Baper Inc.
                  </span>
                </div>{" "}
                <div
                  className="feedback-wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="images/media/img_04.png"
                    alt=""
                    className="media-meta"
                  />
                  <p>
                    it’s a great exprience to work with deski. They’r vey humble
                    and expert & the service has been excellent & super.
                  </p>
                  <h6 className="name">Zubayer Hasan</h6>
                  <span className="font-rubik disg-info">
                    Front-end coder HeloShape.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* /.fancy-feature-three */}

      <div className="fancy-feature-twentyFour pt-140 md-pt-60" id="service">
        <div className="container">
          <div className="title-style-nine text-center">
            {/* <h6>Indutries Include</h6> */}
            <h2>
              <span>
              Key Capabilities <img src={key_cap_icon} alt="shape" />
              </span>
            </h2>
          </div>
        </div>
        <div className="bg-wrapper mt-100 md-mt-80 mb-100">
          <a
            href="#feedback"
            className="click-scroll-button scroll-target d-flex justify-content-center"
          >
            <img src={down_arrow} alt="shape" />
          </a>
          <div className="container">
          <div className="row">
      <div
        className="col-lg-6 d-flex mb-35"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="block-style-twentyFour">
          <div className="d-flex" style={{"alignItems":"center"}}>
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: "#3FE193" }}
            >
              <img src={real_time_icon} alt="icon" />
            </div>
            <div className="text">
              
              <h4>Increase purchasing control and improve sustainability</h4>
              {/* <p>
                Personal trainers, Gyms Fitness classes, Yoga classes Golf
                classes, Sport items renting
              </p> */}
            </div>
          </div>
        </div>
        {/* /.block-style-twentyFour */}
      </div>
      {/* End .col */}

      <div
        className="col-lg-6 d-flex mb-35"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <div className="block-style-twentyFour">
          <div className="d-flex" style={{"alignItems":"center"}}>
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: "#FF4F86" }}
            >
              <img src={single_integrated_icon} alt="icon" />
            </div>
            <div className="text">
            <h4>Empower your purchase team with automated negotiation tool</h4>
              {/* <p>
                Eyelash extensions , Hair salons, Spa salons Beauty salons, Nail
                salons
              </p> */}
            </div>
          </div>
        </div>{" "}
        {/* /.block-style-twentyFour */}
      </div>
      {/* End .col */}

      <div
        className="col-lg-6 d-flex mb-35"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="block-style-twentyFour">
          <div className="d-flex" style={{"alignItems":"center"}}>
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: "#FFCF39" }}
            >
              <img src={reports_icon} alt="icon" />
            </div>
            <div className="text">
              <h4>Reduce purchase cost and growth in overall profitability</h4>
              {/* <p>
                Art classes, Escape rooms Photographers, Equipment Rental &
                more.
              </p> */}
            </div>
          </div>
        </div>{" "}
        {/* /.block-style-twentyFour */}
      </div>
      {/* End .col */}

      <div
        className="col-lg-6 d-flex mb-35"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <div className="block-style-twentyFour">
          <div className="d-flex" style={{"alignItems":"center"}}>
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: "#6D64FF" }}
            >
              <img src={total_icon} alt="icon" />
            </div>
            <div className="text">
              <h4>Make Life Easy for your suppliers, save time and get digital quotes</h4>
              {/* <p>
                Embassies and consulates, City councils, Call centers Financial
                services, Interview scheduling.
              </p> */}
            </div>
          </div>
        </div>{" "}
      </div>
      {/* End .col */}

      {/* <div
        className="col-lg-6 d-flex mb-35"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="block-style-twentyFour">
          <div className="d-flex align-items-start">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: "#E752FF" }}
            >
              <img src="images/icon/128.svg" alt="icon" />
            </div>
            <div className="text">
              <h4>Reports and analytics for improving the efficiency </h4>
              <p>
                Counselling ,Coaching, Business, Advisory, Spiritual services &
                more.
              </p>
            </div>
          </div>
        </div>{" "}
      </div> */}
      {/* End .col */}

      {/* <div
        className="col-lg-6 d-flex mb-35"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <div className="block-style-twentyFour">
          <div className="d-flex align-items-start">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: "#29EEFB" }}
            >
              <img src="images/icon/129.svg" alt="icon" />
            </div>
            <div className="text">
              <h4>Driving Lessons</h4>
              <p>Driving Schools, Driving Instructors.</p>
            </div>
          </div>
        </div>{" "}
      </div> */}
      {/* End .col */}

      {/* <div
        className="col-lg-6 d-flex mb-35"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="block-style-twentyFour">
          <div className="d-flex align-items-start">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: "#32B5FF" }}
            >
              <img src="images/icon/130.svg" alt="icon" />
            </div>
            <div className="text">
              <h4>Education System</h4>
              <p>
                Universities, Colleges, Schools, Libraries, Parent meetings,
                Tutoring lessons.
              </p>
            </div>
          </div>
        </div>{" "}
      </div> */}
      {/* End .col */}

      {/* <div
        className="col-lg-6 d-flex mb-35"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <div className="block-style-twentyFour">
          <div className="d-flex align-items-start">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: "#FFA361" }}
            >
              <img src="images/icon/131.svg" alt="icon" />
            </div>
            <div className="text">
              <h4>Medical services</h4>
              <p>
                Massage & Body Treatments, Dental Clinics, Medical Clinics &
                more.
              </p>
            </div>
          </div>
        </div>{" "}
      </div> */}
      {/* End .col */}
    </div>
          </div>
          <img
            src={mov_icon_one}
            alt="shape"
            className="shapes shape-one"
          />
          <img
            src={mov_icon_two}
            alt="shapee"
            className="shapes shape-two"
          />
          <img
            src={mov_icon_three}
            alt="shapeee"
            className="shapes shape-three"
          />
          <img
            src={mov_icon_four}
            alt="shapeeee"
            className="shapes shape-four"
          />
          <img
            src={mov_icon_five}
            alt="shapeeeee"
            className="shapes shape-five"
          />
        </div>
        {/* /.bg-wrapper */}
      </div>

      {/* 
     =============================================
			Call To Action
		============================================== */}
      <div className="fancy-short-banner-one">
        <div className="container">
        <div className="row align-items-center">
      <div className="col-lg-12">
        <div className="title-style-one" style={{"textAlign":"center"}}>
          {/* <h6 className="font-rubik" style={{ color: "#787CFF" }}>
            Start your free trial.
          </h6> */}
          <h2>100+ Customer are buying <br/>efficiently using EffyBuy !</h2>
          <br/>
          <h4>Try Now - One month free trial.</h4>
          <div onClick={(e)=>{this.handleSubmit(e,"https://calendly.com/bizgamsupport/effybuy")}}>

          <PopupButton
                      url="https://calendly.com/bizgamsupport/effybuy"
                      text="Request Demo"
                      pageSettings={{
                        // backgroundColor: 'ffffff',
                        hideEventTypeDetails: false,
                        hideLandingPageDetails: false,
                        // primaryColor: '008ed9',
                        // textColor: '4d5055',
                      }}
                      styles={{
                        color:"white",
                        // backgroundColor: 'red',
                        border:"none",
                        // fontSize:"25px"
                        }}/>
          </div>
        </div>
        {/* /.title-style-one */}
      </div>
      {/* <div className="col-lg-6">
        <div className="form-wrapper">
          <FormEvent />
          <p className="font-rubik">
            Already a member? <Link to="login">Sign in.</Link>
          </p>
        </div>
      </div> */}
    </div>
        </div>
        {/* /.container */}
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="bubble-six"></div>
      </div>
      {/* /.fancy-short-banner-one */}

      {/* 
     =============================================
				Faq Classic
		============================================== */}
      {/* <div className="faq-classic pt-225 md-pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title-style-one">
                <h6 className="font-rubik">Find your answers</h6>
                <h2>Have any thought? Look here.</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="md-mt-60">
              <div className="accordion-style-four">
      <div className="faq-wrraper">
        <Accordion preExpanded={["b"]} allowZeroExpanded>
          {FaqContent.map((item, i) => (
            <AccordionItem className="card" key={i} uuid={item.expand}>
              <AccordionItemHeading className="card-header">
                <AccordionItemButton>
                  <h5 className="mb-0">
                    <button className="btn btn-link">{item.title}</button>{" "}
                  </h5>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="card-body fadeInUp">
                <p>{item.desc}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* /.faq-classic */}

      {/* 
      =============================================
				Footer
		  ============================================== */}
      <div className="footer-bg-wrapper">
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="fancy-short-banner-two">
          <div className="container">
            <div className="content-wrapper">
              <div
                className="
                  bg-wrapper
                  d-lg-flex
                  align-items-center
                  justify-content-between
                "
              >
                <h2 className="font-gilroy-bold">
                  You’re one step closer to Efficient Buying !
                </h2>
                <a href="https://www.effybuy.com/bizgam20/apps/baf.php/B_OS_BAF_USER_REGISTER/EDIT" className="signUp-action">
                  Start your free trial
                </a>
                <div className="bubble-one"></div>
                <div className="bubble-two"></div>
                <div className="bubble-three"></div>
                <div className="bubble-four"></div>
                <div className="bubble-five"></div>
              </div>
            </div>
          </div>
        </div>

        {/* <footer className="theme-footer-one pt-130 md-pt-70">
          <div className="top-footer">
            <div className="container">
              <Footer />
            </div>
          </div>

          <div className="container">
            <div className="bottom-footer-content">
              <CopyRight />
            </div>
          </div>
        </footer> */}
      </div>
    </div>
    </>
  );
};
};

// export default ProjectManagement;
