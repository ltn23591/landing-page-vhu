import React from "react";
import img1 from "../../assets/img/admissions-1.jpg";
import img2 from "../../assets/img/admissions-2.jpg";
const Admissions = () => {
    return (
        <div className="admissions">
            <div className="container">
                <div className="admissions-content">
                    <h2 className="admissions-title text-primary">
                        Tuyển sinh
                    </h2>
                    <p className="admissions-description mt-5">
                        Trường Đại học Văn Hiến tuyển sinh 2025 với đa ngành:
                        Kinh tế, Du lịch, Công nghệ, Xã hội, Nghệ thuật. Xét
                        tuyển linh hoạt: thi THPT, học bạ, đánh giá năng lực;
                        hạn chót 15/5/2025. Học tập thực tiễn, phát triển toàn
                        diện với triết lý "Thành nhân trước khi thành danh".
                    </p>
                </div>
                <div className="admissions-list" id="admission">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card admissions-hover">
                                <div className="card-body p-0 position-relative">
                                    <div className="admissions-img-wrapper">
                                        <img
                                            src={img1}
                                            alt="Admissions 1"
                                            className="admissions-img"
                                        />
                                    </div>
                                    <div className="admissions-content position-absolute">
                                        <h3 className="admissions-title-pos position-absolute text-nowrap p-3 text-white">
                                            Tuyển sinh Đại học chính quy
                                        </h3>
                                        <p className="admissions-description-pos text-nowrap">
                                            Thông tin chi tiết về chương trình{" "}
                                            <br />
                                            đào tạo, chỉ tiêu tuyển sinh và{" "}
                                            <br />
                                            phương thức xét tuyển cho hệ đại học
                                            chính quy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card w100 admissions-hover">
                                <div className="card-body p-0 position-relative">
                                    <div className="admissions-img-wrapper">
                                        <img
                                            src={img2}
                                            alt="Admissions 2"
                                            className="admissions-img"
                                        />
                                    </div>
                                    <div className="admissions-content position-absolute">
                                        <h3 className="admissions-title-pos position-absolute text-nowrap p-3 text-white">
                                            Tuyển sinh Sau đại học
                                        </h3>
                                        <p className="admissions-description-pos text-nowrap">
                                            Thông tin về các chương trình đào{" "}
                                            <br />
                                            tạo thạc sĩ, tiến sĩ và các khóa học{" "}
                                            <br />
                                            nâng cao chuyên môn.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admissions;
