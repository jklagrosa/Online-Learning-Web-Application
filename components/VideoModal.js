import { useState } from "react";

const VideoModal = ({ url }) => {
  const [newUrl, setNewUrl] = useState(url ? `${url}?autoplay=1` : "");

  return (
    <>
      <iframe
        width="600"
        height="500"
        src={newUrl}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </>
  );
};

export default VideoModal;
