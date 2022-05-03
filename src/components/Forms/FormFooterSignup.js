import React,{ useState} from "react";
import emailjs from '@emailjs/browser';
var validator = require("email-validator");

const FormFooterSignup = () => {
  const [email, setEmail] = useState(''); 
  const [error, setError] = useState(''); 
  const [border_color, setBorder_color] = useState('#000'); 
  const handleSubmit = (event) => {
    event.preventDefault();
    if(email.replace(/\s+/g, '').length === 0){
      setError("Please enter email Id")
      setBorder_color("red")
    }else if(validator.validate(email)){
      setError("")
      setBorder_color("#999")
      window.lintrk('track', { conversion_id: 7514468 })
      emailjs.sendForm('service_h28clne', 'template_0vm3br4', event.target, '_SkP_OebRj5Q-nHBw')
      .then((result) => {
        console.log(result.text);
            window.location.href = "https://www.effybuy.com/bizgam20/apps/baf.php/B_OS_BAF_USER_REGISTER/EDIT"
          }, (error) => {
            console.log(error.text);
            window.location.href = "https://www.effybuy.com/bizgam20/apps/baf.php/B_OS_BAF_USER_REGISTER/EDIT"
        });
    }else{
      setBorder_color("red")
      setError("Please enter valid email")
    }
    // if(validator.validate(email)){
    //   setError("")
    //   setBorder_color("#999")
    //   emailjs.sendForm('service_h28clne', 'template_0vm3br4', event.target, '_SkP_OebRj5Q-nHBw')
    //     .then((result) => {
    //         console.log(result.text);
    //         window.location.href = "https://www.effybuy.com/bizgam20/apps/baf.php/B_OS_BAF_USER_REGISTER/EDIT"
    //       }, (error) => {
    //         console.log(error.text);
    //         window.location.href = "https://www.effybuy.com/bizgam20/apps/baf.php/B_OS_BAF_USER_REGISTER/EDIT"
    //     });
    // }else{
    //   setBorder_color("red")
    //   setError("Please enter valid email")
    // }
  };

  function change(e){
    setEmail(e.target.value);
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" placeholder="Enter your email" value={email} onChange={(e)=>{change(e)}} style={{"border":`2px solid ${border_color}`}}/>
      <button>Sign UP</button>
    </form>
    <div style={{"marginTop":"-10px","textAlign":"center","color":"red"}}>
    {error}
    </div>
    </div>
  );
};

export default FormFooterSignup;
