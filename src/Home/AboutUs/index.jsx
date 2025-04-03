import React from "react";
import AboutUsImg from "../../assets/img/about-us.jpg";
import CountUp from "react-countup";
import useInView from "../../hooks/useInView";

const AboutUs = () => {
    const [ref, isInView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <div className="about-us" id="about-us">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className="about-us-title">Về chúng tôi</h2>
                        <p className="about-us-description">
                            Trường Đại học Văn Hiến là một trong những trường
                            đại học tư thục hàng đầu tại Việt Nam, được thành
                            lập năm 1997. Với hơn 25 năm phát triển, chúng tôi
                            tự hào là nơi đào tạo nguồn nhân lực chất lượng cao,
                            đáp ứng nhu cầu xã hội và hội nhập quốc tế.
                        </p>
                        <div className="about-us-stats" ref={ref}>
                            <div className="stat-item">
                                <h3>
                                    {isInView ? (
                                        <CountUp
                                            end={25}
                                            duration={2.5}
                                            suffix="+"
                                        />
                                    ) : (
                                        "0+"
                                    )}
                                </h3>
                                <p>Năm kinh nghiệm</p>
                            </div>
                            <div className="stat-item">
                                <h3>
                                    {isInView ? (
                                        <CountUp
                                            end={20000}
                                            duration={2.5}
                                            suffix="+"
                                        />
                                    ) : (
                                        "0+"
                                    )}
                                </h3>
                                <p>Sinh viên</p>
                            </div>
                            <div className="stat-item">
                                <h3>
                                    {isInView ? (
                                        <CountUp
                                            end={50}
                                            duration={2.5}
                                            suffix="+"
                                        />
                                    ) : (
                                        "0+"
                                    )}
                                </h3>
                                <p>Chương trình đào tạo</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-us-image">
                            <img
                                src={AboutUsImg}
                                alt="Về chúng tôi"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
