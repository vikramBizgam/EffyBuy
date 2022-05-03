import React from "react";
// import img1 from '../../assets/images/shape/114.svg'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import axios from 'axios';




class  PricingThree extends React.Component {

  state = {
    PricingContent : [
      {
        title: "FREE",
        title_desc:"Good for trial",
        symbol:"₹",
        monthlyPrice: [0,0],
        yearlyPrice: [0,0],
        showDiscount:false,
        priceMeta: "per user/month",
        packageName: "pc1",
        skewClass: "skew-right",
        desc:"Enjoy your free trial",
        bgColor: "#fbf3e5",
        priceList: [
          {
            list: "Account Setup",
            listClass: "",
          },
          {
            list: "User Manual & Videos",
            listClass: "",
          },
          {
            list: "Email Notifications",
            listClass: "",
          },
          {
            list: "Trial Support",
            listClass: "",
          },
          {
            list: "Savings Dashboard",
            listClass: "",
          },
          
          // {
          //   list: "Notification Activation",
          //   listClass: "",
          // },
        ],
        animatinDelay: "100",
      },
      {
        title: "STARTUP",
        title_desc:"For Individuals and Small teams",
        symbol:"₹",
        monthlyPrice: [5000,1999],
        yearlyPrice: [2500,999],
        showDiscount:true,
        discount:"60% Discount for 3 months",
        priceMeta: "per user/month",
        packageName: "pc2",
        skewClass: "skew-left",
        desc:"Everything in FREE TRIAL +",
        bgColor: "#d4fdf1",
        priceList: [
          {
            list: "Reverse Auction",
            listClass: "",
          },
          {
            list: "Live Monitoring Of Auction",
            listClass: "",
          },
          {
            list: "Forward Auction",
            listClass: "",
          },
          // {
          //   list: "Auction OTP",
          //   listClass: "",
          // },
          {
            list: "1 Access Control",
            listClass: "",
          },
          {
            list: "Auction OTP",
            listClass: "",
          },
          
          // {
          //   list: "Data security",
          //   listClass: "disable",
          // },
        ],
        animatinDelay: "200",
      },
      {
        title: "PROFESSIONAL",
        title_desc:"For Medium and Large businesses",
        symbol:"₹",
        monthlyPrice: [10000,4999],
        yearlyPrice: [5000,2499],
        showDiscount:true,
        discount:"50% Discount for 3 months",
        priceMeta: "per user/month",
        packageName: "pc3",
        skewClass: "skew-right",
        desc:"Everything in STARTUP +",
        bgColor: "#dbf7ff",
        activeItem: "active",
        priceList: [
          {
            list: "Messages to Supplier",
            listClass: "",
          },
          {
            list: "Logistic Auction",
            listClass: "",
          },
          {
            list: "Dedicated Account Manager",
            listClass: "",
          },
          // {
          //   list: "Phone Support",
          //   listClass: "",
          // },
          {
            list: "3 Access Controls",
            listClass: "",
          },
        ],
        animatinDelay: "300",
      },
      {
        title: "ENTERPRISE",
        title_desc:"For Multi-National and Large Orgs.",
        monthlyPrice: ["custom","custom"],
        yearlyPrice: ["custom","custom"],
        showDiscount:false,
        priceMeta: "per user/month",
        packageName: "pc1",
        skewClass: "skew-right",
        desc:"Everything in PROFESSIONAL +",
        bgColor: "#ffe3e3",
        priceList: [
          {
            list: "Multiple Access Control",
            listClass: "",
          },
          {
            list: "Custom Reports",
            listClass: "",
          },
          {
            list: "3rd Party API Integration",
            listClass: "",
          },
          {
            list: "ASN Integration",
            listClass: "",
          },
          {
            list: "Barcode Integration",
            listClass: "",
          },
          // {
          //   list: "Ticketing system",
          //   listClass: "disable",
          // },
          // {
          //   list: "Data security",
          //   listClass: "disable",
          // },
        ],
        animatinDelay: "400",
      },
    ]
  }

