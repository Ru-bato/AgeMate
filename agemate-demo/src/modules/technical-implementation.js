import React from "react";
import arch_pic from "../assets/arch.png";
import { Typography, Button } from "antd";
import { Layout, Image } from "antd";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

export default class TechnicalImplementation extends React.Component {
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
        <div style={{
          maxWidth: '700px',    // 限制最大宽度
          margin: '0 auto',     // 自动水平居中
          textAlign: 'justify', // 两端对齐
        }}>
          Our overall architecture comprises four layers: System Service Layer,
          Software Service Layer, Interaction Technology Layer, and Interaction
          Application Layer. These layers collectively enable core
          functionalities, including<p></p>
          <div>
            <b
              onClick={() => this.toggleSection("voiceInteraction")}
              style={{ cursor: "pointer" }}
            >
              Voice Interaction
              {this.state.expandedSections.voiceInteraction ? " ▲" : " ▼"}
            </b>
            {this.state.expandedSections.voiceInteraction && (
              <p>
                Seniors input their needs via voice, and AgeMate analyzes the
                speech to guide them through smartphone operations.
              </p>
            )}
            <b
              onClick={() => this.toggleSection("naturalInteraction")}
              style={{ cursor: "pointer" }}
            >
              Natural Interaction
              {this.state.expandedSections.naturalInteraction ? " ▲" : " ▼"}
            </b>
            {this.state.expandedSections.naturalInteraction && (
              <p>
                AgeMate captures users' facial expressions and additional data
                through the camera to analyze their psychological state.
              </p>
            )}
            <b
              onClick={() => this.toggleSection("usageGuidance")}
              style={{ cursor: "pointer" }}
            >
              Usage Guidance
              {this.state.expandedSections.usageGuidance ? " ▲" : " ▼"}
            </b>
            {this.state.expandedSections.usageGuidance && (
              <p>
                Leveraging our team's UI2Vec model, AgeMate classifies UI
                interfaces using pre-computed UI image vectors stored in the
                cloud. It introduces app features through voice and visual aids,
                demonstrating operations step-by-step to guide seniors.
              </p>
            )}
          </div>
        </div>
      ),
      chinese: (
        <div style={{
          maxWidth: '700px',    // 限制最大宽度
          margin: '0 auto',     // 自动水平居中
          textAlign: 'justify', // 两端对齐
        }}>
          我们将总体架构分为了四层：系统服务层、软件服务层、交互技术层与交互应用层。我们通过四层的架构满足核心功能，也就是：
          <p></p>
          <div>
            <b
              onClick={() => this.toggleSection("voiceInteraction")}
              style={{ cursor: "pointer" }}
            >
              语音交互功能
              {this.state.expandedSections.voiceInteraction ? " ▲" : " ▼"}
            </b>
            {this.state.expandedSections.voiceInteraction && (
              <p>
                老年人通过语音输入自身需求，AgeMate分析语音并指引老人操作智能手机。
              </p>
            )}
            <b
              onClick={() => this.toggleSection("naturalInteraction")}
              style={{ cursor: "pointer" }}
            >
              自然交互功能
              {this.state.expandedSections.naturalInteraction ? " ▲" : " ▼"}
            </b>
            {this.state.expandedSections.naturalInteraction && (
              <p>AgeMate通过摄像头获取用户表情和延伸数据，分析其心理状态。</p>
            )}
            <b
              onClick={() => this.toggleSection("usageGuidance")}
              style={{ cursor: "pointer" }}
            >
              使用指导功能
              {this.state.expandedSections.usageGuidance ? " ▲" : " ▼"}
            </b>
            {this.state.expandedSections.usageGuidance && (
              <p>
                AgeMate基于本团队开发的UI2Vec模型，使用云端预先计算好的UI图像向量进行UI界面分类，通过语音和视觉的形式对当前APP界面进行功能介绍，并给予老人操作演示，分步骤指导老年人使用手机。
              </p>
            )}
          </div>
        </div>
      ),
    };

    return (
      <div id="step-demo">
        <Content style={{ padding: "10px" }}>
          <Title level={3} style={{ textAlign: "center" }}>
            <b>Technical Implementation</b>
          </Title>

          <Paragraph style={{ fontSize: "16px" }}>
            {CONTENT[this.props.language]}
          </Paragraph>

          <Image
            src={arch_pic}
            style={{
              width: "80%",
              height: "auto",
              display: "block",
              margin: "auto",
            }}
            preview={false}
          />
        </Content>
      </div>
    );
  }
}
