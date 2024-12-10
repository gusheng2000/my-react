import React, { useEffect, useState } from "react";
import { Card, Col, Row, Table } from "antd"
import './home.css'
import { getData } from "../../api";
import data from "../../api/mockApiData/home";

const columns=[
  {title:"课程",dataIndex:'name'},
  {title:"今日售出",dataIndex:'todayBuy'},
  {title:"本月售出",dataIndex:'monthDay'},
  {title:"总计",dataIndex:'totalDay'},
]



// 子路由出口
const Home = () => {
  const avatar = require('../../assets/avatar.jpg')

  const [ tableData, setTableData]= useState([])

  useEffect(() => {
    getData().then((res) => {
    console.log(res);
    
      const {tableData}  = res.data
      setTableData(tableData)
    })
  }, [])

  //定义表格数据
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
        <Card>
          <Table rowKey={'name'} columns={columns} dataSource={tableData} pagination={false}></Table>
        </Card>
      </Col>
      <Col span={12}></Col>

    </Row>
  )
}
export default Home