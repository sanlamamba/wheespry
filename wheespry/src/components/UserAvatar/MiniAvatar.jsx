import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { Avatar, Tooltip, Space } from "antd";

function MiniAvatar({ color, username }) {
  return (
    <Tooltip title={username || "stranger"}>
      <Avatar
        size={16}
        style={{ backgroundColor: color || "grey" }}
        icon={<UserOutlined />}
      />
    </Tooltip>
  );
}

export default MiniAvatar;
