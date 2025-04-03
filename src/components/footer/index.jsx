import React from "react";
import logo from "../../assets/img/logo.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row d-flex align-items-center gap-3 flex-nowrap">
                        <div className="inner d-flex align-items-center gap-3 col-lg-3">
                            <img className="logo" src={logo} alt="logo" />
                            <h1>Van Hien University</h1>
                        </div>
                        <div className="inner col-md-3">
                            <h4>Email</h4>
                            <p>info@vhu.edu.vn</p>
                        </div>
                        <div className="inner col-md-3">
                            <h4>Hotline</h4>
                            <p>1800 1568</p>
                        </div>
                        <div className="inner col-md-3">
                            <h4>Trụ sở chính: </h4>
                            <p>
                                HungHau House: 613 Âu Cơ, Phường Phú Trung, Quận
                                Tân Phú, TP.HCM
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5 d-flex flex-nowrap">
                        <div className="col-md-4">
                            <h4>Các cơ sở đào tạo:</h4>
                            <ul>
                                <li>
                                    Harmony Campus: 624 Âu Cơ, Phường 10, Quận
                                    Tân Bình, TP. HCM
                                </li>
                                <li>
                                    HungHau Campus: Đại lộ Nguyễn Văn Linh, Khu
                                    đô thị Nam Thành phố.
                                </li>
                                <li>
                                    myU Campus: 665 - 667 - 669 Điện Biên Phủ,
                                    Phường 1, Quận 3, TP. HCM
                                </li>
                                <li>
                                    Số 8 - 14 Nguyễn Bá Tuyển, Phường 12, Quận
                                    Tân Bình, TP. HCM
                                </li>
                                <li>
                                    2A2 Quốc lộ 1A, Phường Thạnh Xuân, Quận 12,
                                    TP.HCM
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 mx-5">
                            <h4>Về chúng tôi</h4>
                            <ul>
                                <li>
                                    <p>Tin tức</p>
                                </li>
                                <li>
                                    <p>Sự kiện</p>
                                </li>
                                <li>
                                    <p>Tuyển sinh</p>
                                </li>
                                <li>
                                    <p>Đảm bảo chất lượng đào tạo</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>Liên hệ</h4>
                            <ul>
                                <li>
                                    <p className="d-flex align-items-center gap-2">
                                        <FaFacebook />
                                        Facebook
                                    </p>
                                </li>
                                <li>
                                    <p className="d-flex align-items-center gap-2">
                                        <FaInstagram />
                                        Instagram
                                    </p>
                                </li>
                                <li>
                                    <p className="d-flex align-items-center gap-2">
                                        <FaYoutube />
                                        Youtube
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-center mt-5">
                        Copyright © 2025 Van Hien University. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
