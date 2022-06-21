import React from "react";
import End_to_End  from '../../assets/images/icon/dataSecurity/End_to_End_Encryption.webp'
import Multi_level  from '../../assets/images/icon/dataSecurity/Multi_level_Authentication.webp'
import Type_II  from '../../assets/images/icon/dataSecurity/hosted_Tier_IV_SSAE_16_Type_II.webp'

const FeaturesContent = [
  {
    img: Type_II,
    title: "Hosted on Tier IV SSAE 16 Type II Data Centre",
    desc: ` Deski Web offers a complete lineup of features from any
      major browser.`,
      altTag:"Hosted on Tier IV SSAE 16 Type II"
  },
  {
    img: End_to_End,
    title: "End-to-End Encryption",
    desc: ` Lorem ipsum began as scrambl nonsensical Latin derived from
      Cicero's quis`,
      altTag:"End to End Encryption"
  },
  {
    img: Multi_level,
    title: "Multi-level authentication for data access",
    desc: ` Creation timelines for the standard lorem ipsum passage
      vary, with qius some citing.`,
      altTag:"Multilevel Authentication"
  },
];
const FifthPannel = () => {
  return (
    <>
    <div className="fancy-feature-seventeen mt-150 md-mt-90" id="product">
        <div className="bg-wrapper">
          <div className="container" style={{"overflow":"hidden"}}>
              <div>

              <h3 style={{"textAlign":"center","marginBottom":"100px"}}>
                Your Data is 100% Secure
              </h3>
              </div>
            <div className="row">
              {FeaturesContent.map((val, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          key={i}
        >
          <div className="block-meta">
            <div className="icon d-flex align-items-end">
              <img src={`${val.img}`} style={{"width":"70px"}} alt={val.altTag} />
            </div>
            <h4>{val.title}</h4>
          </div>
        </div>
      ))}
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default FifthPannel;
