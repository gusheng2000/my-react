import React from "react";
import { Button,Avatar,Dropdown} from "antd";
import { Header } from "antd/es/layout/layout";
import {MenuFoldOutlined} from '@ant-design/icons'
import './index.css'
import { useDispatch } from "react-redux";
import {collapseMenu} from "../../store//reducers/tab"
const Commonheader=({isCollapse})=>{
  const dispatch = useDispatch()

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
    //定义点开收起状态
   const changeCollopse=()=>{
     dispatch(collapseMenu())
    }
    return (
        <Header className="header-container">
            <Button
            onClick={changeCollopse}
            icon={<MenuFoldOutlined/>}>
            </Button>

            <Dropdown  menu={{items}}>
            <Avatar src={<img alt='头像'  sx={{ width: 56, height: 56 }}  src={require("../../assets/avatar.jpg")}></img>}></Avatar>
            </Dropdown>
        </Header>
    )
}
export default Commonheader