import React, { useState } from "react";

import { Row, Col, Space, Image, Typography, Tag, Button } from "antd";
import PubEntry from "./group_items/pub_entry_spec";
import colorProjection from "./constanats/constants";
const { Text } = Typography;

const publicationList = [
  <PubEntry
    paperTitle="iTutor: A Generative Tutorial System for Teaching the Elders to Use
          Smartphone Applications"
    authors={
      <>
        <b>Ruishi Zou</b>, Zi Ye, Chen Ye
      </>
    }
    venueType="Conference"
    venueShort="UIST'23 EA"
    venueFull="Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology"
    paperLink=""
    exploreLink="https://motion115.github.io/iTutor"
    codeLink="https://github.com/Motion115/iTutor"
  />,
  <PubEntry
    paperTitle="Chart2Vec: A Universal Embedding of Context-Aware Visualizations"
    authors={
      <>
        Qing Chen, Ying Chen, <b>Ruishi Zou</b>, Wei Shuai, Yi Guo, Jiazhe Wang,
        Nan Cao
      </>
    }
    venueType="underReview"
    venueShort="TVCG (2023)"
    venueFull="Under Review at IEEE Transactions on Visualization and Computer Graphics"
    paperLink="https://arxiv.org/abs/2306.08304"
    exploreLink="http://chart2vec.idvxlab.com/"
    codeLink="https://github.com/idvxlab/chart2vec"
  />,
];

// get the keys out of colorProjection object
const tagsData = Object.keys(colorProjection);

const PubList: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [displayedPub, setDisplayedPub] =
    useState<JSX.Element[]>(publicationList);
    
  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    // console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
    if (nextSelectedTags.length === 0) {
      setDisplayedPub(publicationList);
    } else {
      let filteredPub: JSX.Element[] = []
      publicationList.forEach((pub) => {
        // console.log(pub.props.venueType)
        if (nextSelectedTags.includes(pub.props.venueType)) {
          filteredPub.push(pub);
        }
      })
      setDisplayedPub(filteredPub);
      // console.log(filteredPub)
    }
  };


  return (
    <div>
      <Space direction="vertical">
        <Space size={[0, 8]} wrap>
          {tagsData.map((tag) => (
            <Tag.CheckableTag
              key={tag}
              checked={selectedTags.includes(tag)}
              onChange={(checked) => handleChange(tag, checked)}
            >
              <Text>{tag}</Text>
            </Tag.CheckableTag>
          ))}
        </Space>
        {displayedPub}
      </Space>
    </div>
  );
};

export default PubList;
