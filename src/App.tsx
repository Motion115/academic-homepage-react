import React from "react";
import { ConfigProvider } from "antd";
import WebsiteLayout from "./layout";

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#B3E5FC",
        colorBgLayout: "#ffffff",
        borderRadius: 4,
        fontSize: 16,
        fontFamily:
          "Maven Pro, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
      },
      components: {
        // Divider: {
        //   verticalMarginInline: 0,
        // },
        Layout: {
          headerBg: "#ffffff",
          headerPadding: 0,
          footerPadding: "50px 0px 50px 0px",
        },
      },
    }}
  >
    <WebsiteLayout></WebsiteLayout>
  </ConfigProvider>
);

export default App;
