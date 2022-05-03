import React,{ useEffect }  from "react";

// import Menu from '../components/navbar/Navbar'
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom";
import Header from '../components/header/Header'
import Blogs from '../components/Blogs/Blog'
import BlogStyle1 from "../components/Blogs/Blog1Style";
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
                <Route exact path="/Effybuy" component={HomePageContent} />
            </Switch>
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
                <Route exact path="/EffyBuy/resources/blogs" component={Blogs} />
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
                <Route exact path="/Effybuy/resources/webinars" component={Webinar} />
            </Switch>
            <Switch>
                <Route exact path="/Effybuy/resources/webinar/webinar_one" component={WebinarOne} />
            </Switch>

            <Switch>
                <Route exact path="/Effybuy/resources/videos" component={Videos} />
            </Switch>

            <Switch>
                <Route exact path="/Effybuy/resources/caseStudy" component={CaseStudy} />
            </Switch>


            {/* render={(props) => <PView {...props} />} */}
            <Switch>
            <Route exact key="ebook" path='/EffyBuy/resources/ebooks' >
                <KnowledgeSource location={location.pathname}/>
            </Route>
            </Switch>
            <Route exact key="ppt" path='/EffyBuy/resources/ppts'>
                <KnowledgeSource location={location.pathname}/>
            </Route>
            <Route exact key="case_study" path='/EffyBuy/resources/case_studies' >
                <KnowledgeSource location={location.pathname}/>
            </Route>
            <Route exact key="white_paper" path='/EffyBuy/resources/white_papers' >
                <KnowledgeSource location={location.pathname}/>
            </Route>

            <Route exact path='/EffyBuy/pricing/effybuy' component={PricingPage}></Route>

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
            
            
        {/* </Router> */}
      </>
    )
}

export default Routes;