import React from "react";
import step_pic from "../assets/step.png";
import { Typography } from "antd";
import { Layout, Image } from "antd";
import appagent_demo from "../assets/AppAgent-TieTie-demo.mp4";
import agemate_demo from "../assets/AgeMate-demo.mp4";
const { Title, Paragraph } = Typography;
const { Content } = Layout;

export default class InformationRetrievalModule extends React.Component {
  render() {
    const CONTENT = {
      english: (
        <div style={{
          maxWidth: '700px',    // 限制最大宽度
          margin: '0 auto',     // 自动水平居中
          textAlign: 'justify', // 两端对齐
        }}>
          AgeMate offers user-friendly operations and intelligent interactions,
          providing an interactive teaching software that enables seniors to
          quickly grasp smartphone usage. Through the seamless integration of
          large models and frontend technologies, seniors can follow on-screen
          instructions step-by-step to fulfill their needs, repeating the
          process until they confidently master the software.
        </div>
      ),
      chinese: (
        <div style={{
          maxWidth: '700px',    // 限制最大宽度
          margin: '0 auto',     // 自动水平居中
          textAlign: 'justify', // 两端对齐
        }}>
          方便的操作，智能的互动！老年人快速上手的互动教学软件。我们通过大模型与前端的巧妙融合，老年人可以按照屏幕上的指示一步一步的完成自己的使用需求。循环往复，直至他们真正学会软件的使用。
        </div>
      ),
    };

    const CONTENT_1 = {
      english: (
        <div>
          AgeMate teaches seniors how to open the eBook of
          <i>Romance of the Three Kingdoms</i>.
        </div>
      ),
      chinese: <div>AgeMate教老年人打开《三国演义》电子书</div>,
    };

    const CONTENT_2 = {
      english: <div>AgeMate teaches seniors how to use APP.</div>,
      chinese: <div>AgeMate教老年人使用APP</div>,
    };

    const CONTENT_3 = {
      english: (
        <div>
          AppAgent simulates a user posting a Moment on 
          <i>TieTie</i>.
        </div>
      ),
      chinese: <div>AppAgent模拟用户在贴贴TieTie上发布贴贴</div>,
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

          <Paragraph style={{ fontSize: "16px" }}>
            {CONTENT[this.props.language]}
          </Paragraph>

          <Image
            src={step_pic}
            style={{
              width: "85%",
              height: "auto",
              display: "block",
              margin: "auto",
            }}
            preview={false}
          />

          <Paragraph style={{ fontSize: "16px", textAlign: "center", marginBottom: "60px"}}>
            {CONTENT_1[this.props.language]}
          </Paragraph>

          <video
            src={agemate_demo}
            alt="agemate_demo"
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

          <Paragraph style={{ fontSize: "16px", textAlign: "center", marginBottom: "60px"}}>
            {CONTENT_2[this.props.language]}
          </Paragraph>

          <video
            src={appagent_demo}
            alt="appagent_demo"
            style={{
              width: "50%",          // 控制视频宽度为父容器宽度的 50%
              height: "auto",        // 自动调整高度以保持宽高比
              display: 'block',      // 将视频设置为块级元素
              margin: '0 auto',      // 自动水平居中
            }}
            autoPlay
            loop
            muted
          />

          <Paragraph style={{ fontSize: "16px", textAlign: "center", marginBottom: "0px"}}>
            {CONTENT_3[this.props.language]}
          </Paragraph>
        </Content>
      </div>
    );
  }
}
