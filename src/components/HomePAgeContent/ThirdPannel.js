import React from 'react'
import { Link } from "react-router-dom";
import withouteffybuy from '../../assets/images/media/withouteffybuy.jpg'
import witheffybuy from '../../assets/images/media/witheffybuy.jpg'
import cross from '../../assets/images/icon/64.svg'
import right from '../../assets/images/icon/63.svg'


export default function Third() {
    return (
        <div className="fancy-feature-sixteen " id="features">
        <div className="container" style={{"overflow":"hidden"}}>
        <div className="block-style-eighteen mt-200 pt-50 md-mt-80">
            <div className="row align-items-center">
              <div
                className="col-lg-6 order-lg-last"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h3 className="title" style={{"textAlign":"center"}}>
                    <span>With </span> Effybuy
                  </h3>
                  <img src={witheffybuy} alt="witheffybuy" style={{"width":"400px","margin":"0 auto"}}/>
                  <div style={{"margin":"5% 0 0 30%"}}>
                  <ul>
                      <li style={{"position":"relative","margin":"10px"}}>
                        <img src={right} alt="k" style={{"position":"absolute","left":"-20px","top":"10px"}} /> Automated RFQ
                      </li>
                      <li style={{"position":"relative","margin":"10px"}}>
                        <img src={right} alt="k" style={{"position":"absolute","left":"-20px","top":"10px"}} /> No manual errors
                      </li>
                      <li style={{"position":"relative","margin":"10px"}}>
                        <img src={right} alt="k" style={{"position":"absolute","left":"-20px","top":"10px"}} /> Save money
                      </li>
                      <li style={{"position":"relative","margin":"10px"}}>
                        <img src={right} alt="k" style={{"position":"absolute","left":"-20px","top":"10px"}} /> Reports & analytics
                      </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 order-lg-first"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                  <div className="text-wrapper">
                  <h3 className="title" style={{"textAlign":"center"}}>
                  <span>Without </span> Effybuy
                  </h3>
                    <img src={withouteffybuy} alt="withouteffybuy" style={{"width":"400px","margin":"0 auto"}}/>
                  <div style={{"margin":"5% 0 0 30%"}}>
                  <ul>
                      <li style={{"position":"relative","color":"#999","margin":"10px"}}>
                        <img src={cross} alt="k" style={{"position":"absolute","left":"-30px","top":"-2px"}} /> Multiple follow up calls
                      </li>
                      <li style={{"position":"relative","color":"#999","margin":"10px"}}>
                        <img src={cross} alt="k" style={{"position":"absolute","left":"-30px","top":"-2px"}} /> Manual errors
                      </li>
                      <li style={{"position":"relative","color":"#999","margin":"10px"}}>
                        <img src={cross} alt="k" style={{"position":"absolute","left":"-30px","top":"-2px"}} /> Meaningless work
                      </li>
                      <li style={{"position":"relative","color":"#999","margin":"10px"}}>
                        <img src={cross} alt="k" style={{"position":"absolute","left":"-30px","top":"-2px"}} />  Unoptimised buying
                      </li>
                  </ul>
                  </div>
                </div>
                
                {/* <div className="screen-holder-two">
                  <img src="images/assets/screen_12.png" alt="screen" />
                  <img
                    src="images/assets/screen_13.png"
                    alt=""
                    className="shapes screen-one"
                  />
                </div> */}
                
              </div>
            </div>
          </div>

        </div>
        </div>
    )
}
