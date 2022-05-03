import React,{ Component } from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from '../useDocumentTitle.js';
// import Header from "../../components/header/Header";
// import FaqClassic from "../../components/faq/FaqClassicTwo";
// import SocialTwo from "../../components/social/SocialTwo";
// import CounterOne from "../../components/counter/CounterOne";
// import CallToActionFour from "../../components/call-to-action/CallToActionFour";
// import Footer from "../../components/footer/Footer";
// import CopyRight from "../../components/footer/CopyRight";
import FormEvent from '../Forms/FormEvent.js'
import imggg from '../../assets/images/assets/RFQ_Screen.png'
// import imggg from '../../assets/images/assets/feature-img-01.png'
import imggg1 from '../../assets/images/assets/funnel.png'
// import imggg1 from '../../assets/images/assets/feature-img-01-01.png'
import imggg2 from '../../assets/images/assets/funnel-08_.png'
// import imggg2 from '../../assets/images/assets/feature-img-05.png'
import imggg3 from '../../assets/images/assets/feature-img-06.png'
import imggg4 from '../../assets/images/assets/feature-img-07.png'
import imggg5 from '../../assets/images/assets/effybuy vs erp-06.png'
import rfq_banner from '../../assets/images/assets/RFQ_BANNER-01-01.png'
import mov_icon_1 from '../../assets/images/assets/Auction-09.png'
import mov_compare_1 from '../../assets/images/assets/Compare-09.png'
import mov_hand_1 from '../../assets/images/assets/funnel-09.png'
import mov_logi_1 from '../../assets/images/assets/logistics-09.png'
import mov_proc_1 from '../../assets/images/assets/Procurement-09.png'
import RFQ_Report_Screen from '../../assets/images/assets/RFQ_Report_Screen.png'
import bgimg from '../../assets/images/shape/1.svg'
import dotshape from '../../assets/images/shape/2.svg'
import create_icon from '../../assets/images/icon/03.svg'
import compare_icon from '../../assets/images/icon/04.svg'
import analysee_icon from '../../assets/images/icon/01.svg'
import report_icon from '../../assets/images/icon/02.svg'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from "react-accessible-accordion";

  import { PopupButton, CalendlyEventListener } from "react-calendly";


  
  const FaqContent = [
    {
      title: "Do i need to upload my supplier contact?",
      desc: `Yes, only you can upload your preferred supplier and their contact for further communication. We will guide you on the on-boarding process.`,
      expand: "a",
    },
    {
      title: "Is my supplier required to register on effybuy?",
      desc: `No Registration Required For Suppliers. Effybuy automatically send a link via email with auto-generate password. Supplier can login and submit their quotation. `,
      expand: "b",
    },
    {
      title: "Can I track my supplier track record of quotation?",
      desc: `Yes, we provide various function to track through item wise, RFQ wise, supplier wise reports, etc.`,
      expand: "c",
    },
    {
      title: "Do you charge for my supplier to access effybuy?",
      desc: `No, It’s completely free for your suppliers to use.`,
      expand: "d",
    },
    {
      title: "Is my Data Safe?",
      desc: `Effybuy hosted on Tier IV SSAE 16 Type II Data Centre, highest security and privacy for your datas.`,
      expand: "e",
    },
  ];
  // export default class Rfq extends Component {
  //   render(){

  //   }
  // }

