import React from "react";
import { Layout, Divider, Space, Typography } from "antd";

import PublicationDisplayList from "./drafts/publications";
import ProjectDisplayList from "./drafts/projects";
import NewsDisplayList from "./drafts/updates";
import PersonalInfo from "./modules/info";
import HeaderMenu from "./modules/header";
const { Paragraph, Text, Title } = Typography;
const { Content, Header, Footer } = Layout;

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: "100%" }}>
    <Layout style={{ width: "70%", padding: "1%", margin: "0 auto" }}>
      <Header>
        <HeaderMenu></HeaderMenu>
      </Header>
      <Content id="Home">
        <br />
        <PersonalInfo itemList={[]}></PersonalInfo>
        <Title level={4} id="Updates">
          Updates
        </Title>
        <Divider style={{ margin: "0 0 1% 0" }} />
        <NewsDisplayList></NewsDisplayList>

        <Title level={4} id="Publications">
          Publications
        </Title>
        <Divider style={{ margin: "0 0 1% 0" }} />
        <PublicationDisplayList></PublicationDisplayList>

        <Title level={4} id="Projects">
          Projects
        </Title>
        <Divider style={{ margin: "0 0 1% 0" }} />
        <ProjectDisplayList></ProjectDisplayList>
      </Content>
      <Footer>
        <Text>Copyright © 2022-2023. All Rights Reserved.</Text>
      </Footer>
    </Layout>
  </Space>
);

export default App;
