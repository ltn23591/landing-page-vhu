import React, { useEffect } from "react";
// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Banner1 from "../../assets/img/Banner1.jpg";
import Banner2 from "../../assets/img/Banner2.jpg";
import Banner3 from "../../assets/img/Banner3.jpg";

const Hero = () => {
    useEffect(() => {
        const swiper = new Swiper(".swiper", {
            modules: [Navigation, Pagination, Autoplay],
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <div className="hero-content ">
            <div className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img
                            src={Banner1}
                            alt="Slide 1"
                            className="img-fluid"
                        />
                        
                    </div>
                    <div className="swiper-slide">
                        <img
                            src={Banner2}
                            alt="Slide 2"
                            className="img-fluid"
                        />
                    </div>
                    <div className="swiper-slide">
                        <img
                            src={Banner3}
                            alt="Slide 3"
                            className="img-fluid"
                        />
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    );
};

export default Hero;
