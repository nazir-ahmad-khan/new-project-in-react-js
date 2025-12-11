import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import './SalesDevelopment.css';

import { Autoplay, FreeMode } from "swiper/modules";

function LogoCarousel() {

    const logos1 = [

        { id: 1, src: '/Logo/logo-image1.svg', alt: 'Company Logo 1' },
        { id: 2, src: '/Logo/logo-image2.svg', alt: 'Company Logo 2' },
        { id: 3, src: '/Logo/logo-image3.svg', alt: 'Company Logo 3' },
        { id: 4, src: '/Logo/logo-image4.svg', alt: 'Company Logo 4' },
        { id: 5, src: '/Logo/logo-image5.svg', alt: 'Company Logo 5' },
        { id: 6, src: '/Logo/logo-image6.svg', alt: 'Company Logo 6' },
        { id: 7, src: '/Logo/logo-image7.svg', alt: 'Company Logo 7' },
        { id: 8, src: '/Logo/logo-image8.svg', alt: 'Company Logo 8' },
        { id: 9, src: '/Logo/logo-image9.svg', alt: 'Company Logo 9' },
    ]

    const logos2 = [

        { id: 9, src: '/Logo/logo-image9.svg', alt: 'Company Logo 9' },
        { id: 2, src: '/Logo/logo-image2.svg', alt: 'Company Logo 2' },
        { id: 3, src: '/Logo/logo-image3.svg', alt: 'Company Logo 3' },
        { id: 8, src: '/Logo/logo-image8.svg', alt: 'Company Logo 8' },
        { id: 7, src: '/Logo/logo-image7.svg', alt: 'Company Logo 7' },
        { id: 6, src: '/Logo/logo-image6.svg', alt: 'Company Logo 6' },
        { id: 5, src: '/Logo/logo-image5.svg', alt: 'Company Logo 5' },
        { id: 1, src: '/Logo/logo-image1.svg', alt: 'Company Logo 1' },
        { id: 4, src: '/Logo/logo-image4.svg', alt: 'Company Logo 4' },
    ]

    return (
        <>
            <div className="logo-container">

                <div className="logo-first-container">

                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        slidesPerView={8}
                        spaceBetween={10}
                        speed={2000}
                        freeMode={true}
                        freeModeMomentum={false}
                        loop={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        loopAdditionalSlides={5}
                        className="logo_sliders"
                    >
                        {logos1.map((items) => {
                            return (
                                <SwiperSlide key={items.id}>
                                    <div className="logo_boxs">
                                        <img className="logos_img" src={items.src} alt={items.alt} />
                                    </div>
                                </SwiperSlide>
                            )
                        })}

                        {logos1.map((items) => {
                            return (
                                <SwiperSlide key={items.id}>
                                    <div className="logo_boxs">
                                        <img className="logos_img" src={items.src} alt={items.alt} />
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>


                <div className="logo-second-container">

                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        slidesPerView={8}
                        spaceBetween={10}
                        speed={1000}
                        freeMode={true}
                        freeModeMomentum={false}
                        loop={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        loopAdditionalSlides={5}
                        className="logo_sliders"
                    >
                        {logos2.map((items) => {
                            return (
                                <SwiperSlide key={items.id}>
                                    <div className="logo_boxs" >
                                        <img className="logos_img" src={items.src} alt={items.alt} />
                                    </div>
                                </SwiperSlide>
                            )
                        })}

                        {logos2.map((items) => {
                            return (
                                <SwiperSlide key={items.id}>
                                    <div className="logo_boxs">
                                        <img className="logos_img" src={items.src} alt={items.alt} />
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default LogoCarousel;




{/* <div className="second_sub_Container">
                    <div className="text_info">
                        <h1 className='second_title'>Our Expertise Drives Your Success.</h1>
                        <h2 className='second_sub_title'>From precise targeting to seamless execution, we connect you with decision-makers and drive measurable results.</h2>
                    </div>
                </div>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="carousel_container"
                >
                    <SwiperSlide>
                        <div className="box_info">
                            <h1>SDR Teams</h1>
                            <p>
                                Scale your outreach with AI-powered and human-enhanced SDR
                                services, giving your sales team time to focus on closing deals.
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="box_info">
                            <h1>Marketing Ops</h1>
                            <p>
                                Smart targeting and data-driven outreach that delivers excellent
                                pipeline performance.
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="box_info">
                            <h1>Lead Research</h1>
                            <p>
                                Get accurate, verified B2B data to engage the right decision
                                makers at the right companies.
                            </p>
                        </div>
                    </SwiperSlide>

                <SwiperSlide>
                    <div className="box_info">
                        <h1>New one i just add this</h1>
                        <p>
                            Get accurate, verified B2B data to engage the right decision
                            makers at the right companies.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper> */}