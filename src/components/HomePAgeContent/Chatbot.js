import React, { Component } from 'react'
import './chatbot.css'
// import { Modal, Button } from "react-bootstrap";
import { PopupWidget,CalendlyEventListener } from "react-calendly";
import Fab from '@material-ui/core/Fab';
import WhatsApp from '@material-ui/icons/WhatsApp';
import {Helmet} from "react-helmet";

export default class Chatbot extends Component {
    // state={
    //     isOpen:false
    // }

    componentDidMount() {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
        head.appendChild(script);
    }
    

    // openModal = () => this.setState({ isOpen: true });
    //   closeModal = () => this.setState({ isOpen: false }

        gtag_report_conversion(url) {
            // alert('working')
          var callback = function () {
            if (typeof(url) != 'undefined') {
              window.location = url;
            }
          };
          window.lintrk('track', { conversion_id: 7514476 });
          window.gtag('event', 'conversion', {
              'send_to': 'AW-304854293/CvLuCK2fjKQDEJXqrpEB',
              'event_callback': callback
          });
          return false;
        }

        gtag_report_conversion2(url) {
            var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              window.lintrk('track', { conversion_id: 7514444 });
              window.gtag('event', 'conversion', {
                  'send_to': 'AW-304854293/KcwlCLPJ4akDEJXqrpEB',
                  'event_callback': callback
              });
              return false;
        }
           
    render() {
        return (
            <div>
                <Helmet>
                    <script type="text/javascript">
                        {`function gtag_report_conversion(url) {
                        var callback = function () {
                            if (typeof(url) != 'undefined') {
                            window.location = url;
                            }
                        };
                        gtag('event', 'conversion', {
                            'send_to': 'AW-304854293/vNDSCLXC06QDEJXqrpEB',
                            'event_callback': callback
                        });
                        return false;
                        }`}
                    </script>
                </Helmet>
            <div className="chatbot_main_div">
                <div className="chatbot_whatsapp_div" onClick={()=>{this.gtag_report_conversion('https://api.whatsapp.com/send?phone=917538851133&amp;text=Hey! Looking for EffyBuy Solution! Can you help ?')}}>
                    {/* <button>
                        <a rel="noreferrer" href="https://api.whatsapp.com/send?phone=917538801133&amp;text=Hey! Looking for EffyBuy Solution! Can you help ?" className="whatsapp" target="_blank" title="WhatsApp us" async>
                            <i className="fab fa-whatsapp fa-2x"></i>
                        </a> 
                    </button> */}
                    <Fab color="primary" aria-label="add">
                    <a rel="noreferrer" href="https://api.whatsapp.com/send?phone=917538851133&amp;text=Hey! Looking for EffyBuy Solution! Can you help ?" className="whatsapp" target="_blank" title="WhatsApp us" style={{"textDecoration":"none"}}>
                        <WhatsApp fontSize="large"/>
                    </a> 
                    </Fab>
                </div>

                <div className="chatbot_requestdemo_div" onClick={()=>{this.gtag_report_conversion2('https://calendly.com/bizgamsupport/effybuy')}}>
                                    {/* <Button className="footer_subscribe_button" variant="primary" onClick={this.openModal}>
                                        Request Demo
                                    </Button>

                                    <Modal show={this.state.isOpen} onHide={this.closeModal} animation={false} 
                                            backdrop="static" dialogClassName="modal-60w">
                                        <Modal.Header closeButton className="close_button_request_demo">
                                            <Modal.Title>Request Demo</Modal.Title>
                                        </Modal.Header>

                                        <Modal.Body>
                                            <input className="input" placeholder="Business email address to start saving"></input>
                                            <Button variant="primary" className="modal_buttons modal_submit_button">
                                                Submit
                                            </Button>
                                        </Modal.Body>
                                    </Modal> */}
                                    <PopupWidget  url="https://calendly.com/bizgamsupport/effybuy"
                                      text="Request Demo"
                                    //   pageSettings={{
                                    //     backgroundColor: 'ffffff',
                                    //     hideEventTypeDetails: false,
                                    //     hideLandingPageDetails: false,
                                    //     primaryColor: "00a2ff",
                                    //     textColor: "4d5055",
                                        
                                    //   }}
                                    // pageSettings={{
                                    //     "backgroundColor": "ffffff",
                                    //     hideEventTypeDetails: false,
                                    //     hideLandingPageDetails: false,
                                    //     primaryColor: "00a2ff",
                                    //     textColor: "4d5055",
                                    //     hideGdprBanner: true
                                    // }}
                                    // knob-pageSettings={{"backgroundColor":"ffffff",
                                    // "hideEventTypeDetails":false,
                                    // "hideLandingPageDetails":false,
                                    // "primaryColor":"00a2ff",
                                    // "textColor":"4d5055",
                                    // "hideGdprBanner":true}}
                                    //   color="red"
                                       />
                                       <CalendlyEventListener onEventScheduled={(e)=>{
                    if(e.data.event === "calendly.event_scheduled"){
                      window.open('https://www.effybuy.com/EffyBuy/calendly_conformation');
                    }
                    }}></CalendlyEventListener>
                                       



                                    
                </div>
            </div>
            </div>
        )
    }
}
