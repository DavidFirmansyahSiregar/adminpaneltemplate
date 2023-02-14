import React, { useContext, useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../App";
import {
  theme,
  Layout,
  Menu,
  Typography,
  Breadcrumb,
  Dropdown,
  Button,
  Divider,
  Modal,
  Input,
  Label
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { getCorpInfo } from "../../../_services/Demo/corpInfo";

import { CorpInfoTable } from "./CorpInfoTable";
import { DemoTable } from "./DemoTable";

const { Search } = Input;
const { Text, Title } = Typography;

export const Operation = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [corporateData, setCorporateData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getCorpInfo(setCorporateData);
  }, []);

  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <div
      className="operation-container"
      style={{
        "--brRd": `${borderRadiusLG}px`,
        "--bgc":
          isDarkMode === true
            ? "var(--contentContainerDarkMode)"
            : "var(--contentContainerLightMode)",
      }}
    >
      <div className="operation-top-section">
        
        <div className="button-register-container">
          <Button icon={<PlusOutlined />} onClick={showModal}>
            Register Corporate
          </Button>
          <Form>      
          <Modal
            title="Add Corporate"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel} 
          >
          </Modal>
          </Form>   
        </div>
        <div className="search-container">
          <Search placeholder="Search Something?" enterButton />
        </div>
      </div>
      <div className="operation-bottom-section">
        <Title level={4}>Corporate Data</Title>
        {/* <Text>Table</Text> */}
        {/* <CorpInfoTable 
                    corporateData={corporateData} 
                /> */}
        <DemoTable />
      </div>
    </div>
  );
};
