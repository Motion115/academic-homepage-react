import React from "react";
import { ConfigProvider, Layout, Space, Typography } from "antd";
import Routing from "./Routing";
import HeaderAnchor from "./modules/anchor";
import HeaderMenu from "./modules/header";
const { Content, Header, Footer } = Layout;
const { Paragraph, Text, Title } = Typography;

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
        Menu: {
          itemBorderRadius: 12,
          subMenuItemBorderRadius: 6,
          horizontalItemBorderRadius: 8,
        },
      },
    }}
  >
    <Routing></Routing>
    {/* <WebsiteLayout></WebsiteLayout> */}
  </ConfigProvider>
);

export default App;
