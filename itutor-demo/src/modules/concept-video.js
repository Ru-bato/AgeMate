import React from 'react';
import teaser_pic from '../assets/teaser-v3.jpg';
import { Typography } from 'antd';
import { Layout, Row } from 'antd'
import ReactPlayer from 'react-player'


const { Title, Paragraph, Text, Link } = Typography;
const { Header, Footer, Sider, Content } = Layout;

export default class ConceptVideo extends React.Component {

    render() {
        return (
            <div>
                <Content style={{ padding: "10px 10px 10px 10px" }}>
                    <Title level={3} style={{ textAlign: 'center', justifyContent: 'center' }}>
                        <b>Concept Video</b>
                    </Title>
                    
                    <Row style={{ width: "60%", height: "auto", display: 'block', margin: 'auto' }}>
                        <iframe src="https://player.bilibili.com/player.html?bvid=BV1sR4y1P7n3&page=1&as_wide=1&high_quality=1&danmaku=0&autoplay=0&t=0"
                            allowfullscreen="allowfullscreen" width="100%" height="500" frameborder="0"
                            sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts">
                        </iframe>
                    </Row>



                </Content>
            </div>
        );
    }
}