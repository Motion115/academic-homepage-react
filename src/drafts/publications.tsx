import { Typography } from "antd";
import ListComponent from "../modules/pub_list";
import PubEntry from "../modules/group_items/pub_entry_spec";

const { Title, Paragraph, Text, Link } = Typography;

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
    venueType="Pending"
    venueShort="TVCG (2023)"
    venueFull="Under Review at IEEE Transactions on Visualization and Computer Graphics"
    paperLink="https://arxiv.org/abs/2306.08304"
    exploreLink="http://chart2vec.idvxlab.com/"
    codeLink="https://github.com/idvxlab/chart2vec"
  />,
];

const PublicationDisplayList = () => {
  return <ListComponent itemList={publicationList} />;
};

export default PublicationDisplayList;