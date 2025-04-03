import React from "react";
const Navbar = () => {
    return (
        <>
            <ul className="nav mx-5">
                <li className="nav-item p-4">
                    <a href="#intro">Giới thiệu</a>
                </li>
                <li className="nav-item p-4">
                    <a href="#news">Tin tức</a>
                </li>
                <li className="nav-item p-4">
                    <a href="#admission">Tuyển sinh</a>
                </li>
                <li className="nav-item p-4">
                    <a href="#about-us">Về chúng tôi</a>
                </li>
            </ul>
        </>
    );
};

export default Navbar;
