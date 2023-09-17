import React from "react";
import { Button, ConfigProvider, Layout, Space, theme } from "antd";
import PageStructure from "./layout";

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "70B942",
        borderRadius: 4,
      },

      //algorithm: theme.darkAlgorithm,
    }}
  >
      <PageStructure></PageStructure>
  </ConfigProvider>
);

export default App;
