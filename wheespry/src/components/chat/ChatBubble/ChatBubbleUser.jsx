import React from "react";

function ChatBubbleUser({ chat, user }) {
  console.log("USER ", user.color);
  return (
    <div
      className={`bg-white px-4 py-2 mr-11 flex-col rounded border-${user.color}-500 border my-1`}
    >
      <div className="text-xs border-b border-gray-200 pb-2 w-fit pr-5 mb-2">
        {chat.senderId}
      </div>
      {chat.content}
    </div>
  );
}

export default ChatBubbleUser;
