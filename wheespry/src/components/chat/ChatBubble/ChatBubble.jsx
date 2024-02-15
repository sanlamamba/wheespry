import React from "react";
import ChatBubbleSelf from "./ChatBubbleSelf";
import ChatBubbleUser from "./ChatBubbleUser";
import ChatBubbleSystem from "./ChatBubbleSystem"; // Make sure to import this if you're using it

function ChatBubble({ chat, participant }) {
  const user = {
    userId: "user_id_001",
    socketId: "current_socket_id_abc123",
    username: "UserOne",
    status: "online",
    lastSeen: "2024-02-12T10:00:00Z",
    color: "green",
  };

  // For system messages
  if (chat.senderId === "admin_999") {
    return <ChatBubbleSystem chat={chat} />;
  }

  // For messages sent by the current user
  if (chat.senderId == user.userId) {
    return <ChatBubbleSelf chat={chat} user={participant} />;
  }

  // For messages sent by other users
  return <ChatBubbleUser chat={chat} user={participant} />;
}

export default ChatBubble;
