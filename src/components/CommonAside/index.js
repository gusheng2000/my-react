import React from "react";
import { Layout, Menu } from 'antd';
import menuconfig from '../../config';
import * as Icon from '@ant-design/icons';



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


const CommonAside = () => {
  return (
    <Sider collapsible collapsed={false}>
      <h3 className="app-name" >通用后台管理 </h3>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Sider>
  )
}

export default CommonAside