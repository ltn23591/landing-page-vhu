import React from "react";
import { Button, Flex } from "antd";
const Action = () => {
    return (
        <>
            <div className="mx-5">
                <Flex gap="small" wrap>
                    <Button type="primary">Đăng kí</Button>
                    <Button>Đăng nhập</Button>
                </Flex>
            </div>
        </>
    );
};

export default Action;
