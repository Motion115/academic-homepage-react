import React from "react";
import {
  FilePdfOutlined,
  SearchOutlined,
  GithubOutlined,
  VideoCameraOutlined,
  AudioOutlined,
  TrophyOutlined,
  InfoCircleOutlined
} from "@ant-design/icons";

import { Row, Col, Space, Typography, Tag } from "antd";
import LinkTag from "./link_tag";
import colorProjection from "../constanats/constants";
import "../constanats/constants";
const { Text } = Typography;

interface projectEntrySpec {
  paperTitle: string;
  role:
    | "Project Leader"
    | "Member"
    | "Contributor"
    | "Main Contributor"
    | "Independent Work";
  venueType: "Competition" | "Course" | "Other";
  duration: string;
  venueFull: string;
  awardName?: string;
  paperLink?: string;
  exploreLink?: string;
  codeLink?: string;
  videoLink?: string;
  presentationLink?: string;
  materialLink?: string;
}

const projectEntry: React.FC<projectEntrySpec> = (props: projectEntrySpec) => (
  <Space>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={24}>
        <Text strong={true}>{props.paperTitle}</Text>
        <br />
        <Text>{props.role}</Text>
        <br />
        <Tag color={colorProjection[props.venueType]}>
          <i>
            <b>{props.duration}</b>
          </i>
        </Tag>
        <Text italic={true}>{props.venueFull}</Text>
        <br />
        {props.awardName ? (
          <>
            <Text>
              <TrophyOutlined style={{ color: "#B31B1B" }} /> {props.awardName}
            </Text>
            <br />
          </>
        ) : null}

        <Space size={[0, 8]} wrap>
          <LinkTag
            icon={<FilePdfOutlined />}
            link={props.paperLink ? props.paperLink : ""}
            text="Paper"
          ></LinkTag>
          <LinkTag
            icon={<SearchOutlined />}
            link={props.exploreLink ? props.exploreLink : ""}
            text="Explore"
          ></LinkTag>
          <LinkTag
            icon={<GithubOutlined />}
            link={props.codeLink ? props.codeLink : ""}
            text="Code"
          ></LinkTag>
          <LinkTag
            icon={<VideoCameraOutlined />}
            link={props.videoLink ? props.videoLink : ""}
            text="Video"
          ></LinkTag>
          <LinkTag
            icon={<AudioOutlined />}
            link={props.presentationLink ? props.presentationLink : ""}
            text="Presentation"
          ></LinkTag>
          <LinkTag
            icon={<InfoCircleOutlined />}
            link={props.materialLink ? props.materialLink : ""}
            text="Material"
          ></LinkTag>
        </Space>
      </Col>
    </Row>
  </Space>
);

export default projectEntry;
