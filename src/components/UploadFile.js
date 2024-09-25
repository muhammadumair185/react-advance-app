import React, { useState } from "react";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const FileUpload = () => {
  const [fileList, setFileList] = useState([]);

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const customRequest = ({ file, onSuccess, onError }) => {
    // Simulating a successful upload for demonstration purposes
    setTimeout(() => {
      onSuccess();
      message.success(`${file.name} uploaded successfully`);
    }, 1000);
  };

  return (
    <div>
      <Upload
        customRequest={customRequest}
        fileList={fileList}
        onChange={handleFileChange}
        maxCount={5}
        showUploadList={{ showRemoveIcon: true }}
        beforeUpload={() => false} // Prevent automatic upload
      >
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
    </div>
  );
};

export default FileUpload;
