import React from "react";
import { Link } from "react-router-dom";
import landing from './images/e-learning.jpg';

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
            <div className='row'>
                <div className="col-10 mx-auto">
                    <div className="row ">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>improve your skills and knowledge with <strong className="brand-name">ALLeMNI</strong>
                        </h1>
                        <h2 className="my-3">
                            We are the platform that you need
                        </h2>
                        <div className="mt-3">
                        <Link to="/signup" >  
                        <button className="btn btn-outline-success" type="submit">Get Started</button>
                        </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={landing} className="img-fluid-animated" alt="home img"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home;