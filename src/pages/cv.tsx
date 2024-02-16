import React, { useState, useEffect } from "react";
import { Layout, Typography, Divider } from "antd";

const { Content } = Layout;
const { Title } = Typography;

const CV: React.FC = () => {
  const [fileData, setFileData] = useState<Blob>();

  useEffect(() => {
    fetch("./Ruishi Zou - Public CV - 2402.pdf")
      .then((response) => response.blob())
      .then((data) => {
        setFileData(data);
      })
      .catch((error) => {
        console.error("Error fetching file:", error);
      });
  }, []);

  return (
    <Content id="CV">
      <Title level={4}></Title>
      {fileData && (
        <iframe
          src={URL.createObjectURL(fileData)}
          width="100%"
          height="800px"
          title="CV"
        />
      )}
    </Content>
  );
};

const CVInDom = (
  <div>
    <CV />
  </div>
);

export default CVInDom;