  componentDidMount(){
    window.scrollTo(0, 0)
    document.title="EffyBuy | Pricing"
    // let url2 = 'https://extreme-ip-lookup.com/json/'
    // let url2 = 'https://geolocation-db.com/json/f9902210-97f0-11eb-a459-b997d30983f1'
    let url2 = 'https://api.ipregistry.co/?key=tryout'

axios.get(url2)
.then((res) => {
    // alert(res.data.location.country.code)
    // console.log(res)
    if(res.data.location.country.code === 'IN'){
        this.setState(prevState => {
          let NewObj = Object.assign({}, prevState.PricingContent);  
          NewObj[0].symbol = "₹"
          NewObj[0].monthlyPrice = [0,0]
          NewObj[0].yearlyPrice = [0,0]
          NewObj[1].symbol = "₹"
          NewObj[1].monthlyPrice = [5000,1999]
          NewObj[1].yearlyPrice = [2500,999]
          NewObj[2].symbol = "₹"
          NewObj[2].monthlyPrice = [10000,4999]
          NewObj[2].yearlyPrice = [5000,2499]                        
          return { NewObj };                                 
        })
        

    }else if(res.data.location.country.code === 'JP'
    // res.location.country.code === 'US' || 'AS' || 'EC' || 'EV' || 'GU' || 'MH' 
    // || 'FM' || 'PW' || 'MP' || 'PR' || 'TC' || 'UM' || 'IO' || 'BQ'
    ){
      this.setState(prevState => {
        let NewObj = Object.assign({}, prevState.PricingContent);  
        NewObj[0].symbol = "¥"
        NewObj[0].monthlyPrice = [0,0]
        NewObj[0].yearlyPrice = [0,0]
        NewObj[1].symbol = "¥"
        NewObj[1].monthlyPrice = [7625,3050]
        NewObj[1].yearlyPrice = [3812,1525]
        NewObj[2].symbol = "¥"
        NewObj[2].monthlyPrice = [15250,7625]
        NewObj[2].yearlyPrice = [7620,3810]
        // NewObj[3].yearlyPrice = ['custom','custom']
        return { NewObj };                                 
      })
        
        }
        else if(res.data.location.country.code === 'US' 
        // || 'AS' || 'EC' || 'EV' || 'GU' || 'MH' 
        // || 'FM' || 'PW' || 'MP' || 'PR' || 'TC' || 'UM' || 'IO' || 'BQ'
        ){
          this.setState(prevState => {
            let NewObj = Object.assign({}, prevState.PricingContent);  
            NewObj[0].symbol = "$"
            NewObj[0].monthlyPrice = [0,0]
            NewObj[0].yearlyPrice = [0,0]
            NewObj[1].symbol = "$"
            NewObj[1].monthlyPrice = [70,30]
            NewObj[1].yearlyPrice = [35,15]
            NewObj[2].symbol = "$"
            NewObj[2].monthlyPrice = [140,70]
            NewObj[2].yearlyPrice = [70,35]
            return { NewObj };                                 
          })
        
        }
        else if (res.data.location.country.code === 'NL' 
        // || 'AD' || 'BE' || 'ES' || 'GP' || 'IE' || 'IT' || 'AT' || 'GR'
        // || 'CY' || 'LV' || 'LT' || 'LU' || 'MT' || 'MQ' || 'YT' || 'MC' || 'PT' || 'FR' || 'GF' || 
        // 'RE' || 'PM' || 'DE' || 'SM' || 'SK' || 'SI' || 'FI' || 'EE' || 'TF' || 'ME' || 'BL' || 
        // 'AX' || 'MF'
        ){
          this.setState(prevState => {
            let NewObj = Object.assign({}, prevState.PricingContent);  
            NewObj[0].symbol = "€"
            NewObj[0].monthlyPrice = [0,0]
            NewObj[0].yearlyPrice = [0,0]
            NewObj[1].symbol = "€"
            NewObj[1].monthlyPrice = [60,26]
            NewObj[1].yearlyPrice = [30,13]
            NewObj[2].symbol = "€"
            NewObj[2].monthlyPrice = [120,60]
            NewObj[2].yearlyPrice = [60,30]
            return { NewObj };                                 
          })
        
            }else{
              this.setState(prevState => {
                let NewObj = Object.assign({}, prevState.PricingContent);  
                NewObj[0].symbol = "$"
                NewObj[0].monthlyPrice = [0,0]
                NewObj[0].yearlyPrice = [0,0]
                NewObj[1].symbol = "$"
                NewObj[1].monthlyPrice = [70,30]
                NewObj[1].yearlyPrice = [35,15]
                NewObj[2].symbol = "$"
                NewObj[2].monthlyPrice = [140,70]
                NewObj[2].yearlyPrice = [70,35]
                return { NewObj };                                 
              })
    }
 })
    
    
}
  render(){
  return (
    <div className="pricing-section-six pt-200 md-pt-100" id="pricing">
        <div className="container" style={{"overflow":"hidden"}}>
          <div className="row">
            <div className="col-xl-10 m-auto">
              <div className="title-style-seven text-center">
                <h2>
                Affordability? We’ve got you <span>covered.</span>
                </h2>
              </div>
              {/* /.title-style-six */}
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        <Tabs>
      <TabList className="nav nav-tabs justify-content-center pricing-nav-four">
        <Tab>Monthly</Tab>
        <Tab>Yearly</Tab>
      </TabList>

      <div className="pricing-table-area-six">
        <TabPanel>

<div className="row justify-content-center">
      {this.state.PricingContent.map((val, i) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.animatinDelay}
          key={i}
        >
          <div className={`pr-table-wrapper ${val.activeItem}`}>
            {/* <div className="discount">
              {val.title}
            </div> */}
            <div className="pack-name" style={{ background: val.bgColor }}>
              {val.title}
            </div>
            {val.showDiscount && <div className="discount"><del>{val.monthlyPrice[0]}</del> {val.discount}</div>}
            {!val.showDiscount && <div style={{"height":"17.6px","marginTop":"10px"}}></div>}
            <div className="price">{val.symbol} {val.monthlyPrice[1]}</div>
            <div className="pack-details" style={{"height":"40px"}}>{val.title_desc}</div>
            <div style={{"fontSize":"15px","color":"black","marginTop":"20px","height":"50px","fontWeight":"bold"}}>{val.desc}</div>
            <ul className="pr-feature">
              {val.priceList.map((list, i) => (
                <li className={list.listClass} key={i}>
                  {list.list}
                </li>
              ))}
            </ul>
            <a href="https://www.effybuy.com/bizgam20/apps/baf.php/B_OS_BAF_USER_REGISTER/EDIT" className="trial-button">
              Subscribe
            </a>
            {/* <div className="trial-text">No card required, cancel any time</div> */}
          </div>
        </div>
      ))}
    </div>
{/* ===== */}


