import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import React from "react";
import { Avatar, Layout, Divider, Space, Typography } from "antd";

import PublicationDisplayList from "./drafts/publications";
import ProjectDisplayList from "./drafts/projects";
const { Paragraph, Text, Title } = Typography;


const App: React.FC = () => (
  <Layout style={{ width: "65%", margin: "auto", backgroundColor: "#ffffff" }}>

    <Space direction="vertical">
      <Title level={3} id="Publications">Publications</Title>
      <Divider style={{ margin: 0 }} />
      <PublicationDisplayList></PublicationDisplayList>

      <Title level={3} id="Projects">Projects</Title>
      <Divider style={{ margin: 0 }} />
      <ProjectDisplayList></ProjectDisplayList>

      <Title level={3} id="News">News</Title>
      <Divider style={{ margin: 0 }} />

      
    </Space>
  </Layout>
);

export default App;
