import React from "react";
import { useState } from "react";
import {
  FilePdfOutlined,
  SearchOutlined,
  GithubOutlined,
  VideoCameraOutlined,
  AudioOutlined,
  TrophyOutlined,
  InfoCircleOutlined,
  ArrowDownOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

import { Row, Col, Space, Typography, Tag, Button, Divider } from "antd";
import LinkTag from "./link_tag";
import colorProjection from "../constanats/constants";
import "../constanats/constants";
const { Text } = Typography;

interface TimeEntrySpec {
  startTime: string;
  endTime?: string;
  content: JSX.Element;
}

const TimeEntry: React.FC<TimeEntrySpec> = (props: TimeEntrySpec) => {
  return (
    <div>
      <Row gutter={{ xs: 4, sm: 8, md: 16, lg: 16 }}>
        <Col span={18}>
          <Text>{props.content}</Text>
        </Col>
        <Col span={6} style={{ textAlign: "right" }}>
          <Text>
            {props.startTime} {props.endTime ? <>- {props.endTime}</> : null}
          </Text>
        </Col>
      </Row>
    </div>
  );
};

export default TimeEntry;
