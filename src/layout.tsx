import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import React from "react";
import { Avatar, Layout, List, Space, Typography } from "antd";

import PubList from "./modules/pub_list";
const { Paragraph } = Typography;


const App: React.FC = () => (
  <Layout style={{ width: "70%", margin: "auto", backgroundColor: "#ffffff" }}>

    <Space>
      <PubList></PubList>
    </Space>
  </Layout>
);

export default App;
