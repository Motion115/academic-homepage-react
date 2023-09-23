import { Anchor, Typography } from "antd";
const { Text, Title } = Typography;

const HeaderAnchor: React.FC = () => (
  <>
    <div>
      <Anchor
        direction="horizontal"
        style={{ background: "#ffffff" }}
        items={[
          {
            key: "Home",
            href: "#Home",
            title: <div style={{ fontSize: "18px" }}>Home</div>,
          },
          {
            key: "Updates",
            href: "#Updates",
            title: <div style={{ fontSize: "18px" }}>Updates</div>,
          },
          {
            key: "Publications",
            href: "#Publications",
            title: <div style={{ fontSize: "18px" }}>Publications</div>,
          },
          {
            key: "Projects",
            href: "#Projects",
            title: <div style={{ fontSize: "18px" }}>Projects</div>,
          },
          {
            key: "Misc",
            href: "https://motion115.github.io/static/misc.html",
            title: <div style={{ fontSize: "18px" }}>Misc</div>,
          },
          {
            key: "Contact",
            href: "misc",
            title: <div style={{ fontSize: "18px" }}>Test</div>,
          },
        ]}
      />
    </div>
  </>
);

export default HeaderAnchor;
