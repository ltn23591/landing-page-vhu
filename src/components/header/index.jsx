import React from "react";
import Logo from "./Logo/index";
import { Flex } from "antd";
import Nav from "./Navbar/index";
import { Button } from "antd";
import Action from "./Action/index";
export default function Header() {
    return (
        <>
            <div className="container">
                <header className="header fixed-top d-flex align-items-center justify-content-between mb-5">
                    {/* Logo */}
                    <Logo />

                    {/* Navigation */}
                    <Nav />

                    {/* Action */}
                    <Action />
                </header>
            </div>
        </>
    );
}
