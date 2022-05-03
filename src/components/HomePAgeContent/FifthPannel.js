import React from "react";
import Additional_Safety from '../../assets/images/icon/dataSecurity/Additional_Safety.svg'
import End_to_End  from '../../assets/images/icon/dataSecurity/End_to_End.svg'
import Multi_level  from '../../assets/images/icon/dataSecurity/Multi_level.svg'
import Type_II  from '../../assets/images/icon/dataSecurity/Type_II.svg'
import anytime_backup  from '../../assets/images/icon/dataSecurity/anytime_backup.svg'

const FeaturesContent = [
  {
    img: Type_II,
    title: "Hosted on Tier IV SSAE 16 Type II Data Centre",
    desc: ` Deski Web offers a complete lineup of features from any
      major browser.`,
  },
  {
    img: End_to_End,
    title: "End-to-End Encryption",
    desc: ` Lorem ipsum began as scrambl nonsensical Latin derived from
      Cicero's quis`,
  },
  {
    img: Multi_level,
    title: "Multi-level authentication for data access",
    desc: ` Creation timelines for the standard lorem ipsum passage
      vary, with qius some citing.`,
  },
  // {
  //   img: Additional_Safety,
  //   title: "Additional Safety of AWS Cloud",
  //   desc: ` Lorem ipsum began as scrambl nonsensical Latin derived from
  //     Cicero's quis`,
  // },
  // {
  //   img: "98",
  //   title: "100% save",
  //   desc: ` Lorem ipsum was purposefully designed to have no meaning,
  //     but appear like text`,
  // },
  // {
  //   img: anytime_backup,
  //   title: "Anytime data backup",
  //   desc: `  Letraset's dry-transfer sheets later entered the digital
  //     world via Aldus PageMaker.`,
  // },
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
              {/* <FancyFeatureSeventeen /> */}
              {FeaturesContent.map((val, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          key={i}
        >
          <div className="block-meta">
            <div className="icon d-flex align-items-end">
              <img src={`${val.img}`} style={{"width":"70px"}} alt="icon" />
            </div>
            <h4>{val.title}</h4>
            {/* <p>{val.desc}</p> */}
          </div>
        </div>
        // .block-meta
      ))}
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      
    </>
  );
};

export default FifthPannel;
