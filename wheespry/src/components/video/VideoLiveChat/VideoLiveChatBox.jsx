import React, { useEffect, useRef } from "react";
import { Empty } from "antd";

const VideoLiveChatBox = ({ stream }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  const aspectRatioPadding = (9 / 16) * 100;
  return (
    <div className="max-w-full border border-gray-100 px-3 rounded-lg bg-gray-200 overflow-hidden mb-2">
      <div
        className="relative"
        style={{ paddingTop: `${aspectRatioPadding}%` }}
      >
        {stream ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            controls
            className="absolute top-0 left-0 w-full h-full rounded-md"
            style={{ objectFit: "cover" }}
          ></video>
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="No video stream available"
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
          />
        )}
      </div>
    </div>
  );
};

export default VideoLiveChatBox;
