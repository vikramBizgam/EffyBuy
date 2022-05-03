import React,{ useState } from 'react'
import { openPopupWidget, CalendlyEventListener } from "react-calendly";
import emailjs from '@emailjs/browser';
var validator = require("email-validator");


export default function TryForFreeForm() {
  const [email, setEmail] = useState(''); 
  const [error, setError] = useState(''); 

  const handleSubmit = (event,urlCal) => {
    event.preventDefault();
    
    if(email.replace(/\s+/g, '').length === 0){
      setError("Please enter email Id")
        }else if(validator.validate(email)){
          setError("")
          // emailjs.sendForm('service_h28clne', 'template_vrxq1v7', event.target, '_SkP_OebRj5Q-nHBw')
          emailjs.sendForm('service_h28clne', 'template_0vm3br4', event.target, '_SkP_OebRj5Q-nHBw')
          window.lintrk('track', { conversion_id: 7514444 })
        .then((result) => {
            console.log(result.text);
            openPopupWidget({ url:"https://calendly.com/bizgamsupport/effybuy", styles:{
              color:"white",
              border:"none",
              }, pageSettings:{
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
              }});
            }, (error) => {
              console.log(error.text);
              openPopupWidget({ url:"https://calendly.com/bizgamsupport/effybuy", styles:{
                color:"white",
                border:"none",
                }, pageSettings:{
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                }});
        });
        var callback = function () {
          if (typeof(url) != 'undefined') {
            window.location = urlCal;
          }
        };
        window.gtag('event', 'conversion', {
            'send_to': 'AW-304854293/KcwlCLPJ4akDEJXqrpEB',
            'event_callback': callback
        });
        return false;
        }else{
          setError("Please enter valid email")
        }

      };

      function change(e){
        setEmail(e.target.value);
      }
      return (
        <div>
        <form onSubmit={(e)=>{handleSubmit(e,'https://calendly.com/bizgamsupport/effybuy')}}>
          <input type="text" placeholder="Enter your Business Email" name="email" value={email} onChange={(e)=>{change(e)}}/>
          <button type="submit">Request Demo
          </button>
          <CalendlyEventListener onEventScheduled={(e)=>{
                    if(e.data.event === "calendly.event_scheduled"){
                      window.open('https://www.effybuy.com/EffyBuy/calendly_conformation');
                      
                    }
                    }}></CalendlyEventListener>
        </form>
        <div style={{"textAlign":"center","color":"red"}}>
          {error}
        </div>
        </div>
      );
}
