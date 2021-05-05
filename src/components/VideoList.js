import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const { videos, onSelect } = props;

  return (
    <div className="ui relaxed divided list">
      {videos.map((video) => (
        <VideoItem key={video.id.videoId} video={video} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default VideoList;
