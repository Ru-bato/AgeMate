import React from "react";
import step_pic from "../assets/step.png";
import { Typography } from "antd";
import { Layout, Image } from "antd";
const { Title, Paragraph } = Typography;
const { Content } = Layout;

export default class InformationRetrievalModule extends React.Component {
  render() {
    const CONTENT = {
      english: (
        <div>
          AgeMate offers user-friendly operations and intelligent interactions,
          providing an interactive teaching software that enables seniors to
          quickly grasp smartphone usage. Through the seamless integration of
          large models and frontend technologies, seniors can follow on-screen
          instructions step-by-step to fulfill their needs, repeating the
          process until they confidently master the software.
        </div>
      ),
      chinese: (
        <div>
          方便的操作，智能的互动！老年人快速上手的互动教学软件。我们通过大模型与前端的巧妙融合，老年人可以按照屏幕上的指示一步一步的完成自己的使用需求。循环往复，直至他们真正学会软件的使用。
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
            <b>Demo</b>
          </Title>

          <Image
            src={step_pic}
            style={{
              width: "98%",
              height: "auto",
              display: "block",
              margin: "auto",
            }}
            preview={false}
          />

          <Paragraph style={{ fontSize: "16px" }}>
            {CONTENT[this.props.language]}
          </Paragraph>
        </Content>
      </div>
    );
  }
}
