import React, { useState } from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from '../assets/img/fonder-logo.svg';
import androidDownload from '../assets/img/android-download.svg';
import appleDownload from '../assets/img/apple-download.svg';
import '../css/reset.css'
import '../css/main.css'

import { useMediaQuery } from 'react-responsive';



const Header = (active) =>{


    // media queries
    const isXMobile = useMediaQuery({
        query: '(max-width: 575px)' 
    });
    const isMobile = useMediaQuery({
        query: '(min-width: 576px) and (max-width:767px)' 
    });
    const isTablet = useMediaQuery({ 
        query: '(min-width: 768px) and (max-width:991px)' 
    });
    const isLaptop = useMediaQuery({
        query: '(min-width: 992px) and (max-width: 1199px)' 
    });
    const isDesktop = useMediaQuery({
        query: '(min-width: 1200px)'
    });


    const [nav, toggleNav] = useState(false);
    

    return(
        <div style={{maxWidth:'100vw'}}>

            {isXMobile && 
                <header className={window.location.pathname !== "/" ? "main-header nav-background": "main-header"}>

                <Link onClick={()=>toggleNav(false)} to="/"><h1><img alt="Fonder Logo" src={logo} className="main-logo" /></h1></Link>
                <div className={nav ? "nav-toggle open" : "nav-toggle"} onClick={() => !nav ? toggleNav(true) : toggleNav(false)}>
                    <div className="line one"></div>
                    <div className="line two"></div>
                    <div className="line three"></div>
                </div>
                <nav className={nav ? "gb-nav open" : "gb-nav"}>
                    <ul>
                        <li><Link className="nav-link" to="/submission" onClick={()=>toggleNav(false)}>Submission</Link></li>
                        <li><Link className="nav-link" to="/support" onClick={()=>toggleNav(false)}>Support/FAQ</Link></li>
                    </ul>
                    <div className='mobileApp'>
                        <h4 className="downloadText">Download the App</h4>
                        <div className='mobileDownloadApp'>
                            <img alt="Android Download " src={androidDownload}/>
                            <img alt="Apple Download" src={appleDownload}/>
                        </div>

                        <a target="_blank"href="https://www.freeprivacypolicy.com/live/d960234f-ec44-414e-9cb4-a2317ce42913">Privacy Policy</a>
                    </div>
                </nav>
            </header>
            }
            
            {isMobile &&
                <header className={window.location.pathname !== "/" ? "main-header mobile nav-background": "main-header mobile"}>

                <Link onClick={()=>toggleNav(false)} to="/"><h1><img alt="Fonder Logo" src={logo} className="main-logo mobile" /></h1></Link>
                <div className={nav ? "nav-toggle mobile open" : "nav-toggle mobile"} onClick={() => !nav ? toggleNav(true) : toggleNav(false)}>
                    <div className="line one"></div>
                    <div className="line two"></div>
                    <div className="line three"></div>
                </div>
                <nav className={nav ? "gb-nav mobile open" : "gb-nav mobile"}>
                    <ul>
                        <li>
                            <NavLink 
                                className="nav-link" 
                                to="/submission" 
                                exact
                                onClick={()=>toggleNav(false)}>
                                Submission
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className="nav-link" 
                                to="/support" 
                                exact
                                onClick={()=>toggleNav(false)}>
                                Support/FAQ
                            </NavLink></li>
                    </ul>
                    <div className='mobileApp mobile'>
                        <h4 className="downloadText mobile">Download the App</h4>
                        <div className='mobileDownloadApp mobile'>
                            <img alt="Android Download" src={androidDownload}/>
                            <img alt="Apple Download" src={appleDownload}/>
                        </div>

                        <a target="_blank"href="https://www.freeprivacypolicy.com/live/d960234f-ec44-414e-9cb4-a2317ce42913">Privacy Policy</a>
                    </div>
                </nav>
            </header>
            }

            {isTablet &&
                <header className={window.location.pathname !== "/" ? "main-header nav-background tablet": "main-header tablet"}>

                <Link onClick={()=>toggleNav(false)} to="/"><h1><img alt="Fonder Logo" src={logo} className="main-logo tablet" /></h1></Link>
                <div className={nav ? "nav-toggle open" : "nav-toggle"} onClick={() => !nav ? toggleNav(true) : toggleNav(false)}>
                    <div className="line one"></div>
                    <div className="line two"></div>
                    <div className="line three"></div>
                </div>
                <nav className={nav ? "gb-nav open tablet" : "gb-nav tablet"}>
                    <ul>
                        <li>
                            <NavLink 
                                className="nav-link" 
                                activeClassName="nav-link active"
                                exact
                                to="/submission" 
                                onClick={()=>toggleNav(false)}>
                                Submission
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className="nav-link"
                                activeClassName="nav-link active" 
                                exact
                                to="/support" 
                                onClick={()=>toggleNav(false)}>
                                    Support/FAQ
                            </NavLink>
                        </li>
                    </ul>
                    <div className='mobileApp tablet'>
                        <h4 className="downloadText tablet">Download the App</h4>
                        <div className='mobileDownloadApp tablet'>
                            <img alt="Android Download" src={androidDownload}/>
                            <img alt="Apple Download" src={appleDownload}/>
                        </div>

                        <a target="_blank"href="https://www.freeprivacypolicy.com/live/d960234f-ec44-414e-9cb4-a2317ce42913">Privacy Policy</a>
                    </div>
                </nav>
            </header>
            }
            {isLaptop &&
                <header className='main-header nav-background laptop'>
                    <Link to="/"><h1><img alt="Fonder Logo" src={logo} className="main-logo laptop" /></h1></Link>
                    <nav className='gb-nav laptop'>
                        <ul>
                            <li>
                                <NavLink 
                                    className="nav-link laptop"
                                    activeClassName="nav-link laptop active"
                                    exact
                                    to="/support"
                                    onClick={()=>toggleNav(false)}>
                                        Support/FAQ
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    className="nav-link laptop"
                                    activeClassName="nav-link laptop active"
                                    exact
                                    to="/submission" 
                                    onClick={()=>toggleNav(false)}>
                                        Submission
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
            }
            {isDesktop &&
                <header className='main-header nav-background desktop'>
                    <Link to="/"><h1><img alt="Fonder Logo" src={logo} className="main-logo desktop" /></h1></Link>
                    <nav className='gb-nav desktop'>
                        <ul>
                            <li>
                                <NavLink 
                                    className="nav-link desktop" 
                                    activeClassName="nav-link desktop active" 
                                    exact 
                                    to="/support" 
                                    onClick={()=>toggleNav(false)}>
                                    Support/FAQ
                                </NavLink></li>
                            <li>
                                <NavLink 
                                    className="nav-link desktop" 
                                    activeClassName="nav-link desktop active" 
                                    exact 
                                    to="/submission" 
                                    onClick={()=>toggleNav(false)}>
                                    Submission
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
            }

            </div>
    )
}
export default Header
