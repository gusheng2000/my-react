import React from "react";
import { Card, Col, Row } from "antd"
import './home.css'
// 子路由出口
const Home = () => {
  const avatar = require('../../assets/avatar.jpg')
  return (
    <Row className="home">
      <Col span={12}>
        <Card hoverable>


          <div className="user">
            <img src={avatar} alt="img" />
            <div>
              <p className="name">Admin</p>
              <p className="access">超级管理员</p>
            </div>
          </div>
          <div className="user-info">
            <p>上次登陆时间:<span>2024-12-05 12:22:00</span></p>
            <p>上次登陆地点:<span>上海</span></p>

          </div>

        </Card>
      </Col>
      <Col span={12}></Col>

    </Row>
  )
}
export default Home