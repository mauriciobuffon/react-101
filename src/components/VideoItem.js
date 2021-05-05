import "./VideoItem.css";
import React from "react";

const VideoItem = (props) => {
  const { video, onSelect } = props;

  return (
    <div className="video-item item" onClick={() => onSelect(video)}>
      <img
        className="ui image"
        alt="youtube video"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
