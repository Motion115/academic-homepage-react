import React, { useState } from "react";

import { Row, Col, Space, Image, Typography, Tag, Button } from "antd";

import ProjectEntry from "./group_items/project_entry_spec";

const projList = [
  <ProjectEntry
    paperTitle="UI2Vec: A Multimodal Embedding Method for Robust UI Classification"
    role="Independent Work"
    venueType="Course"
    duration="2023.3 - 2023.6"
    venueFull="Multimedia Course Project"
    paperLink=""
    exploreLink="https://motion115.github.io/iTutor"
    codeLink="https://github.com/Motion115/UI2Vec"
    materialLink="https://github.com/Motion115/UI2Vec"
  />,
];


const projectList: React.FC = () => {

  return (
    <div>
      <Space direction="vertical">
        {projList}
      </Space>
    </div>
  );
};

export default projectList;