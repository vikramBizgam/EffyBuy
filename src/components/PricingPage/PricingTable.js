import React, { Component } from 'react'
import './pricingTable.css'
import axios from 'axios';
import { Link } from "react-router-dom";


export default class PricingTable extends Component {
    state={
            symbol:"₹",
            monthlyStartupPrice:1999,
            yearlyStartupPrice:999,
            monthlyProfessionalPrice:4999,
            yearlyProfessionalPrice:2499,
            showCommonFeatures:true
    }

    componentDidMount(){
        let url2 = 'https://geolocation-db.com/json/f9902210-97f0-11eb-a459-b997d30983f1'

        // const url = `${url2}`;
    axios.get(url2)
    .then((res) => {
        if(res.data.country_code === 'IN'){
            this.setState({
                symbol: '₹',
                monthlyStartupPrice:1999,
                yearlyStartupPrice:999,
                monthlyProfessionalPrice:4999,
                yearlyProfessionalPrice:2499,
            })
        }else if(res.data.country_code === 'JP'
        // res.country_code === 'US' || 'AS' || 'EC' || 'EV' || 'GU' || 'MH' 
        // || 'FM' || 'PW' || 'MP' || 'PR' || 'TC' || 'UM' || 'IO' || 'BQ'
        ){
                this.setState({
                    symbol: '¥',
                    monthlyStartupPrice:3050,
                    yearlyStartupPrice:1525,
                    monthlyProfessionalPrice:7625,
                    yearlyProfessionalPrice:3810,
                })
            }
            else if(res.data.country_code === 'US' 
            // || 'AS' || 'EC' || 'EV' || 'GU' || 'MH' 
            // || 'FM' || 'PW' || 'MP' || 'PR' || 'TC' || 'UM' || 'IO' || 'BQ'
            ){
                this.setState({
                    symbol: '$',
                    monthlyStartupPrice:30,
                    yearlyStartupPrice:15,
                    monthlyProfessionalPrice:70,
                    yearlyProfessionalPrice:35,
                })
            }
            else if (res.data.country_code === 'NL' 
            // || 'AD' || 'BE' || 'ES' || 'GP' || 'IE' || 'IT' || 'AT' || 'GR'
            // || 'CY' || 'LV' || 'LT' || 'LU' || 'MT' || 'MQ' || 'YT' || 'MC' || 'PT' || 'FR' || 'GF' || 
            // 'RE' || 'PM' || 'DE' || 'SM' || 'SK' || 'SI' || 'FI' || 'EE' || 'TF' || 'ME' || 'BL' || 
            // 'AX' || 'MF'
            ){
                    this.setState({
                        symbol: '€', // EURO
                        monthlyStartupPrice:26,
                        yearlyStartupPrice:13,
                        monthlyProfessionalPrice:60,
                        yearlyProfessionalPrice:30,
                    })
                }else{
                    this.setState({
                        symbol: '$',
                        monthlyStartupPrice:30,
                        yearlyStartupPrice:15,
                        monthlyProfessionalPrice:70,
                        yearlyProfessionalPrice:35,
            })
        }
     })
        
        
    }
    hideCommonFeatures(e){
        if(e.target.checked === false){
            this.setState({
                showCommonFeatures : true
            })
        }else{
            this.setState({
                showCommonFeatures : false
            })
        }
    }

