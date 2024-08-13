import React from "react";
import { Typography } from "antd";
import { Layout, Row } from "antd";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

export default class ConceptVideo extends React.Component {
  render() {
    const CONTENT = {
      english: (
        <div>
          For a more immersive understanding, please view our demo video
          showcasing AgeMate's capabilities.
        </div>
      ),
      chinese: (
        <div>"这是我们的DEMO视频，如果你想更加深入地了解我们，来看吧！"</div>
      ),
    };

    return (
      <div>
        <Content style={{ padding: "10px 10px 10px 10px" }}>
          {/* <Title
            level={3}
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <b>Demo Video</b>
          </Title> */}

          <Row
            style={{
              width: "60%",
              height: "auto",
              display: "block",
              margin: "auto",
            }}
          >
            <iframe
              src="https://player.bilibili.com/player.html?bvid=BV17z4y147Gf&page=1&as_wide=1&high_quality=1&danmaku=0&autoplay=0&t=0"
              allowfullscreen="allowfullscreen"
              width="100%"
              height="400px"
              frameborder="0"
              sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"
              title="concept-video"
            ></iframe>
          </Row>

          <Paragraph style={{ fontSize: "16px", textAlign: "center" }}>
            {CONTENT[this.props.language]}
          </Paragraph>
        </Content>
      </div>
    );
  }
}
