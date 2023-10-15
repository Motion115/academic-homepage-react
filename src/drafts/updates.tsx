import { Typography } from "antd";
import TimeEntry from "../modules/group_items/time_entry";
import TimedPubList from "../modules/timed_list";
const { Title, Paragraph, Text, Link } = Typography;

const updatesList = [
  <TimeEntry
    startTime="Oct 29, 2023"
    endTime="Nov 1, 2023"
    content={
      <>
        I will be attending{" "}
        <a
          href="https://programs.sigchi.org/uist/2023/program/content/127396"
          target="blank"
          rel="noreferrer noopener"
        >
          UIST 23
        </a>{" "}
        in person! Find me at Poster Session B! (San Francisco, CA, USA)
      </>
    }
  />,
  <TimeEntry
    startTime="Oct 20, 2023"
    endTime="Oct 22, 2023"
    content={
      <>
        Entering{" "}
        <a
          href="http://hci.oppo.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          C4-HCI 2023
        </a>{" "}
        finals with project <b>老年人智能手机使用“引路人”</b>. (Hangzhou, China)
      </>
    }
  />,
  <TimeEntry
    startTime="Aug 26, 2023"
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
        ! (Shenzhen, China)
      </>
    }
  />,
  <TimeEntry
    startTime="Aug 17, 2023"
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
  return <TimedPubList itemList={updatesList} displayLength={2}/>;
};

export default NewsDisplayList;
