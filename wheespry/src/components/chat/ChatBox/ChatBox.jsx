import React, { useEffect } from "react";
import ChatInput from "../ChatInput/ChatInput";
import ChatBubble from "../ChatBubble/ChatBubble";

const demoChats = {
  chatId: "unique_chat_id_123456",
  participants: [
    {
      userId: "user_id_001",
      socketId: "current_socket_id_abc123",
      username: "UserOne",
      status: "online",
      lastSeen: "2024-02-12T10:00:00Z",
      color: "green",
    },
    {
      userId: "user_id_002",
      socketId: "current_socket_id_def456",
      username: "UserTwo",
      status: "offline",
      lastSeen: "2024-02-12T09:45:00Z",
      color: "green",
    },
    {
      userId: "user_id_003",
      socketId: "current_socket_id_ghi789",
      username: "UserThree",
      status: "online",
      lastSeen: "2024-02-12T09:45:00Z",
      color: "blue",
    },
  ],
  messages: [
    {
      messageId: "message_id_0001",
      senderId: "user_id_001",
      content: "Hello, UserTwo!",
      timestamp: "2024-02-12T08:30:00Z",
      status: "delivered",
      type: "text",
    },
    {
      messageId: "message_id_0002",
      senderId: "user_id_002",
      content: "Hi, UserOne! How are you?",
      timestamp: "2024-02-12T08:31:00Z",
      status: "read",
      type: "text",
    },
    {
      messageId: "message_id_0003",
      senderId: "admin_999",
      content: "This chat is now secured with end-to-end encryption.",
      timestamp: "2024-02-12T08:32:00Z",
      status: "system",
      type: "system",
    },
    {
      messageId: "message_id_0004",
      senderId: "user_id_001",
      content: "That's great to hear!",
      timestamp: "2024-02-12T08:33:00Z",
      status: "delivered",
      type: "text",
    },
    {
      messageId: "message_id_0005",
      senderId: "admin_999",
      content:
        "Reminder: Scheduled maintenance will occur tomorrow from 1-3 AM.",
      timestamp: "2024-02-12T08:35:00Z",
      status: "system",
      type: "system",
    },
    {
      messageId: "message_id_0006",
      senderId: "user_id_002",
      content: "Thanks for the heads up!",
      timestamp: "2024-02-12T08:36:00Z",
      status: "read",
      type: "text",
    },
    {
      messageId: "message_id_0001",
      senderId: "user_id_001",
      content: "Hello, UserTwo!",
      timestamp: "2024-02-12T08:30:00Z",
      status: "delivered",
      type: "text",
    },
    {
      messageId: "message_id_0002",
      senderId: "user_id_002",
      content: "Hi, UserOne! How are you?",
      timestamp: "2024-02-12T08:31:00Z",
      status: "read",
      type: "text",
    },
    {
      messageId: "message_id_0003",
      senderId: "admin_999",
      content: "This chat is now secured with end-to-end encryption.",
      timestamp: "2024-02-12T08:32:00Z",
      status: "system",
      type: "system",
    },
    {
      messageId: "message_id_0004",
      senderId: "user_id_001",
      content: "That's great to hear!",
      timestamp: "2024-02-12T08:33:00Z",
      status: "delivered",
      type: "text",
    },
    {
      messageId: "message_id_0005",
      senderId: "admin_999",
      content:
        "Reminder: Scheduled maintenance will occur tomorrow from 1-3 AM.",
      timestamp: "2024-02-12T08:35:00Z",
      status: "system",
      type: "system",
    },
    {
      messageId: "message_id_0006",
      senderId: "user_id_002",
      content: "Thanks for the heads up!",
      timestamp: "2024-02-12T08:36:00Z",
      status: "read",
      type: "text",
    },
    {
      messageId: "message_id_0001",
      senderId: "user_id_001",
      content: "Hello, UserTwo!",
      timestamp: "2024-02-12T08:30:00Z",
      status: "delivered",
      type: "text",
    },
    {
      messageId: "message_id_0002",
      senderId: "user_id_002",
      content: "Hi, UserOne! How are you?",
      timestamp: "2024-02-12T08:31:00Z",
      status: "read",
      type: "text",
    },
    {
      messageId: "message_id_0003",
      senderId: "admin_999",
      content: "This chat is now secured with end-to-end encryption.",
      timestamp: "2024-02-12T08:32:00Z",
      status: "system",
      type: "system",
    },
    {
      messageId: "message_id_0004",
      senderId: "user_id_001",
      content: "That's great to hear!",
      timestamp: "2024-02-12T08:33:00Z",
      status: "delivered",
      type: "text",
    },
    {
      messageId: "message_id_0005",
      senderId: "admin_999",
      content:
        "Reminder: Scheduled maintenance will occur tomorrow from 1-3 AM.",
      timestamp: "2024-02-12T08:35:00Z",
      status: "system",
      type: "system",
    },
    {
      messageId: "message_id_0006",
      senderId: "user_id_002",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      timestamp: "2024-02-12T08:36:00Z",
      status: "read",
      type: "text",
    },
    {
      messageId: "message_id_0006",
      senderId: "user_id_002",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lwith desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      timestamp: "2024-02-12T08:36:00Z",
      status: "read",
      type: "text",
    },
  ],
  metadata: {
    createdAt: "2024-02-12T08:00:00Z",
    lastActivity: "2024-02-12T08:36:00Z",
    type: "direct",
    unreadCount: 0,
    customSettings: {
      muteNotifications: false,
      theme: "light",
    },
  },
};

function ChatBox() {
  const [chats, setChats] = React.useState([]);
  const [participants, setParticipants] = React.useState([]);

  useEffect(() => {
    setChats(demoChats.messages);
    setParticipants(demoChats.participants);
  }, []);

  return (
    <div className="flex flex-col bg-gray-50 h-full border-r border-l border-gray-200 shadow-sm">
      <div className="bg-white p-4 border-b border-gray-200 text-xs font-bold">
        Chat
      </div>
      <div className="flex-1 p-4 overflow-y-scroll">
        {chats.map((chat) => {
          const participant = participants.find(
            (participant) => participant.userId === chat.senderId
          );
          return (
            <ChatBubble
              key={chat.messageId}
              chat={chat}
              participant={participant}
            />
          );
        })}
      </div>
      <ChatInput />
    </div>
  );
}

export default ChatBox;
