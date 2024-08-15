import React from "react";
import teaser_pic from "../assets/teaser-v6.png";
import { Typography } from "antd";
import { Layout, Image } from "antd";
const { Title, Paragraph } = Typography;
const { Content } = Layout;

export default class StepDemo extends React.Component {
  render() {
    const CONTENT = {
      english: (
        <div style={{
          maxWidth: '700px',    // 限制最大宽度
          margin: '0 auto',     // 自动水平居中
          textAlign: 'justify', // 两端对齐
        }}>
          Welcome to AgeMate! AgeMate is an application specifically designed
          for the elderly, addressing the widening digital divide amidst the
          aging society and supported by national policies promoting the
          accessibility of internet applications for the elderly. By integrating
          AI agents, leveraging reinforcement learning, and utilizing
          interactive feedback detection technology, we aim to create a product
          that seamlessly adapts to the needs of today's seniors, empowering
          them to master smartphone applications and contributing to the
          effective resolution of the aging issue.
        </div>
      ),
      chinese: (
        <div style={{
          maxWidth: '700px',    // 限制最大宽度
          margin: '0 auto',     // 自动水平居中
          textAlign: 'justify', // 两端对齐
        }}>
          欢迎来到AgeMate！
          AgeMate是一款基于当今社会老龄化程度加大、数字鸿沟问题显著的社会背景，
          响应国家互联网应用适老化改造的政策支持，从而打造的专门为老年人群提供智能手机助手服务的应用程序。
          我们与AI智能体融合；我们用强化学习技术以及交互反馈检测技术助力；
          通过大模型与前端技术的结合，我们希望生产一款更加适配当今老年人需求的产品，
          决心帮助老人真正学会手机应用软件的使用和操作，助力国家老龄化问题的有效解决。
        </div>
      ),
    };

    return (
      <div>
        <Content style={{ padding: "10px 10px 10px 10px" }}>
          <Title
            level={3}
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            {/* <b>{this.props.language === "english" ? "Abstract" : "摘要"}</b> */}
            <b>Abstract</b>
          </Title>

          <Paragraph style={{ fontSize: "16px" }}>
            {CONTENT[this.props.language]}
          </Paragraph>
        </Content>
      </div>
    );
  }
}
