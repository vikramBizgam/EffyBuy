import React, { Component } from 'react'
import './ebooks.css'
import { Modal } from "react-bootstrap";
import image from '../../Blogs/Blog_images/common_challenges.png'


export default class Ebooks extends Component {
    state={
        show1:false,
        show2:false,
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
                                Remote Working Guide
                            </h3>
                            <p style={{"marginTop":"20px"}}>
                                This ebook provides you detailed guide on simplifying negotiations can simplify your entire supply 
                                chain process. This covers how to implement steps and methods across the various activities involved 
                                into the process. Also how automating RFQs process can enable to get 100s of orders in a day. 
                                This shows how to negotiate and be on 10/10 results always with the simplified tool.  
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
                                    <Modal.Title style={{"color":"black"}}>Download E-book</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className="vvvs" style={{"color":"black"}}>
                                        <div className="demo_case_study_modal_description">
                                            <div className="demo_case_study_modal_description_title">
                                                In this ebook you will discover
                                            </div>
                                            <div className="demo_case_study_modal_description_points">
                                                <ul>
                                                    <li style={{"color":"black"}}>
                                                        Procurement leaders and experts mention that to radically simplify procurement 
                                                        business models is essential and it is required now!
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="demo_case_study_modal_form">
                                            <form data-toggle="validator">
                                                <div className="form-group">
                                                    <input type="text" data-minlength="4" className="form-control" id="inputName"
                                                        data-error="Please enter atleast 4 words" placeholder="Name"
                                                        required />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                                <div className="form-group mt-3">
                                                    <input type="email" className="form-control" id="inputEmail" data-error="Please enter correct email address" 
                                                        pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email" required/>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                                <div className="form-group mt-3">
                                                    <input type="text" className="form-control" id="inputCompanyName" data-error="Please enter company name" 
                                                        placeholder="Company Name" required/>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            
        )
    }
}
