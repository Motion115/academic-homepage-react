import { Typography } from "antd";
import TimeEntry from "../modules/group_items/time_entry";
import TimedListComponent from "../modules/timed_list";
const { Title, Paragraph, Text, Link } = Typography;

const updatesList = [
  <TimeEntry
    startTime="August 26, 2023"
    content={
      <>
        Meeting new friends at training session for{" "}
        <a
          href="http://hci.oppo.com/EventDynamics/info.aspx?itemid=74091"
          target="_blank"
          rel="noreferrer noopener"
        >
          C4-HCI 2023
        </a>
        !
      </>
    }
  />,
  <TimeEntry
    startTime="August 17, 2023"
    content={
      <>
        One extended abstract (<b>iTutor</b>) has been accepted to UIST 2023
        poster track!
      </>
    }
  />,
  <TimeEntry
    startTime="June 16, 2023"
    content={
      <>
        One paper (<b>Chart2Vec</b>) released on arXiv!
      </>
    }
  />,
  <TimeEntry
    startTime="Dec 06, 2022"
    content={
      <>
        <b>Forest Orchestra</b> project won the "Award in Creativity" in{" "}
        <a
          href="http://hci.oppo.com/EventDynamics/info.aspx?itemid=37455"
          target="_blank"
          rel="noreferrer noopener"
        >
          C4-HCI 2022
        </a>
        !
      </>
    }
  />,
];

const NewsDisplayList = () => {
  return <TimedListComponent itemList={updatesList} displayLength={2}/>;
};

export default NewsDisplayList;