        </TabPanel>
        <TabPanel>
        <div className="row justify-content-center">
      {this.state.PricingContent.map((val, i) => (
        <div
          className="col-lg-3 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.animatinDelay}
          key={i}
        >
          <div className={`pr-table-wrapper ${val.activeItem}`}>
            <div className="pack-name" style={{ background: val.bgColor }}>
              {val.title}
            </div>
            {val.showDiscount && <div className="discount"><del>{val.yearlyPrice[0]}</del> {val.discount}</div>}
            {!val.showDiscount && <div style={{"height":"17.6px","marginTop":"10px"}}></div>}
            <div className="price">{val.symbol} {val.yearlyPrice[1]}</div>
            <div className="pack-details" style={{"height":"40px"}}>{val.title_desc}</div>
            <div style={{"fontSize":"15px","color":"black","marginTop":"20px","height":"50px","fontWeight":"bold"}}>{val.desc}</div>
            <ul className="pr-feature">
              {val.priceList.map((list, i) => (
                <li className={list.listClass} key={i}>
                  {list.list}
                </li>
              ))}
            </ul>
            <a href="https://www.effybuy.com/bizgam20/apps/baf.php/B_OS_BAF_USER_REGISTER/EDIT" className="trial-button">
              Subscribe
            </a>
            {/* <div className="trial-text">No card required, cancel any time</div> */}
          </div>
        </div>
      ))}
    </div>
        </TabPanel>
      </div>
    </Tabs>
      </div>
      
      
//       <div className="pricing-table-area-three">
// <div className="pricing-section-three mt-250 mb-200 md-mt-100 md-mb-150">
//           <div className="container">
//       <div className="title-style-five text-center mb-50 md-mb-40">
//             <h6>Our Pricing</h6>
//             <div className="row">
//               <div className="col-lg-9 m-auto">
//                 <h2>Unbeatable prices, no contracts, simple & easy</h2>
//               </div>
//             </div>
//           </div>
//           <TabList className="nav nav-tabs justify-content-center pricing-nav-four">
//         <Tab>Monthly</Tab>
//         <Tab>Yearly</Tab>
//       </TabList>
//     <div className="row justify-content-center">
//       {PricingContent.map((item, i) => (
//         <div
//           className="col-lg-3 col-md-6"
//           key={i}
//           data-aos="fade-up"
//           data-aos-duration="1200"
//           data-aos-delay={item.animatinDelay}
//         >
//           <div className={`pr-table-wrapper ${item.skewClass}`}>
//             <div className={`pack-name font-slab ${item.packageName}`}>
//               <span>{item.title}</span>
//             </div>
//             <div className="price font-slab">{item.price}</div>
//             <p className="user-condition">{item.priceMeta}</p>
//             <img src={img1} alt="shape" className="line" />
//             <div style={{"fontSize":"15px","color":"black","marginBottom":"20px"}}>{item.desc}</div>
//             <ul>
//               {item.priceList.map((val, i) => (
//                 <li className={val.listClass} key={i}>
//                   {val.list}
//                 </li>
//               ))}
//             </ul>
//             <a href="#" className="subscribe-btn font-rubik">
//               Subscribe Now
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//     </div>
//     </div>
  )};
};

export default PricingThree;



