import { useState } from "react";
import { Modal } from "antd";
import VideoModal from "./VideoModal";

const Navigation = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleCancel = () => {
    setIsModalVisible(false);
    console.log("closed");
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      Pariatur sint incididunt nostrud duis. Labore mollit nisi ipsum anim
      fugiat dolore mollit. Labore ex tempor tempor pariatur dolor consectetur
      do quis sit.
      <iframe
        width="600"
        height="500"
        src={`https://www.youtube.com/embed/R_UJYQoWVwY?autoplay=1`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        width={1000}
      >
        <VideoModal url={""} />
      </Modal>
      <button onClick={showModal}>Play</button>
    </>
  );
};

export default Navigation;
