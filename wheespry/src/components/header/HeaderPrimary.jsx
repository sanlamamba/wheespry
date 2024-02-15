import React from "react";
import { FacebookOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip, Typography } from "antd";

function HeaderPrimary() {
  return (
    <header className="p-4 bg-gray-50 border-b border-gray-200 ">
      <div className="container mx-auto flex flex-wrap items-center justify-between lg:flex-nowrap max-w-7xl">
        <span className="text-2xl font-semibold text-primary bg-red">
          Wheespry
        </span>
        <span className="flex flex-col gap-1">
          <div className="flex gap-1 justify-end">
            <Button icon={<FacebookOutlined />}>Search</Button>
            <Button icon={<FacebookOutlined />}>Search</Button>
            <Button icon={<FacebookOutlined />}>Search</Button>
            <Button icon={<FacebookOutlined />}>Search</Button>
            <Button icon={<FacebookOutlined />}>Search</Button>
          </div>
          <div className="flex gap-2 justify-end items-center">
            <h3 className="text-2xl font-bold">35.000+</h3>
            <h3 className="text-xl">online now</h3>
          </div>
        </span>
      </div>
    </header>
  );
}

export default HeaderPrimary;
