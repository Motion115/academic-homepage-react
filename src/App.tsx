import React from "react";
import { Button, ConfigProvider, Layout, Space, theme } from "antd";
import WebsiteLayout from "./layout";

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "70B942",
        borderRadius: 4,
        fontFamily:
          "Maven Pro, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
      },
      // algorithm: theme.darkAlgorithm,
    }}
  >
    <WebsiteLayout></WebsiteLayout>
  </ConfigProvider>
);

export default App;
