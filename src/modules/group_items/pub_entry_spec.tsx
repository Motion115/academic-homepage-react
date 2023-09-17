import React, { ReactHTML } from "react";
import {
  FilePdfOutlined,
  SearchOutlined,
  GithubOutlined,
  VideoCameraOutlined,
  AudioOutlined,
  TrophyOutlined
} from "@ant-design/icons";

import { Row, Col, Space, Typography, Tag } from "antd";
import LinkTag from "./link_tag";
import colorProjection from "../constanats/constants";
import "../constanats/constants";
const { Text } = Typography;

interface PubEntrySpec {
  paperTitle: string;
  authors: JSX.Element;
  venueType: "Conference" | "Journal" | "Workshop" | "arXiv" | "underReview" | "Other";
  venueShort: string;
  venueFull: string;
  awardName?: string;
  paperLink?: string;
  exploreLink?: string;
  codeLink?: string;
  videoLink?: string;
  presentationLink?: string;
}

const PubEntry: React.FC<PubEntrySpec> = (props: PubEntrySpec) => (
  <Space>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={24}>
        <Text strong={true}>{props.paperTitle}</Text>
        <br />
        <Text>{props.authors}</Text>
        <br />
        <Tag color={colorProjection[props.venueType]}>
          <i>
            <b>{props.venueShort}</b>
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
        </Space>
      </Col>
    </Row>
  </Space>
);

export default PubEntry;
