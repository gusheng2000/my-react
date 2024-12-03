import React from "react";
import { Button,Avatar,Dropdown} from "antd";
import { Header } from "antd/es/layout/layout";
import {MenuFoldOutlined} from '@ant-design/icons'
import './index.css'
const Commonheader=()=>{

    const items = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer">
             个人中心
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" >
             退出
            </a>
          ),
          disabled: false,
        },
      ];
    return (
        <Header className="header-container">
            <Button icon={<MenuFoldOutlined/>}>
            </Button>

            <Dropdown  menu={{items}}>
            <Avatar src={<img alt='头像' size={64}  src={require("../../assets/avatar.jpg")}></img>}></Avatar>
            </Dropdown>
        </Header>
    )
}
export default Commonheader