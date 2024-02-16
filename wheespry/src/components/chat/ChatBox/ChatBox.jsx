import React, { useEffect } from "react";
import ChatInput from "../ChatInput/ChatInput";
import ChatBubble from "../ChatBubble/ChatBubble";
import MiniAvatar from "../../UserAvatar/MiniAvatar";
import ActionChatButton from "../ActionChatButton/ActionChatButton";

function ChatBox({
  message,
  input,
  handleInputChange,
  handleSend,
  joinRoom,
  leaveRoom,
}) {
  const [chats, setChats] = React.useState([]);
  const [participants, setParticipants] = React.useState([]);

  useEffect(() => {}, []);
  console.log("PARTI :", participants);
  return (
    <div className="flex flex-col bg-gray-50 h-full border-r border-l border-gray-200 shadow-sm">
      <div className="bg-white p-4 border-b border-gray-200 text-xs font-bold flex justify-between">
        <span className="text-gray-700">Chat</span>
        <span className="flex gap-1">
          {participants.map((participant) => (
            <MiniAvatar
              key={participant.id}
              color={participant.color}
              username={participant.username}
            />
          ))}
        </span>
      </div>
      <div className="flex-1 p-4 overflow-y-scroll relative">
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
        <ActionChatButton />
      </div>
      <ChatInput />
    </div>
  );
}

export default ChatBox;
