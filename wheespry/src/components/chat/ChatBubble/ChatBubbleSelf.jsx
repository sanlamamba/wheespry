import React from "react";

function ChatBubbleSelf({ chat }) {
  console.log(chat);
  return (
    <div className="bg-white px-4 py-2 ml-11 flex-col rounded border-gray-200 border my-1">
      <div className="text-xs border-b border-gray-200 pb-2 w-fit pr-5 mb-2">
        {chat.senderId}
      </div>
      {chat.content}
    </div>
  );
}

export default ChatBubbleSelf;
