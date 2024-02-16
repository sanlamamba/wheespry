// App.js
import React from "react";
import ChatBox from "./components/chat/ChatBox/ChatBox";
import VideoLiveChat from "./components/video/VideoLiveChat/VideoLiveChat";
import useSocket from "./hooks/useSocket";
import useInput from "./hooks/useInput";
import FullScreen from "./layout/FullScreen";

export function App() {
  const {
    messages,
    joinRoom,
    leaveRoom,
    sendMessage,
    room,
    users,
    rooms,
    fetchUsers,
    fetchRooms,
  } = useSocket();
  const { value: input, onChange: handleInputChange, clearInput } = useInput();
  const handleSend = () => {
    sendMessage(input);
    clearInput();
  };

  React.useEffect(() => {
    console.log("SOCKET DATA", room, users, rooms);
  }, [room, users, rooms]);
  return (
    <FullScreen>
      <main class="container max-w-7xl mx-auto flex">
        <div class="flex-1 py-2 gap-1">
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => joinRoom("solo")}
          >
            Join Solo Room
          </button>
          <VideoLiveChat />
        </div>
        <div class="flex-1">
          <ChatBox
            messages={messages}
            input={input}
            handleInputChange={handleInputChange}
            handleSend={handleSend}
            joinRoom={joinRoom}
            leaveRoom={leaveRoom}
          />
        </div>
      </main>
    </FullScreen>
  );
}
