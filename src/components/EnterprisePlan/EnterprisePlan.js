import React, { Component } from 'react'
import './enterprisePlan.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
// import TooltipSlider, { handleRender } from './components/TooltipSlider';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";


export default class EnterprisePlan extends Component {
    state={
        auction:1,
        auctionDiscount:0,
        totalAuctionPrice:1000,

        rfq:1,
        rfqDiscount:0,
        totalRfqPrice:100,

        maxItemUpload:10,
        maxSupplierUpload:5,

        addOnsPrice:0,

        monthly_yearly : 0,
        monthly_yearlyDiscount : 0,

        finalPrice: 4100
    }

    AuctionCalc(){

    }

    finalPrice(){
        let {totalAuctionPrice, totalRfqPrice, maxItemUpload, maxSupplierUpload, addOnsPrice, monthly_yearly} = this.state
        if(monthly_yearly === 0){
            this.setState({
                finalPrice : totalAuctionPrice + totalRfqPrice + addOnsPrice + 3000
            })
        }else{
            this.setState({
                finalPrice : ((totalAuctionPrice + totalRfqPrice + addOnsPrice) * 12 * 0.7) + 3000
            })
        }
    }

    Auctionchange(value){
        let auctions = value
        let auctionDiscount = 0
        let auctionPrice = value * 1000

        if(value === 10){
            auctions = 5
            auctionPrice = auctions * 1000
            auctionDiscount = 20
            auctionPrice = ((auctionPrice * 80)/100)
        }else if(value === 25){
            auctionPrice = auctions * 1000
            auctionDiscount = 40
            auctionPrice = ((auctionPrice * 60)/100)
        }else if(value === 45){
            auctions = 50
            auctionPrice = auctions * 1000
            auctionDiscount = 50
            auctionPrice = ((auctionPrice * 50)/100)
        }else if(value === 60){
            auctions = 100
            auctionPrice = auctions * 1000
            auctionDiscount = 60
            auctionPrice = ((auctionPrice * 40)/100)
        }else if(value === 100){
            auctions = 1000
            auctionPrice = auctions * 1000
            auctionDiscount = 70
            auctionPrice = ((auctionPrice * 30)/100)
        }else{
            auctions = value
            auctionPrice = auctions * 1000
            auctionDiscount = 0
            auctionPrice = 1000
        }

        this.setState({
            auction:auctions,
            auctionDiscount:auctionDiscount,
            totalAuctionPrice:auctionPrice,
        },this.finalPrice)

        
    }

    Rfqchange(value){
        let final = value
        let finalPrice = value*100
        let rfqDiscount = 0

        if(value === 1){
            final = value;
            finalPrice = value*100
            rfqDiscount = 0
        }else if(value === 10){
            final = value;
            finalPrice = value*100
            rfqDiscount = 20
        }else if(value === 20){
            final = 25;
            finalPrice = 25*100
            rfqDiscount = 30
        }else if(value === 30){
            final = 50
            finalPrice = 50*100
            rfqDiscount = 40
        }else if(value === 40){
            final = 100
            finalPrice = 100*100
            rfqDiscount = 50
        }else if(value === 50){
            final = 500
            finalPrice = 500*100
            rfqDiscount = 60
        }else if(value === 60){
            final = 1000
            finalPrice = 1000*100
            rfqDiscount = 65
        }else if(value === 80){
            final = 1500
            finalPrice = 1500*100
            rfqDiscount = 70
        }else if(value === 100){
            final = 5000
            finalPrice = 5000*100
            rfqDiscount = 75
        }
        this.setState({
            rfq:final,
            totalRfqPrice:((finalPrice*(100-rfqDiscount))/100),
            rfqDiscount:rfqDiscount
        },this.finalPrice)
        
    }

    maxItemUpload(e){
        this.setState({
            maxItemUpload : Number(e.target.getAttribute('data-value')),
        },this.finalPrice)
    }

    maxSupplierUpload(e){
        this.setState({
            maxSupplierUpload : Number(e.target.getAttribute('data-value')),
        },this.finalPrice)
    }

    addOns(e){
        let {addOnsPrice, finalPrice} = this.state
        let price = Number(e.target.value)
        // alert(e.target.checked)
        if(e.target.checked){
            this.setState({
                addOnsPrice : addOnsPrice + price,
                finalPrice : finalPrice + price
            })
        }else{
            this.setState({
                addOnsPrice : addOnsPrice - price,
                finalPrice : finalPrice - price
            })
        }
    }

    monthly(index){
        let discount = 0
        if(index === 0){
            discount = 0
        }else{
            discount = 30
        }
        this.setState({
            monthly_yearly : index,
            monthly_yearlyDiscount : discount
        },this.finalPrice)
        
    }

