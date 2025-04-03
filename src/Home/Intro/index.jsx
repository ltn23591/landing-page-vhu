import React from "react";
import IntroImage from "../../assets/img/intro.jpg";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Intro = () => {
    const videoRef = useIntersectionObserver((element) => {
        const iframe = element.querySelector("iframe");
        if (iframe) {
            const currentSrc = iframe.src;
            if (!currentSrc.includes("autoplay=1")) {
                const separator = currentSrc.includes("?") ? "&" : "?";
                iframe.src = `${currentSrc}${separator}autoplay=1&mute=1&playsinline=1`;
            }
        }
    });

    return (
        <div className="intro" id="intro">
            <div className="container mt-5">
                <div className="row flex-nowrap">
                    <div className="col-md-5 mt-5">
                        <h2
                            data-aos="fade-right"
                            className="intro-title text-primary"
                        >
                            Giới thiệu Trường Đại học Văn Hiến
                        </h2>
                        <p data-aos="zoom-in-up" className="intro-content">
                            Trường Đại học Văn Hiến, thành lập ngày 11/7/1997
                            theo quyết định của Thủ tướng Chính phủ, là một đại
                            học tư thục uy tín tại TP. Hồ Chí Minh, Việt Nam.
                            Với triết lý "Thành nhân trước khi thành danh",
                            trường đào tạo đa ngành, từ Kinh tế, Du lịch, Kỹ
                            thuật đến Khoa học xã hội và Nghệ thuật, cam kết
                            mang đến nguồn nhân lực chất lượng cao, đáp ứng nhu
                            cầu xã hội và hội nhập quốc tế.
                        </p>
                    </div>
                    <div className="col-md-7 intro-iframe" ref={videoRef}>
                        {/* <img
                            src={IntroImage}
                            alt="Intro"
                            className="intro-image"
                        /> */}
                        <iframe
                            data-aos="fade-left"
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/WTcufUwIz5Y?si=rrCmHGPejVVQ_gxI"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        <video src={IntroImage} autoPlay muted loop></video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
