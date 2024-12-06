import {React,useState} from "react";
import './main.css';

import { Breadcrumb, Layout } from 'antd';
import CommonAside from "../components/CommonAside";
import Commonheader from "../components/Commonheader";
import { useSelector } from "react-redux";
const { Content, Footer } = Layout;


const Main=()=>{

const isCollapse= useSelector(state=>state.tab.isCollapse)

 return (
        <Layout
          style={{
            minHeight: '100vh',
          }}
        >
        <CommonAside isCollapse={isCollapse}/>
          <Layout>
            <Commonheader isCollapse={isCollapse}/>
            <Content
              style={{
                margin: '0 16px',
              }}
            >
              <Breadcrumb
                style={{
                  margin: '16px 0',
                }}
              >
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  // background: colorBgContainer,
                  // borderRadius: borderRadiusLG,
                }}
              >
                Bill is a cat.
              </div>
            </Content>
            <Footer
              style={{
                textAlign: 'center',
              }}
            >
              Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      );
}
export default Main