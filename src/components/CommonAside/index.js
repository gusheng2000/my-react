import React from "react";
import { Layout, Menu } from 'antd';
import menuconfig from '../../config';
import * as Icon from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { collapseMenu } from "../../store/reducers/tab";


const iconToElement = (name) => React.createElement(Icon[name])

const { Sider } = Layout;

// 动态获取icon
const items = menuconfig.map(item => {
  const child = {
    key: item.path,
    label: item.label,
    icon: iconToElement(item.icon)
  }
  if (item.children) {
    child.children = item.children.map(item => {
      return {
        key: item.path,
        lable: item.label,
      }
    })
  }
  return child
})


const CommonAside = ({isCollapse}) => {
  const dispatch=useDispatch()
  return (
    <Sider collapsible collapsed={isCollapse}  onCollapse={() => dispatch(collapseMenu())}>
      <h3 className="app-name" >{isCollapse?"后台":"通用后台管理"} </h3>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Sider>
  )
}

export default CommonAside