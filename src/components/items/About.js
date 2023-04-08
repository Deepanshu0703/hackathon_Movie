import React from 'react'
import "./About.css";
import Banner from './Banner';
import Footer from './Footer';
const About = () => {
  return (
    <>
    <Banner/>
        <div className="container About">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">About Us</h1>
                     <ul>
                     <li> time-saving & easy to use</li>
                     <li>  free & no registration</li>
                     <li>  watch trailers directly</li>
                        <li>  only high-quality movies</li>
                        <li>  special recommendations for movie dates</li>
                        <li>  special categories (e.g. movies based on true stories, wedding movies …)</li>
                        </ul>
                </div>
            </div>
        </div>
        <Footer/>

    </>
  )
}

export default About