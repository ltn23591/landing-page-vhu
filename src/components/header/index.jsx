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
                <header className="d-flex mt-5 align-items-center justify-content-between">
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
