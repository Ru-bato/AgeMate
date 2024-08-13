import React from "react";
// import step_pic from "../assets/step.png";
import { Typography } from "antd";
import { Layout, Image } from "antd";
const { Title, Paragraph } = Typography;
const { Content } = Layout;

export default class Showcase extends React.Component {
  render() {
    const CONTENT_1 = {
      english: (
        <div>
          Dynamic Adjustment: AgeMate observes seniors' facial expressions and
          inquires about confusion, adjusting tutorials accordingly.
        </div>
      ),
      chinese: (
        <div>
          通过摄像头权限观察老年人面部表情以及神态上面的变化，我们的软件可以提问用户是否有困惑以及不解。
        </div>
      ),
    };
    const CONTENT_2 = {
      english: (
        <div>
          Upon understanding seniors' needs, AgeMate swiftly generates tailored
          guides, using cartoonish voices to guide them through smartphone
          operations step-by-step.
        </div>
      ),
      chinese: (
        <div>
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
          <p>（动图或者视频片段1）</p>
          <Paragraph style={{ fontSize: "16px" }}>
            {CONTENT_1[this.props.language]}
          </Paragraph>

          <p>（动图或者视频片段2）</p>
          <Paragraph style={{ fontSize: "16px" }}>
            {CONTENT_2[this.props.language]}
          </Paragraph>
        </Content>
      </div>
    );
  }
}
