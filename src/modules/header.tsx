import React, { useState } from "react";
import { Affix } from "antd";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: <a href="#Home">Home</a>,
    key: "home",
  },
  {
    label: <a href="#Updates">Updates</a>,
    key: "updates",
  },
  {
    label: <a href="#Publications">Publications</a>,
    key: "publications",
  },
  {
    label: <a href="#Projects">Projects</a>,
    key: "projects",
  },
  {
    label: (
      <a
        href="https://motion115.github.io/static/misc.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Misc
      </a>
    ),
    key: "Misc",
  },
];

const HeaderMenu: React.FC = () => {
  const [current, setCurrent] = useState("Home");

  const onClick: MenuProps["onClick"] = (e) => {
    // console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <Affix>
        <Menu
          onClick={onClick}
        //   selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </Affix>
    </>
  );
};

export default HeaderMenu;
