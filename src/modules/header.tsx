import React, { useState } from "react";
import { Affix } from "antd";
import type { MenuProps } from "antd";
import { Menu, Alert, Modal } from "antd";

const items: MenuProps["items"] = [
  {
    label: <a href="/">Home</a>,
    key: "Home",
    children: [
      {
        key: "About",
        label: <a href="/#About">About</a>,
      },
      {
        key: "Updates",
        label: <a href="/#Updates">Updates</a>,
      },
      {
        key: "Publications",
        label: <a href="/#Publications">Publications</a>,
      },
      {
        key: "Projects",
        label: <a href="/#Projects">Projects</a>,
      },
    ],
  },
  {
    label: (
      <a
        // href="https://drive.google.com/file/d/1zgHw_RPBqQk40o1dyHcng6SIJc9ChEMh/view?usp=drive_link"
        referrerPolicy="no-referrer"
        target="_blank"
      >
        CV
      </a>
    ),
    key: "CV",
  },
  {
    label: <a href="misc">Misc</a>,
    key: "Misc",
  },
];

const HeaderMenu: React.FC = () => {
  const [current, setCurrent] = useState("Home");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onClick: MenuProps["onClick"] = (e) => {
    // console.log("click ", e);
    setCurrent(e.key);
    if (e.key === "CV") {
      setIsModalOpen(true);
    }
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
      <Modal
        open={isModalOpen}
        footer={null}
        closeIcon={false}
        onCancel={handleCancel}
      >
        <Alert
          message="I currently only send my CV upon request. Please contact via Email. "
          type="error"
          showIcon
        />
      </Modal>
    </>
  );
};

export default HeaderMenu;
