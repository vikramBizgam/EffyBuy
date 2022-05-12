import React, { Component } from 'react'
import './ppt.css'
import { Modal, Button } from "react-bootstrap";
import image from './images/effybuy_ppt.png'
import emailjs from '@emailjs/browser';



export default class PPT extends Component {
    state={
        show1:false,
        show2:false,
        success:false,
        email:"",
        name: ""
    }

    infoChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClose1 = () => {
        this.setState({
            show1:false
        })
    };
    handleShow1 = () => {
        this.setState({
            show1:true
        })
    };
    handleClose2 = () => {
        this.setState({
            show2:false
        })
    };
    handleShow2 = () => {
        this.setState({
            show2:true
        })
    };
    handleCloseSuccess = () => {
        this.setState({
            success:false
        })
    };
    handleSubmit(e){
        e.preventDefault();
        emailjs.sendForm('service_h28clne', 'template_vrxq1v7', e.target, '_SkP_OebRj5Q-nHBw')
        // window.open('https://docs.google.com/presentation/d/1ehE_9To_bfxFK2pO7x9OS_ZGMV3yX-U9TZL0LVxMkEY/export?format=pdf','_blank');
        this.setState({
            show1:false,
            success:true
        })
        window.Email.send({
            Host : "smtp.gmail.com",
            Username : "support@bizgam.com",
            Password : "B1zG@m4u",
            // Username : "ai@bizgam.com",
            // Password : "florescer@2021",
            // Credential : true,
            To : this.state.email,
            From : "support@bizgam.com",
            Subject : "Effybuy : Download PPT",
            Body : "<html><strong><a href='https://docs.google.com/presentation/d/1ehE_9To_bfxFK2pO7x9OS_ZGMV3yX-U9TZL0LVxMkEY/export?format=pdf'>Click here</a></strong><em> to download the PPT.</em></html>"
        }).then(
          message => alert(`Mail has been sent ${message}`)
        );
    }
    render() {
        return (

            <div className="feature-blog-one" style={{"marginTop":"50px"}}>
            <div className="shapes shape-two"></div>
            <div className="shapes shape-three"></div>
                <div className="container">
                    <div className="row">
                        <div
                        className="col-lg-6 col-md-6"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                        >

                        <div className="knowledgesorce">
                            <img
                            src={image}
                            alt="media"
                            className="image-meta"
                            />
                            <h3>
                                Applying Intelligence to the Procurement Process
                            </h3>
                            <p style={{"marginTop":"20px"}}>
                                Smart Procurement tool to improve Profitability of your Business.
                            </p>
                            <div>
                                <button className="demo_case_study_individual_card_download_btn downloadbtn" onClick={this.handleShow1}>
                                    Download
                                </button>

                                <Modal
                                    show={this.state.show1}
                                    onHide={this.handleClose1}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton style={{"backgroundColor":"#ffeaa0","borderBottom":"0px"}}>
                                    <Modal.Title style={{"color":"black"}}>Download PPT</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className="vvvs" style={{"color":"black"}}>
                                        <div className="demo_case_study_modal_description">
                                            <div className="demo_case_study_modal_description_title">
                                                In this ppt you will discover...
                                            </div>
                                            <div className="demo_case_study_modal_description_points">
                                                <ul>
                                                    <li style={{"color":"black"}}>
                                                        EffyBuy at the heart of tomorrow's procurement - and today's.
                                                    </li>
                                                    <li style={{"color":"black"}}>
                                                        EffyBuy leveraging strategic inputs for procurement solutions.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="demo_case_study_modal_form">
                                            <form data-toggle="validator" onSubmit={(e)=>{this.handleSubmit(e)}}>
                                                <div className="form-group">
                                                    <input type="text" data-minlength="4" className="form-control" id="inputName"
                                                        data-error="Please enter atleast 4 words" placeholder="Name"
                                                        required name="name" value={this.state.name} onChange={(e)=>{this.infoChange(e)}}/>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                                <div className="form-group mt-3">
                                                    <input type="email" className="form-control" id="inputEmail" data-error="Please enter correct email address" 
                                                        pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email"
                                                         required name="email" value={this.state.email} onChange={(e)=>{this.infoChange(e)}}/>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                                <div className="form-group mt-3">
                                                    <input type="text" className="form-control" id="inputCompanyName" data-error="Please enter company name" 
                                                        placeholder="Company Name" required name="companyName"/>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                                <div className="form-group mt-3" style={{"display":"none"}}>
                                                    <input type="text" value="PPT is Downloaded" 
                                                         required name="subject"/>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                                <br/>
                                                <div className="form-group">
                                                    <button type="submit" className="download_popup_button">Download</button>
                                                </div>
                                            </form>
                                        </div>
                                    </Modal.Body>
                                </Modal>

                                {/* Download link send to email */}
                                <Modal
                                    show={this.state.success}
                                    onHide={this.handleCloseSuccess}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton style={{"backgroundColor":"#ffeaa0","borderBottom":"0px"}}>
                                    <Modal.Title style={{"color":"black"}}>PPT</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className="vvvs" style={{"color":"black"}}>
                                        <div className="demo_case_study_modal_description">
                                            <div className="demo_case_study_modal_description_title">
                                                Hello <b>{this.state.name}</b>, We sent you a link on <b>{this.state.email}</b>.<br/>
                                                If you do not see the email in a few minutes, check your “junk mail” folder or “spam” folder.
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                                {/* Download link send to email end*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

           
        )
    }
}
