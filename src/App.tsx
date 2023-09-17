import React from "react";
import { Button, ConfigProvider, Layout, Space, theme } from "antd";
import WebsiteLayout from "./layout";

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#B3E5FC",
        borderRadius: 4,
        fontFamily:
          "Maven Pro, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
      },
      components: {
        // Divider: {
        //   verticalMarginInline: 0,
        // },
      },
    }}
  >
    <WebsiteLayout></WebsiteLayout>
  </ConfigProvider>
);

export default App;
