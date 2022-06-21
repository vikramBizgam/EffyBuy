import React, { Component } from 'react'

export default class PricingCalculator extends Component {
    state = {
        auctionsArr: {
            index:0,
            noOfAuctions : [0,1,5,25,50,100],
            OriginalPriceOfAuctions : [0,1000,5000,25000,50000,100000],
            DiscountedPriceOfAuctions : [0,1000,4000,15000,25000,40000],
            DiscountOfAuctions : [0,0,20,40,50,60],
            PerRAPriceOfAuctions : [0,1000,800,600,500,40],
            feature :[['Maximum Item Upload Limit : 0','Maximum Supplier Upload Limit 0','Storage Space of Documents Attached 0MB','Auto Report Emailers','Custom Reports'],['feature 0','feature 1'],['feature 0','feature 1','feature 5'],['feature 0','feature 1','feature 5','feature 25'],['feature 0','feature 1','feature 5','feature 25','feature 50'],['feature 0','feature 1','feature 5','feature 25','feature 50','feature 100']]
    },
    rfqsArr: {
        index:0,
        noOfRFQs : [0,1,10,25,50,100,500,1000,1500],
        OriginalPriceOfRFQs : [0,100,1000,2500,5000,10000,50000,100000,150000],
        DiscountedPriceOfRFQs : [0,100,800,1750,3000,5000,20000,35000,45000],
        DiscountOfRFQs : [0,0,20,30,40,50,60,65,70],
        PerRAPriceOfRFQs : [0,100,80,70,60,50,40,35,30],
        feature :[['feature 0'],['feature 0','feature 1'],['feature 0','feature 1','feature 10'],['feature 0','feature 1','feature 10','feature 25'],['feature 0','feature 1','feature 10','feature 25','feature 50'],['feature 0','feature 1','feature 10','feature 25','feature 50','feature 100'],['feature 0','feature 1','feature 10','feature 25','feature 50','feature 100','feature 500'],['feature 0','feature 1','feature 10','feature 25','feature 50','feature 100','feature 500','feature 1000'],['feature 0','feature 1','feature 10','feature 25','feature 50','feature 100','feature 500','feature 1000','feature 1500']]
},
        auctions:0,
        auctionTotal:0,
        originalAucPrice:0,
        DiscOnAuc:0,
        rfq: 0,
        aucFea:[],
        rfqFea:[],
        rfqTotal:0,
        originalrfqPrice:0,
        DiscOnrfq:0,
        grandTotal:3000,
    }

    onChange(e){

    }

    onSelect(e){
        let {auctionTotal,rfqTotal } = this.state
        if(e.target.name === "auctions"){
            let index = e.target.value
            let { auctionsArr } = this.state
            let noOfAuc = auctionsArr.noOfAuctions[index]
            let DiscPrice = auctionsArr.DiscountedPriceOfAuctions[index]
            let DiscPercentPrice = auctionsArr.DiscountOfAuctions[index]
            let OriginalPrice = auctionsArr.OriginalPriceOfAuctions[index]
            let features = auctionsArr.feature[index]


            this.setState({
                auctions:noOfAuc,
                auctionTotal:DiscPrice,
                DiscOnAuc: DiscPercentPrice,
                originalAucPrice: OriginalPrice,
                grandTotal:DiscPrice + rfqTotal + 3000,
                aucFea:features
            })

        }else{
            let index = e.target.value
            let { rfqsArr } = this.state
            let noOfRFQ = rfqsArr.noOfRFQs[index]
            let DiscPrice = rfqsArr.DiscountedPriceOfRFQs[index]
            let DiscPercentPrice = rfqsArr.DiscountOfRFQs[index]
            let OriginalPrice = rfqsArr.OriginalPriceOfRFQs[index]
            let features = rfqsArr.feature[index]

            this.setState({
                rfq:noOfRFQ,
                rfqTotal:DiscPrice,
                originalrfqPrice:OriginalPrice,
                DiscOnrfq:DiscPercentPrice,
                grandTotal:auctionTotal + DiscPrice + 3000,
                rfqFea:features,
            })

        }

    }
  render() {
    return (
        <div style={{"padding":"200px"}}>
          <h2 style={{"textAlign":"center"}}>Pick & Drop Pricing Format for Enterprises</h2>
          <h4 style={{"textAlign":"center"}}>Base Price : 3000</h4>
      <div style={{"paddingTop":"50px","display":"flex","justifyContent":"space-evenly","alignItems":"center"}}>
          <div style={{}}>
              {/* <form > */}
              <div>
              <h3>Auctions</h3>
                    <label htmlFor="auctions">Choose auctions : </label>
                    <select name="auctions" id="auctions" onChange={(e)=>{this.onSelect(e)}}>
                        {this.state.auctionsArr.noOfAuctions.map((item, index) => {
                            return(
                                    <option value={index} key={index}>{item}</option>
                            )
                        })}
                    </select>
                    {this.state.auctions > 0 &&
                        <div style={{"color":"red","fontSize":"15px"}}>{this.state.auctions > 1 && <del>{this.state.originalAucPrice}</del>} {this.state.DiscOnAuc} % Discount on {this.state.auctions} Auctions </div>
                        }
                        {this.state.aucFea.map((item,index)=>{
                            return(
                                <div key={index}>{item}</div>
                            )
                        })}
                    <div style={{"fontWeight":"bold"}}>
                        Auction Price : {this.state.auctionTotal}
                    </div>
              </div>

                <hr/>

              <div>
              <h3>RFQs</h3>
                    <label htmlFor="rfq">Choose RFQs : </label>
                    <select name="rfq" id="rfq" onChange={(e)=>{this.onSelect(e)}}>
                    {this.state.rfqsArr.noOfRFQs.map((item, index) => {
                            return(
                                <option value={index} key={index}>{item}</option>
                            )
                        })}
                    </select>
                    {this.state.rfq > 0 &&
                        <div style={{"color":"red","fontSize":"15px"}}>{this.state.rfq > 1 && <del>{this.state.originalrfqPrice}</del>} {this.state.DiscOnrfq} % Discount on {this.state.rfq} RFQ </div>
                        }
                        {this.state.rfqFea.map((item,index)=>{
                            return(
                                <div key={index}>{item}</div>
                            )
                        })}
                    <div style={{"fontWeight":"bold"}}>
                        RFQs Price : {this.state.rfqTotal}
                    </div>
              </div>

                    {/* <br/>
                    <input type="submit" value="Submit"/> */}
                {/* </form> */}
                    {/* <hr/> */}
                {/* <div>auction {this.state.auctions} : {this.state.auctionTotal} </div> */}
                <div style={{"fontSize":"12px"}}>No carry forward with discount for Bulk Auctions & RFQs.</div>
          </div>

          <div>
              <h3>
              Grand Total : {this.state.grandTotal}
              </h3>
          </div>
      </div>
      </div>
    )
  }
}
