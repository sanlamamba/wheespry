import ChatBox from "./components/chat/ChatBox/ChatBox";
import VideoLiveChat from "./components/video/VideoLiveChat/VideoLiveChat";
import FullScreen from "./layout/FullScreen";

export function App() {
  return (
    <FullScreen>
      <main class="container max-w-7xl mx-auto flex">
        <div class="flex-1 py-2 gap-1">
          <VideoLiveChat />
        </div>
        <div class="flex-1">
          <ChatBox />
        </div>
      </main>
    </FullScreen>
  );
}
