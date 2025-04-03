import React from "react";
import LogoCircle from "../../../assets/img/logo.png";
const Logo = () => {
    return (
        <>
            <div className="d-flex align-items-center">
                <img className="logo mx-5" src={LogoCircle} alt="Logo" />
                <div>
                    <h1 className="title">Van Hien University</h1>
                    <p className="subtitle">Thành Nhân Trước Thành Danh</p>
                </div>
            </div>
        </>
    );
};

export default Logo;
