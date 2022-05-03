import React from "react";

import shape1 from '../../assets/images/shape/shape01.svg'
import shape2 from '../../assets/images/shape/shape02.svg'
import shape3 from '../../assets/images/shape/shape03.svg'
import shape4 from '../../assets/images/shape/shape04.svg'

const PreviewMain = () => {
//   useDocumentTitle("Preview || Deski-Saas & Software React Template");
  return (
    <div className="main-page-wrapper">
      <div className="landing-banner" id="intro" style={{"paddingTop":"150px"}}>
        {/* <Header /> */}

        <div className="container">
          <div className="text-wrapper">
            <div className="row">
              <div className="col-xl-11 m-auto">
                <h1>Thank you. Your demo is confirmed</h1>
              </div>
            </div>
            <p className="font-rubik sub-text">
              A calendar invitation has been sent to your email address.
            </p>
          </div>
          {/* /.text-wrapper */}

          {/* <div className="block-bg-wrapper">
            <DemoCounter />
          </div> */}
          {/* /.block-bg-wrapper */}
        </div>

        <img
          src={shape1}
          alt="shape"
          className="shape shape-one"
        />
        <img
          src={shape2}
          alt="shape"
          className="shape shape-two"
        />
        <img
          src={shape3}
          alt="shape"
          className="shape shape-three"
        />
        <img
          src={shape4}
          alt="shape"
          className="shape shape-four"
        />
      </div>
      {/* /.landing-banner */}

     
    </div>
  );
};

export default PreviewMain;
