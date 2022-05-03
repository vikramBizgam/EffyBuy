import React from 'react'
import { Link } from "react-router-dom";
import { PopupButton, CalendlyEventListener} from 'react-calendly'
import img1 from '../../assets/images/shape/29.svg'
import img2 from '../../assets/images/shape/30.svg'
import img3 from '../../assets/images/shape/31.svg'
import img4 from '../../assets/images/shape/32.svg'
import img5 from '../../assets/images/shape/33.svg'
// import img6 from '../../assets/images/shape/34.svg'
// import img7 from '../../assets/images/media/img_19.png'
import icon1 from '../../assets/images/icon/26.svg'
import second_pannel_nn from '../../assets/Gifs/Gif-Animation.gif'


export default class SecondPannel extends React.Component {
  gtag_report_conversion(url) {
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
}
  render(){
    return (
        <div className="fancy-text-block-seven mt-150 md-mt-100">
        <div className="bg-wrapper">
          <img
            src={img1}
            alt="shape"
            className="shapes shape-one"
          />
          <img
            src={img2}
            alt="shape"
            className="shapes shape-two"
          />
          <img
            src={img3}
            alt="shape"
            className="shapes shape-three"
          />
          <img
            src={img4}
            alt="shape"
            className="shapes shape-four"
          />
          <img
            src={img5}
            alt="shape"
            className="shapes shape-five"
          />
          <div className="container" style={{"overflow":"hidden"}}>
            <div className="row">
              <div
                className="col-lg-8 col-md-6 col-sm-9 m-auto"
                data-aos="fade-right"
                data-aos-duration="1200"
                id = "custom_gif_div"
              >
                <div className="img-holder">
                  <img src={second_pannel_nn} alt="media" id="custom_gif" />
                  {/* <video Controls Autoplay="autoplay">
                    <source src={second_pannel_MOV} type="video/mov"/>
                  </video> */}
                  {/* <embed src={second_pannel_MOV} CONTROLLER="true" LOOP="false" AUTOPLAY="true" name="IBM Video"></embed> */}

                  {/* <img
                    src={img6}
                    alt="shape"
                    className="shapes shape-six"
                  /> */}
                </div>
                {/* img-holder */}
              </div>
              {/* End .col */}

              <div
                className="col-xl-4 col-lg-6 ml-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="quote-wrapper pt-60">
                  <img src={icon1} alt="icon" className="icon" />
                  <blockquote className="font-rubik">
                    We bridge the missing pieces in your supply chain.

                  </blockquote>
                  {/* <h6>
                    Bostami Hasan <span>CEO & Founder deksi</span>
                  </h6> */}
                  <Link to="/#" className="theme-btn-two mt-45 md-mt-30" onClick={()=>this.gtag_report_conversion('https://calendly.com/bizgamsupport/effybuy')}>
                    {" "}
                    <PopupButton
                              // url="https://calendly.com/bizgam/effybuy"
                              url="https://calendly.com/bizgamsupport/effybuy"
                              text="Request Demo"
                              pageSettings={{
                                // backgroundColor: 'ffffff',
                                hideEventTypeDetails: false,
                                hideLandingPageDetails: false,
                                // primaryColor: '008ed9',
                                // textColor: '4d5055',
                                // border:"20px"
                              }}
                              styles={{
                                color:"white",
                                // backgroundColor: 'red',
                                // border:"none",
                                fontSize:"25px",
                                padding:"0 42px"
                                }}/>
                  </Link>
                  <CalendlyEventListener onEventScheduled={(e)=>{
                    if(e.data.event === "calendly.event_scheduled"){
                      window.open('https://www.effybuy.com/EffyBuy/calendly_conformation');
                    }
                    }}></CalendlyEventListener>
                  
                </div>
                {/* /.quote-wrapper */}
              </div>
              {/* End .col */}
            </div>
          </div>
        </div>
        </div>
    )
                  }
}
