import React,{ useEffect }  from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Switch, useLocation, Redirect} from "react-router-dom";
import Header from '../components/header/Header'
import Blogs from '../components/Blogs/Blog'
import BlogOne from '../components/Blogs/Blog_1'
import BlogTwo from '../components/Blogs/Blog_2'
import BlogThree from '../components/Blogs/Blog_3'
import Blogfour from '../components/Blogs/Blog_4'
import Blogfive from '../components/Blogs/Blog_5'
import BlogSix from '../components/Blogs/Blog_6'
import BlogSeven from '../components/Blogs/Blog_7'
import BlogEight from '../components/Blogs/Blog_8'
import BlogNine from '../components/Blogs/Blog_9'
import KnowledgeSource from '../components/Knowledge Source/KnowledgeSource'
import PricingPage from '../components/PricingPage/Pricing'
import HomePageContent from "../components/HomePage/HomePageContent";
import Footer from "../components/Footer/Footer";
import PrivacyPolicy from '../components/TermsAndPrivacy/PrivacyPolicy'
import TermsAndConditions from '../components/TermsAndPrivacy/TermsAndConditions'
import AboutUs from '../components/AboutUs/Aboutus'
import EffySell from "../components/EffySell/EffySell";
import Logistics from "../components/Logistics/Logistics";
import Rfq from '../components/RFQ/Rfq'
import ReverseAuction from "../components/ReverseAuction/ReverseAuction";
import Thankyou from '../components/CalendlyConformation/Thankyou'
import Webinar from '../components/Webinars/Webinar'
import WebinarOne from '../components/Webinars/Webinar_1'
import CaseStudy from '../components/Knowledge Source/DemoCaseStudy/DemoCaseStudy'
import Videos from '../components/Videos/Videos'
import PricingCalculator from "../components/PricingCalculator/PricingCalculator";
import EnterprisePlan from "../components/EnterprisePlan/EnterprisePlan";
import PPT from '../components/Knowledge Source/PPT/PPT'
import NotFound from "../components/NotFound/Notfound";



    
const Routes = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    let location = useLocation()
    return (
      <>
        {/* <Router> */}
            <Switch>
                <Route path="/" component={Header} />
            </Switch>
            <Switch>
                <Route exact path="/" component={HomePageContent} />
            </Switch>
            <Switch>
                <Route exact path="/EffyBuy" component={HomePageContent} />
            </Switch>
            {/* <Switch>
                <Redirect to="/EffyBuy/404"  />
            </Switch> */}
            <Switch>
                <Route exact path="/EffyBuy/EffySell" component={EffySell} />
            </Switch>
            <Switch>
                <Route exact path="/EffyBuy/Logistics" component={Logistics} />
            </Switch>
            <Switch>
                <Route exact path="/EffyBuy/rfq" component={Rfq} />
            </Switch>
            <Switch>
                <Route exact path="/EffyBuy/reverseAuction" component={ReverseAuction} />
            </Switch>
            <Switch>
                <Route exact path="/EffyBuy/resources/blogs">
                    <div className="feature-blog-one blog-page-bg"><Blogs/></div>
                </Route>
            </Switch>
            <Switch>
                <Route exact path="/EffyBuy/resources/blog/blog_one" component={BlogOne} />
            </Switch>
            <Switch>
                <Route exact path="/Effybuy/resources/blog/blog_two" component={BlogTwo} />
            </Switch>
            <Switch>
                <Route exact path="/Effybuy/resources/blog/blog_three" component={BlogThree} />
            </Switch>
            <Switch>
                <Route exact path="/Effybuy/resources/blog/blog_four" component={Blogfour} />
            </Switch>
            <Switch>
                <Route exact path="/Effybuy/resources/blog/blog_five" component={Blogfive} />
            </Switch>
            <Switch>
                <Route exact path="/Effybuy/resources/blog/blog_six" component={BlogSix} />
            </Switch>
            <Switch>
                <Route exact path="/Effybuy/resources/blog/blog_seven" component={BlogSeven} />
            </Switch>
            <Switch>
                <Route exact path="/Effybuy/resources/blog/blog_eight" component={BlogEight} />
            </Switch>
            <Switch>
                <Route exact path="/Effybuy/resources/blog/blog_nine" component={BlogNine} />
            </Switch>

            <Switch>
                <Route exact path="/Effybuy/resources/webinars">
                    <div className="feature-blog-one blog-page-bg"><Webinar/></div>
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/Effybuy/resources/webinar/webinar_one" component={WebinarOne} />
            </Switch>

            <Switch>
                <Route exact path="/Effybuy/resources/videos" component={Videos} />
            </Switch>


            <Switch>
                <Route exact path="/Effybuy/resources/ppts" ><div className="knowledge_source_main_div"><PPT/></div></Route>
            </Switch>

            <Switch>
                <Route exact path="/Effybuy/resources/caseStudy" ><div className="knowledge_source_main_div"><CaseStudy/></div></Route>
            </Switch>

            <Switch>
                <Route exact path="/Effybuy/calc" component={PricingCalculator} />
            </Switch>


            <Switch>
            <Route exact path='/EffyBuy/resources' >
                <KnowledgeSource location={location.pathname}/>
            </Route>
            </Switch>
            <Switch>
            <Route exact key="ebook" path='/EffyBuy/resources/blog' >
                <KnowledgeSource location={location.pathname}/>
            </Route>
            </Switch>
            <Route exact key="ppt" path='/EffyBuy/resources/ppt'>
                <KnowledgeSource location={location.pathname}/>
            </Route>
            <Route exact key="case_study" path='/EffyBuy/resources/case_studies' >
                <KnowledgeSource location={location.pathname}/>
            </Route>
            <Route exact key="white_paper" path='/EffyBuy/resources/webinar' >
                <KnowledgeSource location={location.pathname}/>
            </Route>

            <Route exact path='/EffyBuy/pricing/effybuy' component={PricingPage}></Route>

            {/* <Switch>
                <Route exact path="/EffyBuy/404" component={NotFound} />
            </Switch> */}

            <Switch>
                <Route exact path="/EffyBuy/privacyPolicy" component={PrivacyPolicy} />
            </Switch>
            <Switch>
                <Route exact path="/EffyBuy/TermsAndConditions" component={TermsAndConditions} />
            </Switch>
            <Switch>
                <Route exact path="/EffyBuy/about_us" component={AboutUs} />
            </Switch>
            <Switch>
                <Route exact path="/EffyBuy/calendly_conformation" component={Thankyou} />
            </Switch>
            <Switch>
                <Route path="/" component={Footer} />
            </Switch>
            
            {/* <Switch>
                <Redirect to="/EffyBuy/404"  />
            </Switch> */}
            

        {/* <Switch>
            <Route path="/" component={Header} />
        </Switch>

        <Switch>
            <Route exact path="/" component={HomePageContent} />
            <Route exact path="/EffySell" component={EffySell} />
            <Route exact path="/freight-forwarder-software" component={Logistics} />
            <Route exact path="/rfp-rfq-software" component={Rfq} />
            <Route exact path="/reverse-auction-software" component={ReverseAuction} />
            <Route exact path="/blogs">
                <div className="feature-blog-one blog-page-bg">
                    <div className='title-style-seven text-center'>
                        <h1 >
                            Blogs
                        </h1>
                    </div>
                    <Blogs/>
                </div>
            </Route>
            <Route exact path="/blogs/blog_one" component={BlogOne} />
            
            <Route exact path="/blogs/blog_two" component={BlogTwo} />
        
            <Route exact path="/blogs/blog_three" component={BlogThree} />
        
            <Route exact path="/blogs/blog_four" component={Blogfour} />
        
            <Route exact path="/blogs/blog_five" component={Blogfive} />
        
            <Route exact path="/blogs/blog_six" component={BlogSix} />
        
            <Route exact path="/blogs/blog_seven" component={BlogSeven} />
            <Route exact path="/blogs/blog_eight" component={BlogEight} />
            
            <Route exact path="/blogs/blog_nine" component={BlogNine} />
        
            <Route exact path="/webinars">
                <div className="feature-blog-one blog-page-bg">
                    <div className='title-style-seven text-center'>
                        <h1 >
                            Our Webinar
                        </h1>
                    </div>
                    <Webinar/>
                </div>
            </Route>

            <Route exact path="/webinars/webinar_one" component={WebinarOne} />
           
            <Route exact path="/videos" component={Videos} />
        
            <Route exact path="/ppts" >
                <div className="knowledge_source_main_div">
                    <div className='title-style-seven text-center'>
                        <h1 >
                            Presentations
                        </h1>
                    </div>        
                    <PPT/>
                </div>
            </Route>
        
            <Route exact path="/casestudy" >
                <div className="knowledge_source_main_div">
                    <div className='title-style-seven text-center'>
                        <h1 >
                            Case Study
                        </h1>
                    </div>  
                    <CaseStudy/>
                </div>
            </Route>
        
            <Route exact path="/Effybuy/calc" component={PricingCalculator} />

            <Route exact path="/ent" component={EnterprisePlan} />

            <Route exact path='/resources' >
                <KnowledgeSource location={location.pathname}/>
            </Route>
            
            <Route exact key="ebook" path='/resources/blog' >
                <KnowledgeSource location={location.pathname}/>
            </Route>
            <Route exact key="ppt" path='/resources/ppt'>
                <KnowledgeSource location={location.pathname}/>
            </Route>
            <Route exact key="case_study" path='/resources/case_studies' >
                <KnowledgeSource location={location.pathname}/>
            </Route>
            <Route exact key="white_paper" path='/resources/webinar' >
                <KnowledgeSource location={location.pathname}/>
            </Route>
            <Route exact path='/pricing' component={PricingPage}></Route>
            <Route exact path="/404" component={NotFound} />
            
            <Route exact path="/privacyPolicy" component={PrivacyPolicy} />
        
            <Route exact path="/TermsAndConditions" component={TermsAndConditions} />
        
            <Route exact path="/EffyBuy/about_us" component={AboutUs} />
        
            <Route exact path="/EffyBuy/calendly_conformation" component={Thankyou} />
        
            <Redirect to="/404"  />
        </Switch>

        <Switch>
            <Route path="/" component={Footer} />

        </Switch> */}
            
        {/* </Router> */}
      </>
    )
}

export default Routes;