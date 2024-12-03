import React from "react";
import { Button} from "antd";
import { Header } from "antd/es/layout/layout";
import {LeftCircleTwoTone} from '@ant-design/icons'
const Commonheader=()=>{
    return (
        <Header>
            <Button>
                <LeftCircleTwoTone />
            </Button>
        </Header>
    )
}
export default Commonheader