export default class Rfq extends Component {
  componentDidMount(){
      window.scrollTo(0, 0)
      document.title="RFQ"
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

  render(){
  return (
    <div className="main-page-wrapper">
      {/* <Header /> */}
      {/* End Header */}

      {/* 
     =============================================
			Hero Banner One
		============================================== */}
      <div className="hero-banner-one">
        <div className="hero-upper-container">
          <div className="icon-box-one">
            <img src={mov_hand_1} alt="logo" />
          </div>
          <div className="icon-box-two">
            <img src={mov_icon_1}alt="logo" />
          </div>
          {/* <div className="icon-box-three">
            <img src={mov_compare_1} alt="logo" />
          </div> */}
          <div className="icon-box-four">
            <img src={mov_compare_1} alt="logo" />
          </div>
          {/* <div className="icon-box-five">
            <img src={mov_hand_1}alt="logo" />
          </div> */}
          <div className="icon-box-six">
            <img src={mov_hand_1} alt="logo" />
          </div>
          <div className="icon-box-seven">
            <img src={mov_logi_1} alt="logo" />
          </div>
          <div className="icon-box-eight">
            <img src={mov_proc_1} alt="logo" />
          </div>

          <div className="bubble-one"></div>
          <div className="bubble-two"></div>
          <div className="bubble-three"></div>
          <div className="bubble-four"></div>
          <div className="bubble-five"></div>
          <div className="bubble-six"></div>
          {/* End all bubble images */}

          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-10 m-auto">
                <img src={rfq_banner} alt="rfq_banner">
                </img>
                {/* <h1 className="font-rubik hero-heading">
                  EFFYBUY <span>RFQ's</span>
                </h1> */}
                <p className="hero-sub-heading">
                    {/* Automate your RFQ’s process &<br/>
                    cut off your quotes cycles and save massively */}
                </p>
              </div>
              {/* End .col */}
            </div>
            {/* End row */}

            <form
              action="#"
              className="subscription-form"
              onClick={(e)=>{this.handleSubmit(e,"https://calendly.com/bizgamsupport/effybuy")}}
            >
              {/* <input type="email" placeholder="Your business email" />
              <PopupButton
                      url="https://calendly.com/bizgamsupport/effybuy"
                      text="Request Demo"
                      pageSettings={{
                        hideEventTypeDetails: false,
                        hideLandingPageDetails: false,
                      }}
                      styles={{
                        color:"white",
                        border:"none",
                        }}/> */}
            </form>
            {/* End form */}

            {/* <p className="sing-in-call">
              Already using EFFYBUY? <Link to="#">Sign in.</Link>
            </p> */}
          </div>
          {/* End .container */}
        </div>
        {/* /.hero-upper-container */}
      </div>

      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" >
        <div class="carousel-inner text-center">
            <div className="carousel-item active" style={{"paddingBottom":"40px"}}>
                  <div style={{"display":"inline-block","position":"relative","zIndex":"5","width":"80%"}}>
                  <img src={imggg} alt="feature" />
                  <img
                    src={imggg1}
                    alt="feature1"
                    style={{"width":"30%","right":"2%","bottom":"-10%","zIndex":"1","animation":"jumpTwo 3s infinite linear","position":"absolute"}}
                  />
                </div>
                  </div>
          <div class="carousel-item text-center" style={{"paddingBottom":"40px"}}>
            <div style={{"display":"inline-block","position":"relative","zIndex":"5","width":"80%"}}>
            <img class="" src={RFQ_Report_Screen} alt="Second slide" style={{"margin":"0 auto"}}/>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <i class="fas fa-arrow-left" aria-hidden="true" style={{"color":"#999"}}></i>
          <span class="sr-only">Previous</span>
        </a>
        
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <i class="fas fa-arrow-right" aria-hidden="true" style={{"color":"#999"}}></i>
          <span class="sr-only">Next</span>
        </a>
      </div>
      {/* /.hero-banner-one */}

      {/* 
     =============================================
				Fancy Feature One
		============================================== */}
      <div className="fancy-feature-one pb-100 md-pb-80">
        {/* <div className="text-center">
          <div className="feature-img-area">
            <img src={imggg} alt="feature" />
            <img
              src={imggg1}
              alt="feature1"
              className="cs-screen screen-one"
            />
          </div>

        </div> */}
        {/* /.text-center */}

        {/* 
        =============================================
				Fancy Block Style One
		    ============================================== */}
        <div className="block-style-one" style={{"marginTop":"100px"}}>
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
                  <p>Create</p>
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
                    <img src={compare_icon} alt="icon" />
                  </div>
                  {/* /.icon-box */}
                  <p>Compare</p>
                </div>
                <div className="hover-content">
                  <span>
                    Easy to organize, compare, analyze your quotations and get best price.
                  </span>
                </div>
              </div>
              {/* /.block-meta-data  */}
              {/* <div className="block-meta-data text-center">
                <div className="line-dot-container">
                  <div className="icon-box">
                    <img src={analysee_icon} alt="icon" />
                  </div>
                  <p>Analyze</p>
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
                <div className="line-dot-containerr">
                  <div className="icon-box">
                    <img src={report_icon} alt="icon" />
                  </div>
                  {/* /.icon-box */}
                  <p>Report</p>
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
                <h2>Know everything about RFQ’s.</h2>
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
                  Compare RFQ's
                </h3>
                <p>
                    Fully transparent and efficient process that automate 
                    your rfqs, compare and analyze quotations for you.
                </p>
                <div className="quote">
                  <blockquote>
                    Helps to improve measurable productivity and financial saving.
                  </blockquote>
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
                <h3 className="font-gilroy-bold">Fast Response Auto Data Compilation</h3>
                <p>
                    {/* Effybuy automatically generate mails notification to your suppliers 
                    and it's easy to response & collaborated with you using effybuy. */}
                    Effybuy automatically generates Mail Notification to your Vendors where they can 
                    sign in and bid for multiple quotations without hassle. 
                    There's no subscription required for the vendors to submit their Quotes.
                </p>
                <div className="quote">
                  <blockquote>
                    Save processing time with 80% by online and drive efficiently.  
                  </blockquote>
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
                  Tracking
                </h3>
                <p>
                  Effy buy gives your real time visibility in supplier response 
                  You can track the pricing trends and performance. 
                </p>
                <div className="quote">
                  <blockquote>
                    Enable your team to take a smart decision by relaying existing data.
                  </blockquote>
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

          <div className="row align-items-center block-style-two pb-150 md-pb-90">
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
                  Integrate EFFYBUY with your ERP system for increased efficiency
                </h3>
                {/* <p>
                    Fully transparent and efficient process that automate 
                    your rfqs, compare and analyze quotations for you.
                </p> */}
                {/* <div className="quote">
                  <blockquote>
                    Helps to improve measurable productivity and financial saving .
                  </blockquote>
                  <div className="d-flex align-items-center">
                    <img src="images/media/img_01.png" alt="media1" />
                    <div className="info-meta">
                      <h5>Micle Duke, Product Manager</h5>
                      <span className="font-rubik">Uber Inc.</span>
                    </div>
                  </div>
                </div> */}
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
                        <CalendlyEventListener onEventScheduled={(e)=>{
                    if(e.data.event === "calendly.event_scheduled"){
                      window.open('https://www.effybuy.com/EffyBuy/calendly_conformation');
                    }
                    }}></CalendlyEventListener>
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
      <div className="faq-classic pt-225 md-pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title-style-one">
                <h6 className="font-rubik">Find your answers</h6>
                <h2>Have any thought? Look here.</h2>
              </div>
              {/* /.title-style-one */}
              {/* <Link to="#" className="theme-btn-one mt-50 md-mt-30">
                {" "}
                Go to Faq
              </Link> */}
            </div>
            {/* End .col */}
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
              {/* Accordion Heading */}
              <AccordionItemPanel className="card-body fadeInUp">
                <p>{item.desc}</p>
              </AccordionItemPanel>
              {/* Accordion Body Content */}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </div>
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
                  You’re one step closer to smart work !
                </h2>
                <a href="https://www.effybuy.com/bizgam20/apps/baf.php/B_OS_BAF_USER_REGISTER/EDIT" className="signUp-action">
                  Start your free trial
                </a>
                {/* <Link to="#"> Start your free trial</Link> */}
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
  );
};
};

// export default ProjectManagement;