    render() {

        return (
            <div className="pricing_table_main_div table-responsive" style={{"width":"80%"}}>


                <table className='table'>
                    <thead className="pricing_table_plans" style={{"borderBottom":"1px solid #f0f0f0!important"}}>
                        <tr className='header_table'>
                            <th className='pricing_table_plans_features'>
                                <input type="checkbox" onClick={(e)=>{this.hideCommonFeatures(e)}}/><span style={{"marginLeft":"5px"}}>Hide common features</span>
                            </th>
                            <th>
                                <div >FREE</div>
                                <div style={{"margin":"20px 0"}}>
                                    <a href='https://www.effybuy.com/bizgam20/apps/baf.php/B_OS_BAF_USER_REGISTER/EDIT' style={{"textDecorationStyle":"none"}}>
                                        <button className='btn btn-primary'>Try Now</button>
                                    </a>
                                </div>
                            </th>
                            <th>
                                <div >STARTUP</div>
                                <div style={{"margin":"20px 0"}}>
                                    <a href='https://www.effybuy.com/bizgam20/apps/baf.php/B_OS_BAF_USER_REGISTER/EDIT' style={{"textDecorationStyle":"none"}}>
                                        <button className='btn btn-primary'>Try Now</button>
                                    </a>
                                </div>
                            </th>
                            <th>
                                <div >PROFESSIONAL</div>
                                <div style={{"margin":"20px 0"}}>
                                    <a href='https://www.effybuy.com/bizgam20/apps/baf.php/B_OS_BAF_USER_REGISTER/EDIT' style={{"textDecorationStyle":"none"}}>
                                        <button className='btn btn-primary'>Try Now</button>
                                    </a>
                                </div>
                            </th>
                            <th>
                                <div >ENTERPRISE</div>
                                <div style={{"margin":"20px 0"}}>
                                    <a href='https://www.effybuy.com/bizgam20/apps/baf.php/B_OS_BAF_USER_REGISTER/EDIT' style={{"textDecorationStyle":"none"}}>
                                        <button className='btn btn-primary'>Try Now</button>
                                    </a>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Monthly price</td>
                            <td><span className="txt-top">{this.state.symbol}</span><span className="txt-l">0</span></td>
                            <td><span className="txt-top">{this.state.symbol}</span><span className="txt-l">{this.state.monthlyStartupPrice}</span></td>
                            <td><span className="txt-top">{this.state.symbol}</span><span className="txt-l">{this.state.monthlyProfessionalPrice}</span></td>
                            <td><span className="txt-top">{this.state.symbol}</span><span className="txt-l">custom</span></td>
                        </tr>
                        <tr>
                            <td>Yearly price</td>
                            <td><span className="txt-top">{this.state.symbol}</span><span className="txt-l">0</span></td>
                            <td><span className="txt-top">{this.state.symbol}</span><span className="txt-l">{this.state.yearlyStartupPrice}</span></td>
                            <td><span className="txt-top">{this.state.symbol}</span><span className="txt-l">{this.state.yearlyProfessionalPrice}</span></td>
                            <td><span className="txt-top">{this.state.symbol}</span><span className="txt-l">custom</span></td>
                        </tr>
                        
                        <tr>
                            <td colSpan="5" className="sep">Transaction Features</td>
                        </tr>

                        <tr>
                            <td>Number Of RFQ's</td>
                            <td><span >3</span></td>
                            <td><span >5</span></td>
                            <td><span >7</span></td>
                            <td><span >unlimited</span></td>
                        </tr>

                        <tr>
                            <td>Number Of Reverse Auctions</td>
                            <td><span >0</span></td>
                            <td><span >1</span></td>
                            <td><span >3</span></td>
                            <td><span >unlimited</span></td>
                        </tr>
                        <tr>
                            <td>Number Of Forward Auctions</td>
                            <td><span >0</span></td>
                            <td><span >0</span></td>
                            <td><span >1</span></td>
                            <td><span >unlimited</span></td>
                        </tr>
                        <tr>
                            <td>Number Of Logistic Auctions</td>
                            <td><span >0</span></td>
                            <td><span >0</span></td>
                            <td><span >1</span></td>
                            <td><span >unlimited</span></td>
                        </tr>

                        <tr>
                            <td>Live Monitoring Of Auctions</td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>Quick Auction</td>
                            <td><span >0</span></td>
                            <td><span >0</span></td>
                            <td><span >3</span></td>
                            <td><span >unlimited</span></td>
                        </tr>

                        <tr>
                            <td>Manual Offers</td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>Participants online or offline check</td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td colSpan="5" className="sep">Supplier Features</td>
                        </tr>

                        <tr>
                            <td>Maximum Supplier Limit for Auction</td>
                            <td><span >0</span></td>
                            <td><span >5</span></td>
                            <td><span >10</span></td>
                            <td><span >unlimited</span></td>
                        </tr>

                        <tr>
                            <td>Live Messages to Suppliers during Auction</td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>Change Step up/ Down price during Auction Live</td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        {this.state.showCommonFeatures && <tr>
                            <td>User Manual & Videos</td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>}

                        <tr>
                            <td colSpan="5" className="sep">User Features</td>
                        </tr>

                        <tr>
                            <td>Buyer Group's Access to Buyer Accounts</td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>Maximum Buyers per account</td>
                            <td><span >0</span></td>
                            <td><span >1</span></td>
                            <td><span >2</span></td>
                            <td><span >unlimited</span></td>
                        </tr>


                        <tr>
                            <td colSpan="5" className="sep">Master Data Features</td>
                        </tr>

                        <tr>
                            <td>Maximum Item Upload Limit</td>
                            <td><span >10</span></td>
                            <td><span >25</span></td>
                            <td><span >100</span></td>
                            <td><span >unlimited</span></td>
                        </tr>

                        <tr>
                            <td>Maximum Supplier Upload Limit</td>
                            <td><span >5</span></td>
                            <td><span >10</span></td>
                            <td><span >30</span></td>
                            <td><span >unlimited</span></td>
                        </tr>

                        <tr>
                            <td>Storage Space of Documents Attached</td>
                            <td><span >10 MB</span></td>
                            <td><span >100 MB</span></td>
                            <td><span >500 MB</span></td>
                            <td><span >custom</span></td>
                        </tr>


                        <tr>
                            <td colSpan="5" className="sep">Add-Ons Features</td>
                        </tr>

                        {this.state.showCommonFeatures && <tr>
                            <td>Emails Notifications</td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>}

                        <tr>
                            <td>Auction OTP</td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        {this.state.showCommonFeatures && <tr>
                            <td>Notifications Activation</td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>}

                        <tr>
                            <td>Auto Report Emailers</td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="tickwithstar">&#10004;*</span></td>
                        </tr>

                        <tr>
                            <td>3rd Party API Integrations</td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="tickwithstar">&#10004;*</span></td>
                            <td><span className="tickwithstar">&#10004;*</span></td>
                        </tr>

                        <tr>
                            <td>Supplier URL Customizations</td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="tickwithstar">&#10004;*</span></td>
                            <td><span className="tickwithstar">&#10004;*</span></td>
                        </tr>

                        <tr>
                            <td>ASN Integrations</td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="tickwithstar">&#10004;*</span></td>
                            <td><span className="tickwithstar">&#10004;*</span></td>
                        </tr>

                        <tr>
                            <td>Barcode Integrations</td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="tickwithstar">&#10004;*</span></td>
                            <td><span className="tickwithstar">&#10004;*</span></td>
                        </tr>

                        <tr>
                            <td>Notification Message for Supplier Quotations</td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="tickwithstar">&#10004;*</span></td>
                            <td><span className="tickwithstar">&#10004;*</span></td>
                        </tr>

                        <tr>
                            <td colSpan="5" className="sep">Reports</td>
                        </tr>

                        {this.state.showCommonFeatures && <tr>
                            <td>Auction Saving Dashboard</td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>}
                        
                        <tr>
                            <td>Detailed Saving Report & Monthly History</td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                        <tr>
                            <td>Reports Downloads</td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span>pdf</span></td>
                            <td><span>pdf + excel</span></td>
                            <td><span>all formats</span></td>
                        </tr>

                        <tr>
                            <td>Custom Reports</td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>


                        <tr>
                            <td colSpan="5" className="sep">Support</td>
                        </tr>

                        {this.state.showCommonFeatures && <tr>
                            <td>Video Tutorials / User Manuals</td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>}

                        {this.state.showCommonFeatures && <tr>
                            <td>Activation / Trial Support</td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>}

                        <tr>
                            <td>Custom Support</td>
                            <td><span>Email</span></td>
                            <td><span>Email / Chat</span></td>
                            <td><span>Email / Chat / Phone</span></td>
                            <td><span>Dedicated Mobile</span></td>
                        </tr>

                        <tr>
                            <td>Dedicated Account Manager</td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="notick">&#10006;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                            <td><span className="tick">&#10004;</span></td>
                        </tr>

                    </tbody>
                </table>

                <br/>

                <div className="additional_cost">
                    <span>&#10004;*</span> : At Additional Cost
                </div>
                
            </div>
        )
    }
}