  render() {
    return (
    //   <div style={{"padding":"200px"}}>EnterprisePlan</div>

      <div className="pricing-section-six pt-200 md-pt-100 enterprise_plan" id="pricing">
            <div className="col-xl-10 m-auto">
              <div className="title-style-seven text-center">
                <h2>
                Plan for your <span>need.</span>
                </h2>
                <h3>
                Saving money while procurement is just few clicks away
                </h3>
              </div>

                <Tabs defaultIndex={this.state.monthly_yearly} onSelect={(index) => this.monthly(index)}>
                    <TabList className="nav nav-tabs justify-content-center pricing-nav-four">
                        <Tab >Monthly</Tab>
                        <Tab>Yearly</Tab>
                    </TabList>
                </Tabs>

            </div>
        <div className="container" style={{"overflow":"hidden"}}>
          <div className="row">
            <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12 mt-5'>
            <div className='d-flex justify-content-between' style={{"paddingTop":"20px","paddingBottom":"10px"}}>
                <div className='choose_your_title'>Choose your Auction : {this.state.auction} <span style={{"marginLeft":"10px","color":"red","fontSize":"12px"}}>{this.state.auctionDiscount} % discount</span></div>
                <div className='text-center'>
                    <div>₹<span style={{"border":"1px solid #6D6D6D","borderRadius":"10px","padding":"3px 25px","marginLeft":"10px"}}>{(this.state.totalAuctionPrice).toLocaleString()}</span></div>
                    <div style={{"fontSize":"12px"}}>1,000/- per Auction</div>
                </div>
            </div>
            <div style={{"padding":"0 20px"}}>
                <Slider min={1} max={100} defaultValue={1} 
                onChange={(value) => {this.Auctionchange(value)}}
                // onBeforeChange={(value) => {this.Auctionchange(value)}}
                marks={{
                    1: <strong>1</strong>,
                    10: '5',
                    25: '25',
                    45: '50',
                    60: '100',
                    100: <strong>1000</strong>,
                    }}
                        dotStyle={{ borderColor: '#3665DE',top:"0px" }}
                        activeDotStyle={{ borderColor: '#EBEBEB',top:"0px" }}
                        step={null} 
                        railStyle={{ backgroundColor: '#EBEBEB', height: 8 }}
                        trackStyle={{ backgroundColor: '#3665DE', height: 8 }}
                        handleStyle={{
                        borderColor: '#3665DE',
                        height: 25,
                        width: 25,
                        marginLeft: 0,
                        marginTop: -9,
                        backgroundColor: '#3665DE',
                        }}
                        name="auction"
                        // value={this.state.auction}
                        
                        />
            </div>

            <div className='d-flex justify-content-between mt-5' style={{"paddingTop":"20px","paddingBottom":"10px"}}>
                <div className='choose_your_title'>Choose your RFQ : {this.state.rfq} <span style={{"marginLeft":"10px","color":"red","fontSize":"12px"}}>{this.state.rfqDiscount} % discount</span></div>
                <div className='text-center'>
                    <div>₹<span style={{"border":"1px solid #6D6D6D","borderRadius":"10px","padding":"3px 25px","marginLeft":"10px"}}>{(this.state.totalRfqPrice).toLocaleString()}</span></div>
                    <div style={{"fontSize":"12px"}}>100/- per RFQ</div>
                </div>
            </div>
            <div style={{"padding":"0 20px"}}>
                <Slider min={1} max={100} defaultValue={1} 
                    marks={{
                        1: <strong>1</strong>,
                        10: '10',
                        20: '25',
                        30: '50',
                        40: '100',
                        50: '500',
                        60: '1000',
                        80: '1500',
                        100: <strong>5000</strong>,
                        }}
                        dotStyle={{ borderColor: '#3665DE',top:"0px" }}
                        activeDotStyle={{ borderColor: '#EBEBEB',top:"0px" }}
                        step={null} 
                        railStyle={{ backgroundColor: '#EBEBEB', height: 8 }}
                        trackStyle={{ backgroundColor: '#3665DE', height: 8 }}
                        handleStyle={{
                        borderColor: '#3665DE',
                        height: 25,
                        width: 25,
                        marginLeft: 0,
                        marginTop: -9,
                        backgroundColor: '#3665DE',
                        }}
                        name="auction"
                        
                        onChange={(value) => {this.Rfqchange(value)}}
                        />
            </div>
            <div className='' style={{"paddingTop":"60px"}}>
                <div className='d-sm-block d-lg-flex justify-content-center align-items-center '>
                    <div className='responsive_titlee'>
                        Max Item Upload
                    </div>
                    <div >
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn-primary active" data-value='10' onClick={(e)=>{this.maxItemUpload(e)}}>
                                <input type="radio" name="options"  id="option1" autocomplete="off" checked/> 10
                            </label>
                            <label class="btn btn-primary" data-value='25' onClick={(e)=>{this.maxItemUpload(e)}}>
                                <input type="radio" name="options"  id="option2" autocomplete="off"/> 25
                            </label>
                            <label class="btn btn-primary" data-value='100' onClick={(e)=>{this.maxItemUpload(e)}}>
                                <input type="radio" name="options" id="option3" autocomplete="off"/> 100
                            </label>
                        </div>
                    </div>
                </div>
            </div> 
            <div className='' style={{"paddingTop":"30px"}}>
                <div className='d-sm-block d-lg-flex justify-content-center align-items-center '>
                    <div className='responsive_titlee'>
                        Max Supplier Upload
                    </div>
                    <div >
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn-primary active" data-value='5' onClick={(e)=>{this.maxSupplierUpload(e)}}>
                                <input type="radio" name="options"  id="option1" autocomplete="off" checked/> 5
                            </label>
                            <label class="btn btn-primary" data-value='10' onClick={(e)=>{this.maxSupplierUpload(e)}}>
                                <input type="radio" name="options"  id="option2" autocomplete="off"/> 10
                            </label>
                            <label class="btn btn-primary" data-value='30' onClick={(e)=>{this.maxSupplierUpload(e)}}>
                                <input type="radio" name="options" id="option3" autocomplete="off"/> 30
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            </div>
            <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12' style={{"paddingTop":"50px"}}>
                <div style={{"border":"3px solid #000000","padding":"20px","borderRadius":"44px"}}>
                    <div style={{"fontWeight": "400",
                        "fontSize": "25px",
                        "textAlign": "center",
                        "color": "#000000",
                        }}>Total Payment is
                    </div>

                    <div style={{
                    "textAlign": "center",
                    "color": "#000000","paddingTop":"30px"}}>
                        <span style={{"alignSelf":"flex-start"}}></span>₹ <span style={{"fontSize":"35px","fontWeight":"700"}}>{(this.state.finalPrice).toLocaleString()} </span>
                        
                            {/* {this.state.monthly_yearly && <span style={{"alignSelf":"baseline"}}>/yearly</span>} */}
                            {this.state.monthly_yearly === 0 ? <span style={{"alignSelf":"baseline"}}>/ month</span> : <span style={{"alignSelf":"baseline"}}>/ year</span>}
                            
                            
                    </div>

                    <div className='d-flex justify-content-around' style={{"paddingTop":"30px","textAlign":"right"}}>
                        <div style={{"width":"125px"}}>Base Payment </div>
                        <div style={{"width":"78px"}}>₹ 3,000.00</div>
                    </div>
                    <div className='d-flex justify-content-around' style={{"paddingTop":"10px","textAlign":"right"}}>
                        <div style={{"width":"125px"}}>Yearly Discount</div>
                        <div style={{"width":"78px"}}>{this.state.monthly_yearlyDiscount} %</div>
                    </div>
                    <div style={{"textAlign": "center","paddingTop":"30px"}}>
                        <button className='btn' style={{"backgroundColor":"#FFEAA0","fontSize": "25px","padding":"10px 40px"}}>Get Started</button>
                    </div>
                </div>
                <div style={{"textAlign": "center","fontSize": "15px"}}>Need some help deciding? <span style={{"color":"#3665DE"}}>Get in touch</span></div>
            </div>
          </div>
          
          <div className="row" >

            <div className='col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12'>
                <div className="row plan_includes">
                <div className='title' style={{"paddingTop":"50px"}}>
                    This plan includes
                </div>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                    <ul>
                        <li><i class="fa fas fa-check" style={{"color":"#3665DE","marginRight":"5px"}}></i>Quick Auction</li>
                        <li><i class="fa fas fa-check" style={{"color":"#3665DE","marginRight":"5px"}}></i>Manual Offers</li>
                        <li><i class="fa fas fa-check" style={{"color":"#3665DE","marginRight":"5px"}}></i>Participants online or offline check</li>
                        <li><i class="fa fas fa-check" style={{"color":"#3665DE","marginRight":"5px"}}></i>Maximum Supplier Limit for Auction</li>
                        <li><i class="fa fas fa-check" style={{"color":"#3665DE","marginRight":"5px"}}></i>Live Messages to Suppliers during Auction</li>
                    </ul>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                    <ul>
                        <li><i class="fa fas fa-check" style={{"color":"#3665DE","marginRight":"5px"}}></i>Email Notification</li>
                        <li><i class="fa fas fa-check" style={{"color":"#3665DE","marginRight":"5px"}}></i>Auction OTP</li>
                        <li><i class="fa fas fa-check" style={{"color":"#3665DE","marginRight":"5px"}}></i>Notification Activation</li>
                        <li><i class="fa fas fa-check" style={{"color":"#3665DE","marginRight":"5px"}}></i>Auction Saving Dashboard</li>
                        <li><i class="fa fas fa-check" style={{"color":"#3665DE","marginRight":"5px"}}></i>Detailed Saving Report & Monthly History</li>
                    </ul>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                    <ul>
                        <li><i class="fa fas fa-check" style={{"color":"#3665DE","marginRight":"5px"}}></i>Change Step up/Down price during Auction</li>
                        <li><i class="fa fas fa-check" style={{"color":"#3665DE","marginRight":"5px"}}></i>1 Buyers per account</li>
                        <li><i class="fa fas fa-check" style={{"color":"#3665DE","marginRight":"5px"}}></i>Maximum Item Upload Limit</li>
                        <li><i class="fa fas fa-check" style={{"color":"#3665DE","marginRight":"5px"}}></i>Maximum Supplier Upload Limit</li>
                        <li><i class="fa fas fa-check" style={{"color":"#3665DE","marginRight":"5px"}}></i>Storage Space of Documents Attached</li>
                    </ul>
                </div>
                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12'>
                <ul>
                        <li><i class="fa fas fa-check" style={{"color":"#3665DE","marginRight":"5px"}}></i>Reports Downloads</li>
                        <li><i class="fa fas fa-check" style={{"color":"#3665DE","marginRight":"5px"}}></i>Video Tutorials / User Manuals</li>
                        <li><i class="fa fas fa-check" style={{"color":"#3665DE","marginRight":"5px"}}></i>Activation / Trial Support</li>
                        <li><i class="fa fas fa-check" style={{"color":"#3665DE","marginRight":"5px"}}></i>Custom Support</li>
                        <li><i class="fa fas fa-check" style={{"color":"#3665DE","marginRight":"5px"}}></i>Dedicated Account Manager</li>
                    </ul>
                </div>
            </div>
            </div>

            <div className='col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12'>
                <div>
                    <div className='title' style={{"padding":"50px 0 0 20px"}}>
                        Enhance your effybuy with add ons 
                    </div>
                    <div>
                    <div class="pt-5">
                        {/* <h2 class="h4 mb-1">Enhance your effybuy with add ons</h2> */}
                        {/* <p class="small text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
                        <ul class="list-group mx-auto list_class">
                            <li class="list-group-item rounded-0">
                                <div class="custom-control custom-checkbox">
                                    <input class="custom-control-input" id="customCheck1" type="checkbox" value="10" onClick={(e)=>{this.addOns(e)}}/>
                                    <label class="cursor-pointer d-block custom-control-label" for="customCheck1">Auto Report Emailers</label>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="custom-control custom-checkbox">
                                    <input class="custom-control-input" id="customCheck2" type="checkbox" value="10" onClick={(e)=>{this.addOns(e)}}/>
                                    <label class="cursor-pointer d-block custom-control-label" for="customCheck2">3rd Party API Integrations</label>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="custom-control custom-checkbox">
                                    <input class="custom-control-input" id="customCheck3" type="checkbox" value="10" onClick={(e)=>{this.addOns(e)}} />
                                    <label class="cursor-pointer d-block custom-control-label" for="customCheck3">Supplier URL Customizations</label>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="custom-control custom-checkbox">
                                    <input class="custom-control-input" id="customCheck4" type="checkbox" value="10" onClick={(e)=>{this.addOns(e)}}/>
                                    <label class="cursor-pointer d-block custom-control-label" for="customCheck4">ASN Integrations</label>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="custom-control custom-checkbox">
                                    <input class="custom-control-input" id="customCheck5" type="checkbox" value="10" onClick={(e)=>{this.addOns(e)}}/>
                                    <label class="cursor-pointer d-block custom-control-label" for="customCheck5">Barcode Integrations</label>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="custom-control custom-checkbox">
                                    <input class="custom-control-input" id="customCheck6" type="checkbox" value="10" onClick={(e)=>{this.addOns(e)}}/>
                                    <label class="cursor-pointer d-block custom-control-label" for="customCheck6">Notification Message for Supplier Quotations</label>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="custom-control custom-checkbox">
                                    <input class="custom-control-input" id="customCheck7" type="checkbox" value="10" onClick={(e)=>{this.addOns(e)}}/>
                                    <label class="cursor-pointer d-block custom-control-label" for="customCheck7">Custom Reports</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            <div></div>
          </div>

          

        </div>
        <div style={{"textAlign": "center","fontSize": "15px","paddingTop":"50px"}}><span style={{"color":"#3665DE"}}>Terms & Conditions </span> & <span style={{"color":"#3665DE"}}> Privacy Policy</span></div>
        </div>
    )
  }
}
