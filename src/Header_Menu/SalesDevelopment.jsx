import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";


import HeroImage from '../Logo/hero-img.png';

import './SalesDevelopment.css';
import LogoCarousel from "./LogoCarousel";
import { useEffect, useRef } from "react";


function SalesDevelopment({openPopup}) {

    const imgRef = useRef(null)

    useEffect(() => {
        const handleImgScroll = () => {
            const scrollY = window.scrollY;
            if(imgRef.current) {
                imgRef.current.style.transform = `translateY(-${scrollY * 0.3}px)`;
            }
        };
        window.addEventListener("scroll", handleImgScroll);
        return () => window.removeEventListener("scroll", handleImgScroll);
    }, []);


    return (
        <>

            {/* Hero Container  */}
            <div className='hero_section'>
                <div className="sub_section">
                    <div className="text_content">
                        <h1>Qualified Sales Meetings</h1>
                        <h2>Complete GTM System. Month-to-Month. Performance-Based.</h2>
                        <h3>Launch outbound and inbound campaigns in 5 days with our expert team. Take over your SDRs and system anytime. Transparent per-meeting pricing keeps us aligned on results.</h3>
                        
                        <div className='btn_container'>
                            <button onClick={openPopup} className="btn"> Start building your pipeline today. </button>
                        </div>

                    </div>
                    <div className="hero_image">
                        <img ref={imgRef} src={HeroImage} alt="Hero Image" />
                    </div>
                </div>
            </div>



            {/* 🔥Scond Carousel Container Start with swiper */}

            <div className="second_container_new">
                <div className="second_sub_Container_new">
                    <div className="text_info">
                        <h1 className='second_title'>Our Expertise Drives Your Success.</h1>
                        <h2 className='second_sub_title'>From precise targeting to seamless execution, we connect you with decision-makers and drive measurable results.</h2>
                    </div>
                </div>
            </div >

            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                loop={false}
                // loopAdditionalSlides={3}
                autoplay={{
                    // delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Autoplay]}
                className="carousel_container_new"
            >

                <SwiperSlide>
                    <div className="box_info">
                        <h1>SDR <br /> Teams</h1>
                        <p>
                            Scale your outreach with AI-powered and human-enhanced SDR
                            services, giving your sales team time to focus on closing deals.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="box_info">
                        <h1>Inbound  <br /> Optimization</h1>
                        <p>
                            Smart targeting and data-driven outreach that delivers excellent
                            pipeline performance.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="box_info">
                        <h1>Scaled <br /> Outbound</h1>
                        <p>
                            From cold emails to targeted campaigns, we handle all aspects of outbound engagement, ensuring high-volume reach to thousands of prospects while maintaining compliance and efficiency.
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="box_info">
                        <h1>Audience <br /> Data Solutions</h1>
                        <p>
                            Connect with the right personas across every channel. We use robust data sets to precisely identify and engage your ideal customers.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* 🔥Thired Logo Slider Container Start with swiper */}

            <LogoCarousel />


            {/* 🔥Fourth Container Start ...........................*/}

            <div className="fourth_title">
                <h1>Why Choose CIENCE?</h1>
            </div>
            <div className="fourth-main-container">
                <div className="fourth-first-sub-container">
                    <div className="cards-container-one">
                        <img src='/cardsicons/target-icon-light.svg' alt="Icon" />
                        <h1>Precision Targeting</h1>
                        <p>Drive engagement rates up by reaching only the most relevant prospects at the right time. Our advanced data solutions ensure your outreach is always relevant, leading to higher conversions.</p>
                    </div>
                    <div className="cards-container-one">
                        <img src='/cardsicons/flow-icon-light.svg' alt="Icon" />
                        <h1>Unified Go-to-Market Execution</h1>
                        <p>Align your sales and marketing initiatives to drive tangible outcomes. From strategy to execution, we ensure every effort contributes to real business growth, making your department more effective and efficient.</p>
                    </div>
                    <div className="cards-container-one">
                        <img src='/cardsicons/icon-Outbound-SDR-dark.svg' alt="Icon" />
                        <h1>Programmatic Outbound</h1>
                        <p>Reach tens of thousands to millions of contacts each month through streamlined, automated outbound campaigns. Our approach delivers results at scale while reducing costs and maximizing efficiency.</p>
                    </div>
                </div>

                <div className="fourth-first-sub-container">
                    <div className="cards-container-one">
                        <img src='/cardsicons/AI-user-icon-light.svg' alt="Icon" />
                        <h1>AI + Human Expertise</h1>
                        <p>Humans and AI work together seamlessly—while the human orchestrates, AI personalizes and executes at scale, ensuring every outreach is both strategic and highly effective.</p>
                    </div>
                    <div className="cards-container-one">
                        <img src='/cardsicons/icon-Data-Solutions-dark.svg' alt="Icon" />
                        <h1>Enterprise SDR Solutions</h1>
                        <p>Scalable and effective solutions designed for large teams. In addition to our other services, companies can hire hundreds of SDRs with us to execute inbound and outbound programs, ensuring broad and efficient coverage.</p>
                    </div>
                    <div className="cards-container-one">
                        <img src='/cardsicons/icon-local-data-dark.svg' alt="Icon" />
                        <h1>Local Solutions</h1>
                        <p>Tailored approaches to connect with local businesses. We leverage our expertise in executing outbound strategies to local markets at scale, ensuring precision and delivering outcomes that reach the right decision-makers effectively.</p>
                    </div>

                </div>

                <div style={{ paddingTop: "40px" }} className='btn_container'>
                    <button className="btn"> Learn More </button>
                </div>

            </div>




            {/* 🔥Fifth Container Start ...........................*/}


            <div className="fifth_container_new">
                <div className="fifth_title">
                    <h1 className='second_title'>Choose The Best - CIENCE is #1.</h1>
                    <p className='second_sub_title'>CIENCE achieves the highest ranking for its ability to deliver lead generation services. <br /> Our position as a market leader is built on our dedication to precision, efficiency, and results.</p>
                </div>
                <div className="fifth_images">
                    <img src='/clutch-leaders.svg' alt="" />
                    <img src='/clutch-leader-matrix.svg' alt="" />
                </div>
            </div >


            {/* 🔥Sixth Container Start ...........................*/}


            <div className="sixth_container">
                <div className="fifth_title">
                    <h1 className='second_title'>The Reviews Are In</h1>
                    <p className='second_sub_title'>Witness customer growth, powered by CIENCE:</p>
                </div>
                <div className="Sixth_images_main_container">
                    <div className="clientslogos">
                        <div>
                            <img src='/clientsLogos/upcity.svg' alt="upcity" />
                            <img src='/clientsLogos/4.8.svg' alt="" />
                            <h3>4.8 out of 5 stars</h3>
                        </div>
                        <div>
                            <img src='/clientsLogos/clutch.svg' alt="clutch" />
                            <img src='/clientsLogos/4.4.svg' alt="" />
                            <h3>4.4 out of 5 stars</h3>
                        </div>
                        <div>
                            <img src='/clientsLogos/crowdreviews.svg' alt="crowdreviews" />
                            <img src='/clientsLogos/4.8.svg' alt="" />
                            <h3>4.3 out of 5 stars</h3>
                        </div>
                        <div>
                            <img src='/clientsLogos/goodfirms.svg' alt="goodfirms" />
                            <img src='/clientsLogos/4.8.svg' alt="" />
                            <h3>4.8 out of 5 stars</h3>
                        </div>
                    </div>


                    <div className="clientslogos">
                        <div>
                            <img src='/clientsLogos/G2_Logo_Red_RGB 1.svg' alt="G2_Logo_Red_RGB 1" />
                            <img src='/clientsLogos/4.0.svg' alt="" />
                            <h3>4.0 out of 5 stars</h3>
                        </div>
                        <div>
                            <img src='/clientsLogos/trustradius.svg' alt="trustradius" />
                            <img src='/clientsLogos/4.3.svg' alt="" />
                            <h3>4.3 out of 5 stars</h3>
                        </div>
                        <div>
                            <img src='/clientsLogos/google.svg' alt="google" />
                            <img src='/clientsLogos/4.0.svg' alt="" />
                            <h3>4.0 out of 5 stars</h3>
                        </div>
                        <div>
                            <img src='/clientsLogos/Gartner.png' alt="Gartner" style={{ maxHeight: '50px' }} />
                            <img src='/clientsLogos/4.1.svg' alt="" />
                            <h3>4.1 out of 5 stars</h3>
                        </div>
                    </div>
                </div>
            </div >


            {/* 🔥Seventh Container Start ............................................................ */}

            <div className="seventh_container">
                <div className="seventh_img">
                    <img src="/AI-and-Human-Capabilities-Combined.png" alt="" />

                </div>

                <div className="seventh_content">
                    <h1>AI and Human Capabilities Combined</h1>
                    <p style={{ fontSize: '16px' }}>Our outbound SDR services are a true collaboration
                        between cutting-edge AI technology and skilled human
                        SDRs, ensuring your prospects receive the right level of
                        engagement at every step of the process.</p>
                    <div className='btn_container'>
                        <button onClick={openPopup} className="btn"> EXPLORE SOLUTIONS </button>
                    </div>
                </div>

            </div>


            {/* 🔥Eight Container  Start ............................................................ */}

            <div className="seventh_container">

                <div className="seventh_content">
                    <h1>Our Proven Process</h1>
                    <p style={{ fontSize: '16px', maxWidth: '85%' }}>We begin by learning and analyzing your business needs, understanding you unique challenges, and identifying opportunities that can unlock growth. This deep understanding allows us to craft a tailored solution—whether it's a human-focused SDR program, a scaled outbound strategy, a fully automated AI solution, or a combination that directly addresses your specific pain points.</p>


                    <div className="listsgroup">
                        <div className="bullet-container">
                            <div className="sub-bullet">
                                <span className="bullet">&gt;</span>
                            </div>
                            <div className="Content-text">
                                <h2 className="title">Exceute</h2>
                                <p>
                                    We handle the execution of the right program, utilizing our AI systems and human expertise to connect with prospects across channels and ensure impactful engagements.
                                </p>
                            </div>
                        </div>

                        <div className="bullet-container">
                            <div className="sub-bullet">
                                <span className="bullet">&gt;</span>
                            </div>
                            <div className="Content-text">
                                <h2 className="title">Optimize</h2>
                                <p>
                                    We continuously monitor and adjust campaigns in real-time, using data insights to refine our approach and drive better results.
                                </p>
                            </div>
                        </div>

                    </div>




                    <div className='btn_container'>
                        <button onClick={openPopup} className="btn"> See the Full Process </button>
                    </div>
                </div>

                <div className="eight_img">
                    <img src="/our-process.png" alt="" style={{ maxWidth: '70%', }} />
                </div>

            </div>


            {/* 🔥Ninth Container Start ...........................*/}


            <div className="fifth_container_new" style={{backgroundColor: "#c4ecb0", padding: '80px 0', marginTop: '100px'}}>
                <div className="fifth_title">
                    <h1 className='second_title'>Ready to Scale Your Growth?</h1>
                    <p className='second_sub_title'>Don't let your growth slow down. Our team is ready to help you break through barriers, connect with decision-makers, and turn qualified leads into loyal customers. Take the next step today and see a increase in qualified leads within the first month.</p>
                </div>

                <div className='btn_container'>
                    <button onClick={openPopup} className="btn" style={{backgroundColor: '#11292c', color: '#fff'}}> Get My SDR Team </button>
                </div>
            </div >



        </>
    )
}
export default SalesDevelopment;

