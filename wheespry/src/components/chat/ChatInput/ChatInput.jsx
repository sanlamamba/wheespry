import React from "react";
import { Input, Button } from "antd";
const { TextArea } = Input;

function ChatInput() {
  return (
    <div className="flex bg-white p-4 items-stretch">
      <div className="flex-grow mr-2">
        <TextArea autoSize={{ minRows: 2, maxRows: 6 }} />
      </div>
      <Button
        type="default"
        danger
        className="flex-none mr-1 "
        style={{ height: "100%" }}
      >
        Stop
      </Button>
      <Button
        type="primary"
        className="flex-none bg-blue-500"
        style={{ height: "100%" }}
      >
        Submit
      </Button>
    </div>
  );
}

export default ChatInput;
