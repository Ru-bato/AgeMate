import React from "react";
import { Typography } from "antd";
import { Layout, Image } from "antd";
import showcase from "../assets/showcase.mp4";
const { Title, Paragraph } = Typography;
const { Content } = Layout;


export default class Showcase extends React.Component {
  render() {
    const CONTENT_1 = {
      
    };
    const CONTENT_2 = {
      english: (
        <div
          style={{
            maxWidth: "700px", // 限制最大宽度
            margin: "0 auto", // 自动水平居中
            textAlign: "justify", // 两端对齐
          }}
        >
          Upon understanding seniors' needs, AgeMate swiftly generates tailored
          guides, using cartoonish voices to guide them through smartphone
          operations step-by-step.
        </div>
      ),
      chinese: (
        <div
          style={{
            maxWidth: "700px", // 限制最大宽度
            margin: "0 auto", // 自动水平居中
            textAlign: "justify", // 两端对齐
          }}
        >
          通过了解老年人的需求之后，AgeMate可以快速地做出对策，并生成指南。我们用卡通的形象语音引导老年人一步一步的学习手机软件操作使用。
        </div>
      ),
    };

    return (
      <div id="step-demo">
        <Content style={{ padding: "10px 10px 10px 10px" }}>
          <Title
            level={3}
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <b>Showcase</b>
          </Title>

          {/* <Image
            src={step_pic}
            style={{
              width: "98%",
              height: "auto",
              display: "block",
              margin: "auto",
            }}
            preview={false}
          /> */}
          <Paragraph style={{ fontSize: "16px" }}>
            {CONTENT_1[this.props.language]}
          </Paragraph>

          <video
            src={showcase}
            alt="showcase"
            style={{
              width: "70%",
              height: "auto",
              display: "block",
              margin: "auto",
            }}
            autoPlay
            loop
            muted
          />
          <Paragraph style={{ fontSize: "16px" }}>
            {CONTENT_2[this.props.language]}
          </Paragraph>
        </Content>
      </div>
    );
  }
}
