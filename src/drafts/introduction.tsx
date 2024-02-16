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
      email="mailto:ruishi.ray.zou@gmail.com"
      orcid="https://orcid.org/0009-0001-3798-6833"
      twitter="https://twitter.com/_ray_zou"
      personalStatement={
        <>
          <Paragraph>
            I am currently a senior student pursuing a bachelor's degree at
            Tongji University. My research interests lie in technical
            human-computer interaction (HCI). Specifically, I aspire to explore
            the application of AI in human-computer systems and answer the
            following two questions within two HCI fields:
            <li>
              <b>Visualization</b>: How can machine learning methods support the
              authoring of visualizations, and what insights can we gain from
              visualization systems to enhance our understanding of machine
              learning models?
            </li>
            <li>
              <b>Engineering Interactive Systems & Tools</b>: How can we
              effectively incorporate AI advancements, such as Computer Vision
              and Natural Language Processing, into interactive systems to
              improve their adaptability and accessibility?
            </li>
          </Paragraph>
          <Paragraph>
            Previously, I have participated in several HCI research projects
            related to my research interests, with topics ranging from
            Visualization, User Interface, and Accessibility. Looking forward, I
            hope to become an HCI researcher. I am seeking a Ph.D. position in
            HCI, starting in Fall 2024.{" "}
            <b>If you see me as a good fit, feel free to drop me an Email</b>!
          </Paragraph>
        </>
      }
    ></PersonalInfo>
  );
};

export default PersonalIntrouction;
