import React from "react";

function ChatBubbleSystem({ chat, type }) {
  return (
    <div className={`text-gray-400 text-xs text-center py-2`}>
      {chat.content}
    </div>
  );
}

export default ChatBubbleSystem;
