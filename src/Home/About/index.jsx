import React from "react";
import Image1 from "../../assets/img/about1.jpg";
import Image2 from "../../assets/img/about2.jpg";
import Image3 from "../../assets/img/about3.jpg";
import Image4 from "../../assets/img/about4.jpg";
import Image5 from "../../assets/img/about5.jpg";
import Image6 from "../../assets/img/about6.jpg";
import Image7 from "../../assets/img/about7.jpg";
import Image9 from "../../assets/img/about9.jpg";
import { AiOutlineRight } from "react-icons/ai";

const About = () => {
    return (
        <>
            <div className="container">
                <div className="about-parent-list">
                    <img src={Image1} alt="about1" class="img-1" />
                    <img src={Image2} alt="about2" class="img-2" />
                    <img src={Image3} alt="about3" class="img-3" />
                    <img src={Image4} alt="about4" class="img-4" />
                    <img src={Image5} alt="about5" class="img-5" />
                    <img src={Image6} alt="about6" class="img-6" />
                    <img src={Image7} alt="about7" class="img-7" />
                    <div class="img-8">
                        <h2>Nhịp sống VHU</h2>
                        <p>
                            VHU với nhịp sống năng động, môi trường học tập tiên
                            tiến và hoạt động ngoại khóa phong phú là nơi giúp
                            người học phát triển toàn diện nhất về mọi mặt
                        </p>
                        <div className="about-btn-more d-flex align-items-center">
                            <button>
                                <AiOutlineRight />
                            </button>
                            <p>Khám phá ngay</p>
                        </div>
                    </div>
                    <img className="img-9" src={Image9} alt="about9" />
                </div>
            </div>
        </>
    );
};

export default About;
