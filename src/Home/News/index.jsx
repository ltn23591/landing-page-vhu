import React from "react";
import newImg from "../../assets/img/new-1.jpg";
const News = () => {
    return (
        <>
            <div className="news" id="news">
                <div className="container">
                    <h2
                        data-aos="zoom-in"
                        className="news-heading text-center text-uppercase text-primary"
                    >
                        Tin tức VHU
                    </h2>
                    <div className="row position-relative">
                        <div className="col-md-6">
                            <img
                                data-aos="fade-right"
                                src={newImg}
                                alt="new"
                                className="news-image"
                            />
                        </div>
                        <div className="col-md-6">
                            <h3
                                data-aos="fade-left"
                                className="news-title position-absolute"
                            >
                                VHUers tiếp lửa “Tinh thần Lý Tự Trọng – Khát
                                vọng của thanh niên”
                            </h3>
                            <p data-aos="fade-left" className="news-content">
                                Nhằm lan tỏa tinh thần bất diệt của tinh thần Lý
                                Tự Trọng đến với thế hệ trẻ, Đoàn Thanh niên –
                                Hội Sinh viên Trường Đại học Văn Hiến tổ chức
                                chuyên đề “Tinh thần Lý Tự Trọng – Khát vọng của
                                thanh niên”. Sự kiện không chỉ giúp sinh viên
                                hiểu sâu sắc hơn về tấm gương anh hùng mà còn
                                tạo động lực để mỗi người trẻ hôm nay dám nghĩ,
                                dám làm, dám dấn thân vì những điều cao đẹp.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;
