import { Typography } from "antd";
import TimeEntry from "../modules/group_items/time_entry";
import TimedPubList from "../modules/timed_list";
import { ZhihuOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBilibili } from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
const { Title, Paragraph, Text, Link } = Typography;

const webList = [
  <TimeEntry
    content={
      <a
        href="https://space.bilibili.com/1006502493"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faBilibili} /> Project Farfalle
      </a>
    }
  />,
  <TimeEntry
    content={
      <a
        href="https://www.zhihu.com/people/motion-50-73"
        target="_blank"
        rel="noreferrer noopener"
      >
        <ZhihuOutlined /> Blog (Zhihu)
      </a>
    }
  />,
  <TimeEntry
    content={
      <a
        href="http://www.tup.tsinghua.edu.cn/booksCenter/book_08660001.html"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FontAwesomeIcon icon={faBook} /> Prose Writing Collection (High School)
        子衿雅墨
      </a>
    }
  />,
];

const PrecenseOnWeb = () => {
  return <TimedPubList itemList={webList} displayLength={10} />;
};

export default PrecenseOnWeb;
