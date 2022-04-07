import * as React from 'react';
import { useMediaQuery } from 'react-responsive';

import '../css/reset.css'
import '../css/main.css'
import banner from '../assets/img/submission-banner.png'

const SubmissionBanner = () =>{

    // MEDIA QUERIES
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

    return(
        <div style={{flexBasis:'50%'}}>
        {isXMobile &&
            <section className='submission-banner'>
                <img src={banner} alt="Banner" />
            </section>
        }
        {isMobile &&
            <section className='submission-banner mobile'>
               
                <img src={banner} alt="Banner" />
            </section>
        }
        {isTablet &&
            <section className='submission-banner tablet'>
                <img src={banner} alt="Banner" />
            </section>
        }
        {isLaptop &&
            <section className='submission-banner laptop'>
                <img src={banner} alt="Banner" />
            </section>
        }
        {isDesktop &&
            <section className='submission-banner desktop'>
                <img src={banner} alt="Banner" />
            </section>
        }
        </div>
    )
}
export default SubmissionBanner
