import React from 'react';
import  React360Viewer  from 'react-360-view'; // Import React360Viewer from react-360-view

import one from "../assets/one.jpeg"; // Make sure the path is correct

const PanoramaViewer = () => {
  return (
    <div
      style={{
        border: '1px solid red',
        borderRadius: '5px',
        boxShadow: '5px 5px 5px grey'
      }}
    >
      <React360Viewer
        imagesBaseUrl={one}
        imagesCount={36}
        imagesFiletype="jpeg"
        mouseDragSpeed={20}
        notifyOnPointerDown={() => {}}
        notifyOnPointerMoved={() => {}}
        notifyOnPointerUp={() => {}}
      />
    </div>
  );
};

export default PanoramaViewer;
