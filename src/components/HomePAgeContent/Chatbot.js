import React, { Component } from 'react'
import './chatbot.css'
import { PopupWidget,CalendlyEventListener } from "react-calendly";
import Fab from '@material-ui/core/Fab';
import WhatsApp from '@material-ui/icons/WhatsApp';
import {Helmet} from "react-helmet";

export default class Chatbot extends Component {

    componentDidMount() {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
        head.appendChild(script);
    }
    

        gtag_report_conversion(url) {
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
                   
                    <Fab color="primary" aria-label="add">
                    <a rel="noreferrer" href="https://api.whatsapp.com/send?phone=917538851133&amp;text=Hey! Looking for EffyBuy Solution! Can you help ?" className="whatsapp" target="_blank" title="WhatsApp us" style={{"textDecoration":"none"}}>
                        <WhatsApp fontSize="large"/>
                    </a> 
                    </Fab>
                </div>

                <div className="chatbot_requestdemo_div" onClick={()=>{this.gtag_report_conversion2('https://calendly.com/bizgamsupport/effybuy')}}>
                                    
                                    <PopupWidget  url="https://calendly.com/bizgamsupport/effybuy"
                                      text="Request Demo"
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
