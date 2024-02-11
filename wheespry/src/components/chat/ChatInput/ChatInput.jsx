import React from "react";
import { Input, Button } from "antd";
const { TextArea } = Input;

function ChatInput() {
  return (
    <div className="flex bg-white px-4 py-2 items-stretch">
      <div className="flex-grow mr-2">
        <TextArea autoSize={{ minRows: 1, maxRows: 6 }} />
      </div>
      <Button className="flex-none" style={{ height: "100%" }}>
        Submit
      </Button>
    </div>
  );
}

export default ChatInput;
