import { Space, Typography, Image, Divider, Layout } from "antd";

import PersonalInfo from "../modules/info";
import Selfie from "../assets/selfie.jpg";
const { Text, Paragraph, Title } = Typography;

const PersonalIntrouction = () => {
  return (
    <PersonalInfo
      portrait={Selfie}
      name="Ruishi Zou"
      affiliation="Tongji University"
      location="Shanghai, China"
      googleScholar="https://scholar.google.com/citations?user=RPQrY5AAAAAJ"
      github="https://github.com/Motion115"
      linkedin="https://www.linkedin.com/in/motion115"
      email="mailto:Motion115@outlook.com"
      orcid="https://orcid.org/0009-0001-3798-6833"
      personalStatement={
        <>
          <Paragraph>
            I am currently a senior student pursuing a bachelor's degree at
            Tongji University. My research interests primarily lie in the
            technical side of human-computer interaction, focusing on
            incorporating AI technologies into human-centered intelligent
            systems to extend people's abilities. Drawing insights from NLP, CV,
            and the Web, I plan to build, analyze, and evaluate human-centered
            assistive or collaborative systems, providing new perspectives into
            the technical fields and democratizing AI to be more predictable and
            useable for everyone.
          </Paragraph>
          <Paragraph>
            Previously, I have participated in several HCI research projects,
            with topics ranging from Visualization, User Interface, and
            Accessibility. Looking forward, I hope to become an HCI researcher.
            I am seeking a Ph.D. position in HCI, starting in Fall 2024. If you
            are interested in me, feel free to drop me an Email!
          </Paragraph>
        </>
      }
    ></PersonalInfo>
  );
};

export default PersonalIntrouction;
