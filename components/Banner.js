import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import androidDownload from '../assets/img/android-download.svg';
import appleDownload from '../assets/img/apple-download.svg';
import bannerPeople from '../assets/img/hero-image.png';
import '../css/reset.css'
import '../css/main.css'



const Banner = (active) => {

    // media queries
    const isXMobile = useMediaQuery({
        query: '(min-width: 280px) and (max-width: 575px)'
    });
    const isMobile = useMediaQuery({
        query: '(min-width: 576px) and (max-width: 767px)'
    });
    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 991px)'
    })
    const isLaptop = useMediaQuery({
        query: '(min-width: 992px) and (max-width: 1199px)'
    })
    const isDesktop = useMediaQuery({
        query: '(min-width: 1200px)'
    })


    return (
        <div style={{ maxWidth: '100vw' }}>
            {isXMobile &&
                <section className='banner'>
                    <div className='left-col'>
                        <h2>Can't decide what to eat? Just Swipe.</h2>
                        <p>Have you ever felt frustrated and indecisive when deciding what to eat? Fonder can help with that. We feed your eyes first.</p>
                        <div className='hero-download' >
                            <a href="#"><img alt="Android Download" className="android-btn" src={androidDownload} /></a>
                            <a href="#"><img alt="Apple Download" className='apple-btn' src={appleDownload} /></a>
                        </div>
                    </div>
                    <img className='right-col home-banner-img' alt="Banner Image" src={bannerPeople} />
                </section>
            }
            {isMobile &&
                <section className='banner mobile'>
                    <div className='banner-wrapper'></div>
                    <div className='left-col'>
                        <h2>Can't decide what to eat? Just Swipe.</h2>
                        <p>Have you ever felt frustrated and indecisive when deciding what to eat? Fonder can help with that. We feed your eyes first.</p>
                        <div className='hero-download' >
                            <a href="#"><img alt="Android Download" className="android-btn" src={androidDownload} /></a>
                            <a href="#"><img alt="Apple Download" className='apple-btn' src={appleDownload} /></a>
                        </div>
                    </div>
                    <img className='right-col home-banner-img' alt="Banner Image" src={bannerPeople} />
                </section>
            }
            {isTablet &&
                <section className='banner tablet'>
                    <div className='left-col'>
                        <h2>Can't decide what to eat? Just Swipe.</h2>
                        <p>Have you ever felt frustrated and indecisive when deciding what to eat? Fonder can help with that. We feed your eyes first.</p>
                        <div className='hero-download' >
                            <a href="#"><img alt="Android Download" className="android-btn" src={androidDownload} /></a>
                            <a href="#"><img alt="Apple Download" className='apple-btn' src={appleDownload} /></a>
                        </div>
                    </div>
                    <img className='right-col home-banner-img' alt="Banner Image" src={bannerPeople} />
                </section>
            }
            {isLaptop &&
                <section className='banner laptop'>
                    <div className='left-col'>
                        <h2>Can't decide what to eat? Just Swipe.</h2>
                        <p>Have you ever felt frustrated and indecisive when deciding what to eat? Fonder can help with that. This Tinder-like food app will feed your eyes first with images of different dishes and from there show the different restaurants that have it. Make a quick reservation with OpenTable or have it delivered to you.  </p>
                        <div className='hero-download' >
                            <a href="#"><img alt="Android Download" className="android-btn" src={androidDownload} /></a>
                            <a href="#"><img alt="Apple Download" className='apple-btn' src={appleDownload} /></a>
                        </div>
                    </div>
                    <div className='right-col '>
                        <img alt="Fonder Image" className='home-banner-img' src={bannerPeople} />
                    </div>
                </section>
            }
            {isDesktop &&
                <section className='banner desktop'>
                    <div className='banner-wrapper'></div>
                    <div className='left-col'>
                        <h2>Can't decide what to eat? Just Swipe.</h2>
                        <p>Have you ever felt frustrated and indecisive when deciding what to eat? Fonder can help with that. This Tinder-like food app will feed your eyes first with images of different dishes and from there show the different restaurants that have it. Make a quick reservation with OpenTable or have it delivered to you.  </p>
                        <div className='hero-download' >
                            <a href="#"><img alt="Android Download" className="android-btn" src={androidDownload} /></a>
                            <a href="#"><img alt="Apple Download" className='apple-btn' src={appleDownload} /></a>
                        </div>
                    </div>
                    <div className='right-col '>
                        <img className='home-banner-img' alt="Banner Image" src={bannerPeople} />
                    </div>
                </section>
            }
        </div>
    )
}
export default Banner


