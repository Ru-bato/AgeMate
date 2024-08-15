import React from "react";
import { Layout, ConfigProvider, Dropdown, Space } from "antd";
import { Button } from "antd";
import {
  GithubOutlined,
  LinkOutlined,
  DownOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import Introduction from "./modules/introduction.js";
import Demonstration from "./modules/demonstration.js";
import ConceptVideo from "./modules/concept-video.js";
import StepDemo from "./modules/step-demo.js";
import TechnicalImplementation from "./modules/technical-implementation.js";
import KeyTechnologies from "./modules/key-technologies.js";
import Showcase from "./modules/showcase.js";
import age_logo from "./assets/age-logo.mp4";

const { Title, Paragraph, Text } = Typography;
const { Header, Footer, Content } = Layout;

const defaultData = {
  borderRadius: "8px",
  colorPrimary: "#35383d",
  fontFamily:
    "Maven Pro, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
  fontFamilyCode: "Maven Pro",
};

const defaultContentStyle = {
  width: "75%",
  margin: "0 auto",
  minHeight: 280,
  background: "#ffffff",
  padding: "10px 10px 10px 10px",
};

const defaultHeaderFooterStyle = {
  width: "75%",
  margin: "0 auto",
  height: "auto",
  background: "#ffffff",
  lineHeight: "1",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "10px 10px 10px 10px",
};
const defaultTailFooterStyle = {
  width: "75%",
  margin: "0 auto",
  height: "auto",
  background: "#99b7e8",
  lineHeight: "1",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "10px 10px 10px 10px",
};

class GlobalLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "english",
    };
  }

  alertNotRealized = () => {
    alert("Ops...Coming soon!");
  };

  render() {
    const TITLE = {
      english: (
        <div>
          AGEMATE: Elderly Smartphone Assistant
          <br />
          Based on Large Models
        </div>
      ),
      chinese: <div>AGEMATE: 基于大模型的老年人手机助手</div>,
    };

    const content = {
      english: "Sunset Manufacturing Team",
      chinese: "夕阳红制造队",
    };

    const INFO = {
      english: (
        <div>
          Liangliang Chan, Yongzhen Mu, Xiyan Huang, Ruogu Lang
          <br />
          Tongji University, Shanghai, China
        </div>
      ),
      chinese: (
        <div>
          陈靓靓，牟泳祯，黄熙雁，郎若谷
          <br />
          同济大学，上海，中国
        </div>
      ),
    };
    const items = [
      {
        key: "1",
        label: "English",
      },
      {
        key: "2",
        label: "中文",
      },
    ];

    return (
      <ConfigProvider
        theme={{
          token: { ...defaultData },
          components: {
            Typography: {
              titleMarginTop: "0.5em",
              titleMarginBottom: "0.3em",
            },
          },
        }}
      >
        <Layout>
          <Header style={defaultHeaderFooterStyle}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <video
                src={age_logo}
                alt="Logo"
                style={{
                  width: "100px",
                  height: "190px",
                  marginRight: "15px",
                  marginLeft: "-60px",
                }}
                autoPlay
                loop
                muted
              />
              <div>
                <Title level={1} style={{ color: "#000000" }}>
                  <i>
                    {/* <b>
                      AGEMATE: Elderly Smartphone Assistant
                      <br />
                      Based on Large Models
                    </b> */}
                    {TITLE[this.state.language]}
                  </i>
                </Title>
              </div>
            </div>
            <Title level={3} style={{ color: "#4d89f0" }}>
              {content[this.state.language]}
              <br />
            </Title>
            <Title
              level={5}
              style={{
                color: "#0b3275",
                fontSize: "16px",
                padding: "0 0 10px 0",
              }}
            >
              {/* Liangliang Chan, Yongzhen Mu, Xiyan Huang, Ruogu Lang
              <br />
              Tongji University, Shanghai, China */}
              {INFO[this.state.language]}
            </Title>
            <Paragraph>
              <Dropdown
                menu={{
                  items,
                  selectable: true,
                  defaultSelectedKeys: ["1"],
                  onClick: ({ key }) => {
                    if (key === "1") {
                      this.setState({
                        language: "english",
                      });
                    } else {
                      this.setState({
                        language: "chinese",
                      });
                    }
                  },
                }}
              >
                <Button type="primary">
                  <Space>
                    <TranslationOutlined />
                    {this.state.language === "english" ? "English" : "中文"}
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </Paragraph>
            <Button
              type="primary"
              href="https://github.com/Ru-bato/AgeMate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined />
              Github
            </Button>{" "}
            &nbsp;&nbsp;
            <Button
              type="primary"
              href="#step-demo"
              target="_self"
              rel="noopener noreferrer"
            >
              <LinkOutlined />
              {/* {this.state.language === "english" ? "Demo" : "演示"} */}
              Demo
            </Button>
            <br />
          </Header>

          <Content style={defaultContentStyle}>
            <ConceptVideo language={this.state.language} />

            <Introduction language={this.state.language} />

            <StepDemo language={this.state.language} />

            <TechnicalImplementation language={this.state.language} />

            <KeyTechnologies language={this.state.language} />

            <Showcase language={this.state.language} />

            <Demonstration language={this.state.language} />
          </Content>

          <Footer style={defaultTailFooterStyle}>
            <Paragraph style={{ color: "#000000" }}>
              Created by <b>Sunset Manufacturing Team</b> ©2024 with{" "}
              <a
                href="https://ant.design/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ant Design
              </a>
            </Paragraph>
            <Text style={{ color: "#000000" }}>
              Special thanks to <b>Haotian Zhang</b> for his significant
              participation and contribution to this project.
            </Text>
          </Footer>
        </Layout>
      </ConfigProvider>
    );
  }
}

export default GlobalLayout;
