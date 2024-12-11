import React, { useEffect, useState } from "react";
import { Card, Col, Row, Table } from "antd";
import "./home.css";
import { getData } from "../../api";
import * as Icon from '@ant-design/icons';
// import data from "../../api/mockApiData/home";
// import Item from "antd/es/list/Item";

const columns = [
    { title: "课程", dataIndex: "name" },
    { title: "今日售出", dataIndex: "todayBuy" },
    { title: "本月售出", dataIndex: "monthDay" },
    { title: "总计", dataIndex: "totalDay" },
];

// 子路由出口
const Home = () => {
    const iconToElement = (name) =>React.createElement(Icon[name])

    
    const avatar = require("../../assets/avatar.jpg");

    const [tableData, setTableData] = useState([]);
    const [countData, setCountData] = useState([]);


    useEffect(() => {
        getData().then((res) => {
            console.log(res);
            
            const { tableData,countData} = res.data;
            console.log(countData);
            setTableData(tableData);
            setCountData(countData);
        });
    }, []);

    //定义表格数据
    return (
        <Row className="home">
            <Col span={8}>
                <Card hoverable>
                    <div className="user">
                        <img src={avatar} alt="img" />
                        <div>
                            <p className="name">Admin</p>
                            <p className="access">超级管理员</p>
                        </div>
                    </div>
                    <div className="user-info">
                        <p>
                            上次登陆时间:<span>2024-12-05 12:22:00</span>
                        </p>
                        <p>
                            上次登陆地点:<span>上海</span>
                        </p>
                    </div>
                </Card>
                <Card hoverable style={{ marginTop: "10px" }}>
                    <Table
                        rowKey={"name"}
                        columns={columns}
                        dataSource={tableData}
                        pagination={false}
                    ></Table>
                </Card>
            </Col>
            <Col span={16}>
                <div className="num">
                    {countData.map((item, index) => {
                        return (
                            <Card key={index}>
                                <div className="icon-box" style={{background:item.color}}>
                                    {iconToElement(item.icon)}
                                </div>
                                <div className="detail">
                                    <p className="num">¥ {item.value}</p>
                                    <p className="name">{item.name}</p>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </Col>
        </Row>
    );
};
export default Home;
