import React, { useState, useEffect } from "react";
import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Space, Typography, Image, Divider, Layout } from "antd";
import Selfie from "../assets/selfie.jpg";
const { Text, Paragraph, Title } = Typography;

interface InfoSpec {
  itemList: JSX.Element[];
}

const PersonalInfo: React.FC<InfoSpec> = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let picWidthSpec = "20%";
  if (screenWidth < 780) picWidthSpec = "40%";
  else picWidthSpec = "20%";

  return (
    <div>
      <Space direction="vertical" style={{ width: "100%" }}>
        {/* <p>Screen Width: {screenWidth}px</p> */}
        <div style={{ textAlign: "center" }}>
          <Image
            style={{
              borderRadius: "50%",
            }}
            src={Selfie}
            width={picWidthSpec}
            preview={false}
          ></Image>
        </div>
        <div style={{ textAlign: "center" }}>
          <Text style={{ fontSize: "28px" }} strong={true}>
            Ruishi Zou
          </Text>
          <br />
          <Text style={{ fontSize: "18px" }}>Tongji University</Text>
        </div>
        <div style={{ fontSize: "20px", textAlign: "center" }}>
          <a
            href="https://scholar.google.com/citations?user=RPQrY5AAAAAJ"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faGraduationCap} />
          </a>
          <Divider type="vertical"></Divider>
          <a
            href="https://github.com/Motion115"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GithubOutlined />
          </a>
          <Divider type="vertical"></Divider>
          <a
            href="https://www.linkedin.com/in/motion115"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LinkedinOutlined />
          </a>
          <Divider type="vertical"></Divider>
          <a
            href="mailto:Motion115@outlook.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <MailOutlined />
          </a>
        </div>

        <div style={{ width: "60%", margin: "0 auto" }}>
          <Divider></Divider>
        </div>

        <Paragraph>
          I am currently a senior student pursuing a bachelor's degree at Tongji
          University. My research interests primarily lie in the technical side
          of human-computer interaction, focusing on incorporating AI
          technologies into human-centered intelligent systems to extend
          people's abilities. Drawing insights from NLP, CV, and the Web, I plan
          to build, analyze, and evaluate human-centered assistive or
          collaborative systems, providing new perspectives into the technical
          fields and democratizing AI to be more predictable and useable for
          everyone.
        </Paragraph>
        <Paragraph>
          Previously, I have participated in several HCI research projects, with
          topics ranging from Visualization, User Interface, and
          Accessibility. Looking forward, I hope to become an HCI researcher. I
          am seeking a Ph.D. position in HCI, starting in Fall 2024. If you are
          interested in me, feel free to drop me an Email!
        </Paragraph>
      </Space>
    </div>
  );
};

export default PersonalInfo;
