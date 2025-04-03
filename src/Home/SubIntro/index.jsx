import React from "react";
import img1 from "../../assets/img/subbanner1.jpg";
import img2 from "../../assets/img/subbanner2.jpg";
import img3 from "../../assets/img/subbanner3.jpg";
import { MdOutlineDateRange } from "react-icons/md";
const SubIntro = () => {
    return (
        <>
            <div className="subintro p-2">
                <div className="container">
                    <div className="row d-flex justify-content-between align-items-center text-white mb-5 mt-5">
                        <div data-aos="fade-right" className="col-md-5">
                            <h2 className="subintro-heading mt-0">
                                Đôi nét về Trường Đại học Văn Hiến
                            </h2>
                        </div>
                        <div data-aos="fade-left" className="col-md-7">
                            <p className="subintro-content">
                                Những cột mốc đáng nhớ trên suốt hành trình 30
                                năm truyền cảm hứng của Văn Hiến.
                            </p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-4">
                            <div data-aos="zoom-in" className="card">
                                <div className="card-body">
                                    <img
                                        className="subintro-img"
                                        src={img1}
                                        alt=""
                                    />
                                    <p className="date mt-4">
                                        <MdOutlineDateRange />
                                        12/03/2025
                                    </p>
                                    <p className="subintro-title">
                                        Chúc mừng VHU Academy vô địch giải thể
                                        thao điện tử sinh viên TP.HCM - ESC
                                        2025!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <img
                                        className="subintro-img"
                                        src={img2}
                                        alt=""
                                    />
                                    <p className="date mt-4">
                                        <MdOutlineDateRange />
                                        12/03/2025
                                    </p>
                                    <p className="subintro-title">
                                        Chúc mừng sinh viên Đại học Văn Hiến đạt
                                        giải tại chung kết cuộc thi “Lắc Khánh
                                        Đỏ” - các trường đại học khu vực phía
                                        Nam lần thứ 3, năm 2025.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <img
                                        className="subintro-img"
                                        src={img3}
                                        alt=""
                                    />
                                    <p className="date mt-4">
                                        <MdOutlineDateRange />
                                        12/03/2025
                                    </p>
                                    <p className="subintro-title">
                                        Chúc mừng sinh viên Văn Hiến xuất sắc
                                        đạt giải nhất cuộc thi hùng biện tiếng
                                        Anh "Gen Z Universe - Voice Of Change"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubIntro;
