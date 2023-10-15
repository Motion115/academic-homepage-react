import { Typography } from "antd";
import PubEntry from "../modules/group_items/pub_entry_spec";
import PubList from "../modules/pub_list";
const { Title, Paragraph, Text, Link } = Typography;

const projList = [
  <PubEntry
    paperTitle="Music Patterns and Music Models"
    authors={<>Contributor, Advised by Prof. Roger B. Dannenberg</>}
    venueType="Research"
    venueFull="Internship Project (2023.4 - Now, Remote)"
    affiliation="Carnegie Mellon University"
  />,
  <PubEntry
    paperTitle="UI2Vec: A Multimodal Embedding Method for Robust UI Classification"
    authors={<>Independent Work</>}
    venueType="Course"
    venueFull="Multimedia Course Project (2023.3 - 2023.6)"
    paperLink="https://drive.google.com/file/d/1CYStKrj8HM1veDg_hFkM0_1UsXBbYoXS/view?usp=drive_link"
    codeLink="https://github.com/Motion115/UI2Vec"
    affiliation="Tongji University"
  />,
  <PubEntry
    paperTitle="Forest Orchestra – Interactive Conducting Game for Music Education"
    authors={<>Contributor</>}
    venueType="Competition"
    venueFull="China Collegiate Computing Contest - HCI Innovation Competition 2022 (2022.9 - 2022.12)"
    awardName="Award in Creativity (top 4%)"
    affiliation="Tongji University"
  />,
  <PubEntry
    paperTitle="Data-driven Approach on Identifying Systemic Financial Risk"
    authors={<>Contributor</>}
    venueType="Research"
    venueFull="Student Innovation Training Program (2022.5 - 2023.3)"
    affiliation="Tongji University"
  />,
];

const ProjectDisplayList = () => {
  return <PubList itemList={projList} />;
};

export default ProjectDisplayList;
