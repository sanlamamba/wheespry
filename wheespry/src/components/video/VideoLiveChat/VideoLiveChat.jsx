import React from "react";
import VideoLiveChatBox from "./VideoLiveChatBox";

function VideoLiveChat() {
  return (
    <div className="px-3 flex-row gap-2">
      <VideoLiveChatBox />
      <VideoLiveChatBox />
    </div>
  );
}

export default VideoLiveChat;
