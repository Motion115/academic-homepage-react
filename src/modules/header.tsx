import React, { useState } from "react";
import { Affix } from "antd";
import type { MenuProps } from "antd";
import { Menu, Alert, Modal } from "antd";
import items from "../drafts/menu";

const HeaderMenu: React.FC = () => {
  const [current, setCurrent] = useState("Home");
  const [isModalOpen, setIsModalOpen] = useState(false);
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
