import React from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";

import { Row, Col, Space, Image } from "antd";

const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

const PubEntry: React.FC = () => (
  <Space>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
        <div style={style}>
          <Image
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </div>
      </Col>
      <Col className="gutter-row" span={18}>
        <div style={style}>col18</div>
      </Col>
    </Row>
  </Space>
);

export default PubEntry;
