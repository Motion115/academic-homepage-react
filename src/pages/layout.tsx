import React from "react";
import { Layout, Divider, Space, Typography } from "antd";

import PublicationDisplayList from "../drafts/publications";
import ProjectDisplayList from "../drafts/projects";
import NewsDisplayList from "../drafts/updates";
import PersonalInfo from "../modules/info";
const { Paragraph, Text, Title } = Typography;
const { Content, Header, Footer } = Layout;

const App: React.FC = () => (
  <Content id="About">
    {/* <HeaderAnchor></HeaderAnchor> */}
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
);

const AppInDom = (
  <div>
    <App />
  </div>
);

export default AppInDom;
