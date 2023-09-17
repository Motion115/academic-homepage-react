import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, Layout, List, Space } from 'antd';

import PubList from './modules/pub_entry'
import PubSpec from './modules/pub_entry_spec'


const App: React.FC = () => (
  <Layout style={{ width: "60%", margin: "auto" }}>
    <Space>
      <PubList></PubList>
    </Space>
    <Space>
      <PubSpec></PubSpec>
    </Space>
  </Layout>
);

export default App;