import React from "react";
import { Typography, Button } from "antd";
import { Layout, Image } from "antd";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

export default class KeyTechnologies extends React.Component {
  state = {
    expandedSections: {}, // 管理每个部分的展开状态
  };

  toggleSection = (key) => {
    this.setState((prevState) => ({
      expandedSections: {
        ...prevState.expandedSections,
        [key]: !prevState.expandedSections[key],
      },
    }));
  };

  render() {
    const CONTENT = {
      english: (
        <div
            style={{
              maxWidth: "700px", // 限制最大宽度
              margin: "0 auto", // 自动水平居中
              textAlign: "justify", // 两端对齐
            }}
          >
          <div>
            <b
              onClick={() => this.toggleSection("voiceInteraction")}
              style={{ cursor: "pointer" }}
            >
              Command Execution
              {this.state.expandedSections.voiceInteraction ? " ▲" : " ▼"}
            </b>
            {this.state.expandedSections.voiceInteraction && (
              <p>
                Converts voice inputs into app operation instructions. This
                technology recognizes speech, extracts operational semantics,
                and generates action sequences across UI pages, encompassing
                speech semantics understanding, dialogue systems, and app
                frontend structures.
              </p>
            )}
          </div>
          <div>
            <b
              onClick={() => this.toggleSection("naturalInteraction")}
              style={{ cursor: "pointer" }}
            >
              AI Agents
              {this.state.expandedSections.naturalInteraction ? " ▲" : " ▼"}
            </b>
            {this.state.expandedSections.naturalInteraction && (
              <p>
                Incorporates human feedback and reinforcement learning to
                enhance system performance with each interaction. This dynamic
                adjustment optimizes tutorial content, aligning it more closely
                with seniors' needs and habits.
              </p>
            )}
          </div>
          <div>
            <b
              onClick={() => this.toggleSection("usageGuidance")}
              style={{ cursor: "pointer" }}
            >
              Natural Interaction
              {this.state.expandedSections.usageGuidance ? " ▲" : " ▼"}
            </b>
            {this.state.expandedSections.usageGuidance && (
              <p>
                Utilizes interactive feedback detection technology, such as
                OPPO's "Face Expression" and "Face Keypoints" APIs, to identify
                seniors' micro-expressions during tutorials. By detecting frowns
                or prolonged gazes, AgeMate assesses confusion and adjusts
                tutorials for better comprehension.
              </p>
            )}
          </div>
          These key technologies help us to better analyse the real-time dynamics of older people and react more intelligently to them. They serve as our unique key technologies and are essential for AgeMate to work well.
        </div>
      ),
      chinese: (
        <div style={{
          maxWidth: '700px',    // 限制最大宽度
          margin: '0 auto',     // 自动水平居中
          textAlign: 'justify', // 两端对齐
        }}>
          <div>
            <b
              onClick={() => this.toggleSection("voiceInteraction")}
              style={{ cursor: "pointer" }}
            >
              指令执行：从语音输入到APP操作指令的转换技术
              {this.state.expandedSections.voiceInteraction ? " ▲" : " ▼"}
            </b>
            {this.state.expandedSections.voiceInteraction && (
              <p>
                该技术能够识别输入的语音，提取语音中的指令操作语义信息，并根据用户界面（UI）语义跨页面生成手机操作动作序列。相关技术领域包括口语语义理解、对话系统以及应用程序前端结构。
              </p>
            )}
          </div>
          <div>
            <b
              onClick={() => this.toggleSection("naturalInteraction")}
              style={{ cursor: "pointer" }}
            >
              AI智能体：人类反馈和强化学习技术
              {this.state.expandedSections.naturalInteraction ? " ▲" : " ▼"}
            </b>
            {this.state.expandedSections.naturalInteraction && (
              <p>
                AgeMate结合了人类反馈和强化学习技术，以确保每次与用户的交互都能成为提升系统性能的机会。通过这一技术，系统能够动态调整和优化教程内容，使其更贴合老年用户的实际需求和使用习惯。
              </p>
            )}
          </div>
          <div>
            <b
              onClick={() => this.toggleSection("usageGuidance")}
              style={{ cursor: "pointer" }}
            >
              自然交互：交互反馈检测技术
              {this.state.expandedSections.usageGuidance ? " ▲" : " ▼"}
            </b>
            {this.state.expandedSections.usageGuidance && (
              <p>
                使用OPPO的“人脸表情”和“人脸关键点”API，可以识别老年人在使用教程时的微表情变化，从而对教程效果做出判断。比如通过检测皱眉、长时间注视某个UI等面部表情，可以判断老年人是否对当前的教程感到困惑，从而及时调整教程，让老年人更易理解、接收教程内容。
              </p>
            )}
          </div>
          这些关键技术帮助我们更好的分析老年人的实时动态，并对此做出更加智能的反应。它们作为我们独特的关键技术，是AgeMate可以出色运行的重要手段。
        </div>
      ),
    };

    return (
      <div id="step-demo">
        <Content style={{ padding: "10px" }}>
          <Title level={3} style={{ textAlign: "center" }}>
            <b>Key Technologies</b>
          </Title>

          <Paragraph style={{ fontSize: "16px" }}>
            {CONTENT[this.props.language]}
          </Paragraph>
        </Content>
      </div>
    );
  }
}
